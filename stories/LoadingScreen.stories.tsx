import "../app/globals.css";
import type { Meta, StoryObj } from "@storybook/react";
import LoadingScreen from "../components/LoadingScreen";

const meta: Meta<typeof LoadingScreen> = {
  title: "Components/LoadingScreen",
  component: LoadingScreen,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoadingScreen>;

export const WithVideos: Story = {
  args: {
    videos: ["/ava-black.mp4"],
    children: (
      <div className="flex flex-col items-center justify-center gap-4 p-16">
        <h2>Content loaded!</h2>
        <p className="text-(--gray)">Children are shown after videos are ready.</p>
      </div>
    ),
  },
};

export const NoVideos: Story = {
  args: {
    videos: [],
    children: (
      <div className="flex flex-col items-center justify-center gap-4 p-16">
        <h2>Instant load</h2>
        <p className="text-(--gray)">No videos to wait for — content shows immediately.</p>
      </div>
    ),
  },
};
