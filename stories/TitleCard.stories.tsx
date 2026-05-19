import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import TitleCard from "../components/TitleCard";

const meta: Meta<typeof TitleCard> = {
  title: "Components/TitleCard",
  component: TitleCard,
  argTypes: {
    title: { control: "text" },
    desc: { control: "text" },
    year: { control: "text" },
    link: { control: "text" },
    variant: {
      control: "select",
      options: ["up", "down", "left", "right"],
    },
    longDivider: { control: "boolean" },
    styles: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof TitleCard>;

export const Default: Story = {
  args: {
    title: "Brand Identity Design",
    desc: "A comprehensive brand identity system created for a modern tech startup, covering logo, typography, and color guidelines.",
    year: 2024,
    link: "/case-study/brand-identity",
    variant: "left",
    longDivider: false,
  },
};

export const WithLongDivider: Story = {
  args: {
    title: "E-Commerce Platform",
    desc: "End-to-end UX design for a B2C e-commerce platform with focus on conversion optimization.",
    year: 2023,
    link: "/case-study/ecommerce",
    longDivider: true,
  },
};

export const WithoutYear: Story = {
  args: {
    title: "Motion Graphics",
    desc: "Series of animated illustrations and motion graphics for social media campaigns.",
    link: "/case-study/motion",
  },
};

export const AnimateFromRight: Story = {
  args: {
    title: "Product Photography",
    desc: "Product photography direction and post-processing for a luxury fashion brand.",
    year: 2024,
    link: "/case-study/photography",
    variant: "right",
  },
};
