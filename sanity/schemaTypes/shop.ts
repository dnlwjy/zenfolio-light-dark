import { defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const products = defineType({
  name: "shop",
  title: "Products",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "shop" }),
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", title: "Cover Image", type: "image", description: "Used for social media preview (recommended 1200x630)" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Templates", value: "Web Templates" },
          { title: "Components", value: "components" },
        ],
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.min(0).error("Bro, harga masa bisa minus"),
    },
    { name: "description", title: "Description", type: "text" },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "object", name: "link", fields: [
            { name: "text", type: "string", title: "Link Text" },
            { name: "href", type: "url", title: "URL" },
          ],
        },
      ],
    },
    {
      name: "checkout",
      title: "Checkout Link",
      type: "url",
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }).error("Masukin yang bener bro"),
    },
    { name: "preview", title: "Preview", type: "url" },
    {
      name: "marketplaceURL",
      title: "Marketplace URL",
      type: "url",
      description: "External link to the product on its marketplace (e.g. Framer, ThemeForest, etc)",
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    },
  ],
});