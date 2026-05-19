import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "../components/LinkButton";

const meta: Meta<typeof LinkButton> = {
  title: "Components/LinkButton",
  component: LinkButton,
  argTypes: {
    title: { control: "text" },
    link: { control: "text" },
    styles: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const NoLink: Story = {
  args: {
    title: "Disabled (no link)",
  },
};

export const InternalLink: Story = {
  args: {
    title: "View Project",
    link: "/builds",
  },
};

export const ExternalLink: Story = {
  args: {
    title: "Visit Website",
    link: "https://github.com",
  },
};

export const MailtoLink: Story = {
  args: {
    title: "hello@example.com",
    link: "mailto:hello@example.com",
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <LinkButton title="Disabled (no link)" />
      <LinkButton title="Internal → /builds" link="/builds" />
      <LinkButton title="External → GitHub" link="https://github.com" />
      <LinkButton title="Email → hello@example.com" link="mailto:hello@example.com" />
    </div>
  ),
};
