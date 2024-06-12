import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    style: "fill",
    size: "base",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Fill: Story = {
  args: {
    style: "fill",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DgeLmVs39DGeemGxu3WDvO/Working-Draft?node-id=54-697&t=phOK4WiygQ3EPmvH-4",
    },
  },
};

export const Outline: Story = {
  args: {
    style: "outline",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DgeLmVs39DGeemGxu3WDvO/Working-Draft?node-id=62-1359&t=phOK4WiygQ3EPmvH-4",
    },
  },
};

export const Ghost: Story = {
  args: {
    style: "ghost",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DgeLmVs39DGeemGxu3WDvO/Working-Draft?node-id=62-1175&t=phOK4WiygQ3EPmvH-4",
    },
  },
};
