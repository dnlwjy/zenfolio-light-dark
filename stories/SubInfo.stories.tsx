import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import SubInfo from "../components/SubInfo";

const meta: Meta<typeof SubInfo> = {
  title: "Components/SubInfo",
  component: SubInfo,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    styles: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SubInfo>;

export const TitleOnly: Story = {
  args: {
    title: "Category",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Client",
    subtitle: "Acme Corporation",
  },
};

export const WithExternalLink: Story = {
  args: {
    title: "Website",
    subtitle: "https://github.com",
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-wrap gap-8 p-8">
      <SubInfo title="Category" subtitle="Branding" />
      <SubInfo title="Year" subtitle="2024" />
      <SubInfo title="Client" subtitle="Acme Corp" />
      <SubInfo title="Website" subtitle="https://github.com" />
      <SubInfo title="Role" />
    </div>
  ),
};
