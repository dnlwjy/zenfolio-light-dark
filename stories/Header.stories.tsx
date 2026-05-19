import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  argTypes: {
    styles: { control: "text" },
  },
  parameters: {
    // Simulate different active routes via nextjs-vite router mock
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const ActiveHome: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/" } },
  },
};

export const ActiveAbout: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/about" } },
  },
};

export const ActiveBuilds: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/builds" } },
  },
};

export const ActiveContact: Story = {
  parameters: {
    nextjs: { navigation: { pathname: "/contact" } },
  },
};
