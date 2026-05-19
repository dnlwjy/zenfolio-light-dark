import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import ContactForm from "../components/ContactForm";

const meta: Meta<typeof ContactForm> = {
  title: "Components/ContactForm",
  component: ContactForm,
  argTypes: {
    styles: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl p-8">
        <Story />
      </div>
    ),
  ],
};

export const NarrowLayout: Story = {
  args: {
    styles: "max-w-sm",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm p-8">
        <Story />
      </div>
    ),
  ],
};
