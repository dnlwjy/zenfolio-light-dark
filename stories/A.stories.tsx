import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import A from "../components/A";

const meta: Meta<typeof A> = {
  title: "Components/A",
  component: A,
  argTypes: {
    title: { control: "text" },
    link: { control: "text" },
    styles: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof A>;

export const NoLink: Story = {
  args: {
    title: "Plain Text (no link)",
  },
};

export const InternalLink: Story = {
  args: {
    title: "Go to About",
    link: "/about",
  },
};

export const ExternalLink: Story = {
  args: {
    title: "Visit GitHub",
    link: "https://github.com",
  },
};

export const MailtoLink: Story = {
  args: {
    title: "Send Email",
    link: "mailto:hello@example.com",
  },
};

export const TelLink: Story = {
  args: {
    title: "Call Us",
    link: "tel:+1234567890",
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <A title="Plain Text (no link)" />
      <A title="Internal Link → /about" link="/about" />
      <A title="External Link → GitHub" link="https://github.com" />
      <A title="Email → hello@example.com" link="mailto:hello@example.com" />
      <A title="Phone → +1234567890" link="tel:+1234567890" />
    </div>
  ),
};
