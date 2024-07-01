import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";
import { iconOptions } from "./icon-utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Icon Button",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "base",
    disabled: false,
    name: "ArrowRight", // fix in storybook
  },
  argTypes: {
    name: {
      options: [...iconOptions],
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DgeLmVs39DGeemGxu3WDvO/Working-Draft?node-id=62-1420&t=phOK4WiygQ3EPmvH-4",
    },
  },
};
