type SEOProps = {
  title: string
  description?: string
  image?: string
  url?: string
}

const DEFAULT_DESCRIPTION = "Bridging design and code — from Figma and Framer to production-ready Next.js."

export function generateSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = "/og-default.jpg",
  url = "",
}: SEOProps) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}