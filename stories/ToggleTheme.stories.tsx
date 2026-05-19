import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import ToggleTheme from "../components/ToggleTheme";

const meta: Meta<typeof ToggleTheme> = {
  title: "Components/ToggleTheme",
  component: ToggleTheme,
  argTypes: {
    styles: { control: "text" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ToggleTheme>;

export const Default: Story = {};

export const WithCustomStyles: Story = {
  args: {
    styles: "p-2 bg-(--divider) rounded-full",
  },
};
