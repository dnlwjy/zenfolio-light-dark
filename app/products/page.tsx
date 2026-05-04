import MotionDiv from "@/components/MotionDiv"
import { client } from "@/sanity/lib/client"
import Catalogue from "@/components/Catalogue"
import ItemCard from '@/components/ItemCard'
import { generateSEO } from "@/lib/seo"
import type { Products } from "@/types/sanity.types"

// 1. Rendering config: switched to SSG - better performance and SEO, but has to redeploy every time there's data change
export const dynamic = 'force-static'

// 2. metadata (SEO / head)
const description = "Pay once, forever yours, no monthly fees."
export const metadata = generateSEO({
    title: "Products | Daniel Wijaya",
    description,
    url: "/products",
})

// 3. queries
const query = `*[_type == "shop"] | order(orderRank asc) {
    _id,
    category,
    coverImage,
    title,
    price,
    slug
}`

export default async function Products() {
    const items = await client.fetch(query)

    return (
        <main>
            <section className="flex-col pt-40 gap-16">

                <MotionDiv variant="up" styles="flex flex-col gap-6 items-center w-full">
                    <h1>
                        <span className="text-(--gray)">Digital Products</span>
                        <br />
                        You Can Own
                    </h1>
                    <p className="text-center">{description}</p>
                </MotionDiv>

                <MotionDiv variant="up" del={0.7} styles="flex flex-col gap-24 w-full">
                    {items
                        .filter((pass: Products, index: number, self: Products[]) =>
                            pass.category && self.findIndex((e) => e.category === pass.category) === index
                        )
                        .map((pass: Products) => (
                            <Catalogue key={pass.category} title={pass.category!}>
                                {items
                                    .filter((e: Products) => e.category === pass.category)
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
                        ))}
                </MotionDiv>

            </section>
        </main>
    )
}