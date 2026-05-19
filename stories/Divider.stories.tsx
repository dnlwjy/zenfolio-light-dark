import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import Divider from "../components/Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    variant: {
      control: "select",
      options: ["left", "right"],
    },
    title: { control: "text" },
    titleStyles: { control: "text" },
    styles: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const LeftDefault: Story = {
  args: {
    variant: "left",
  },
};

export const RightVariant: Story = {
  args: {
    variant: "right",
  },
};

export const WithTitle: Story = {
  args: {
    variant: "left",
    title: "2024",
  },
};

export const RightWithTitle: Story = {
  args: {
    variant: "right",
    title: "Projects",
  },
};

export const FullWidth: Story = {
  args: {
    variant: "left",
    title: "Section Title",
    styles: "w-full mb-4",
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 w-64">
      <div>
        <p className="tag text-(--gray) mb-2">Left (no title)</p>
        <Divider variant="left" />
      </div>
      <div>
        <p className="tag text-(--gray) mb-2">Right (no title)</p>
        <Divider variant="right" />
      </div>
      <div>
        <p className="tag text-(--gray) mb-2">Left with title</p>
        <Divider variant="left" title="2024" />
      </div>
      <div>
        <p className="tag text-(--gray) mb-2">Right with title</p>
        <Divider variant="right" title="Projects" />
      </div>
      <div>
        <p className="tag text-(--gray) mb-2">Full width</p>
        <Divider variant="left" title="Full Width" styles="w-full" />
      </div>
    </div>
  ),
};
