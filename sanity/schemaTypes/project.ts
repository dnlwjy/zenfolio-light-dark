import { defineType } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export const caseStudy = defineType({
    name: "projects",
    title: "Case Studies",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "projects" }),
        { name: "title", title: "Title", type: "string" },
        { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
        { name: "featured", title: "Featured", type: "boolean", initialValue: false, description: "Mark this case study as featured" },

        { name: "role", title: "Role", type: "string", },
        { name: "year", title: "Year", type: "number", validation: (Rule) => Rule.min(2020).max(new Date().getFullYear()) },
        { name: "client", title: "Client", type: "string", },
        { name: "website", title: "Website", type: "url", validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }).error("Masukin yang bener bro"), },

        { name: "description", title: "Description", type: "text" },
        { name: "coverImage", title: "Cover Image", type: "image", description: "Used for social media preview (recommended 1200x630)" },
        {
            name: "content", title: "Content", type: "array", of: [
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
            name: "documentation", title: "Documentation", type: "array", of: [
                { type: "image" }
            ],
        },
    ],
});