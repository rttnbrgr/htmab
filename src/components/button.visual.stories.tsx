import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { iconOptions } from "./icon-utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button/Visual",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
    style: "fill",
    size: "base",
    disabled: false,
    icon: "ArrowRight",
    iconIs: "after",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Fill: Story = {
  args: {
    style: "fill",
  },
};

export const FillHover: Story = {
  args: {
    style: "fill",
  },
};

export const FillFocus: Story = {
  args: {
    style: "fill",
  },
};

export const FillDisabled: Story = {
  args: {
    style: "fill",
  },
};

// with icon
// without

// small
// large

export const Outline: Story = {
  args: {
    style: "outline",
  },
};

export const Ghost: Story = {
  args: {
    style: "ghost",
  },
};
