import "../app/globals.css";
import type { Meta } from "@storybook/react";
import {
  Home,
  Builds,
  About,
  Contact,
  Preview,
  IG,
  LI,
  Github,
  Spotify,
  Search,
  Close,
} from "../components/IconLibrary";

const meta: Meta = {
  title: "Components/IconLibrary",
};

export default meta;

const icons = [
  { name: "Home", Component: Home },
  { name: "Builds", Component: Builds },
  { name: "About", Component: About },
  { name: "Contact", Component: Contact },
  { name: "Preview", Component: Preview },
  { name: "IG", Component: IG },
  { name: "LI", Component: LI },
  { name: "Github", Component: Github },
  { name: "Spotify", Component: Spotify },
  { name: "Search", Component: Search },
  { name: "Close", Component: Close },
];

export const AllIcons = {
  render: () => (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 p-8">
      {icons.map(({ name, Component }) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Component size={32} />
          <span className="tag text-(--gray) text-center">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-end gap-6 p-8">
      {[16, 20, 24, 32, 40, 48].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Home size={size} />
          <span className="tag text-(--gray)">{size}px</span>
        </div>
      ))}
    </div>
  ),
};
