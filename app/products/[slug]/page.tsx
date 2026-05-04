import MotionDiv from "@/components/MotionDiv"
import { client } from "@/sanity/lib/client"
import BtnSupport from "./BtnSupport"
import { urlFor } from "@/sanity/lib/image"
import ItemZoom from "@/components/ItemZoom"
import { notFound } from "next/navigation"
import Catalogue from "@/components/Catalogue"
import ItemCard from "@/components/ItemCard"
import { generateSEO } from "@/lib/seo"
import type { Products } from "@/types/sanity.types"
import { PortableText } from "@portabletext/react"
import Serializers from "@/lib/Serializers"
import LinkButton from "@/components/LinkButton"

// 1. Rendering config: switched to SSG - better performance and SEO, but has to redeploy every time there's data change
export const dynamic = 'force-static'
export async function generateStaticParams() {
    const slugs: string[] = await client.fetch(`*[_type == "shop"].slug.current`)
    return slugs.map((slug) => ({ slug }))
}

// 2. metadata (SEO / head)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const data = await client.fetch(
        `*[_type == "shop" && slug.current == $slug][0]{
        title,
        description,
        coverImage
        }`,
        { slug }
    )
    if (!data) return {}
    return generateSEO({
        title: `${data.title} | Daniel Wijaya`,
        description: data.description ?? "",
        image: data.coverImage ? urlFor(data.coverImage).width(1200).height(630).url() : undefined,
        url: `/products/${slug}`,
    })
}

// 3. queries
const query = `*[_type == "shop" && slug.current == $slug][0]{
    _id,
    coverImage,
    category,
    title,
    description,
    price,
    checkout,
    preview,
    marketplaceURL,
    content,
}`

const moreQuery = `*[_type == \"shop\" && slug.current != $slug]{
    _id,
    category,
    coverImage,
    title,
    price,
    slug
}`

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = await client.fetch(query, { slug });
    const moreItems = await client.fetch(moreQuery, { slug });

    if (!item) {
        notFound();
    }

    return (
        <main>
            <section id="product" className="flex-col md:flex-row lg:pt-80 pt-50 gap-16 max-w-640">
                <MotionDiv styles="flex aspect-square border border-(--divider) bg-(--white)/7 justify-center items-center md:w-1/3 w-full md:min-w-[520px] max-w-[640px]">
                    <ItemZoom
                        image={urlFor(item.coverImage).width(480).format("webp").url()}
                        alt={item.title}
                    />
                </MotionDiv>

                <MotionDiv variant="right" del={0.5} styles="flex flex-col gap-10 flex-1">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <span className="btn-text text-(--gray)">{item.category}</span>
                            <h1 className="text-start">{item.title}</h1>
                        </div>
                        <p className="max-w-225">{item.description}</p>
                    </div>

                    <BtnSupport checkoutURL={item.checkout} previewURL={item.preview} price={item.price} />
                </MotionDiv>
            </section>

            <section id="product-details" className="max-w-300">
                <MotionDiv variant="up" del={0.5} styles="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <strong className="text-(--white)">Features:</strong>
                        <PortableText
                            value={item.content}
                            components={Serializers}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <strong className="text-(--white)">Term of Use</strong>
                        <p className="mb-5">By purchasing this item, you agree that sharing is acceptable, but <strong>redistributing or reselling is strictly prohibited</strong> and violates ownership rights.</p>
                    </div>

                    <LinkButton link={item.marketplaceURL} title="View on Marketplace" />
                </MotionDiv>
            </section>

            <section id="more-items">
                <MotionDiv variant="up" styles="flex flex-col gap-24 w-full">
                    <Catalogue title={`More ${item.category}`}>
                        {moreItems
                            .filter((e: Products) => e.category === item.category)
                            .map((e: Products) => (
                                <ItemCard
                                    key={e._id}
                                    title={e.title}
                                    image={e.coverImage}
                                    link={`/products/${e.slug!.current}`}
                                    price={e.price}
                                />
                            ))}
                    </Catalogue>
                </MotionDiv>
            </section>

        </main>
    );
}