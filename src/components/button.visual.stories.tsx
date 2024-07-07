import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { iconOptions } from "./icon-utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Visual Tests/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/**
 * Fill - States
 */
export const Fill: Story = {
  args: {
    children: "Button",
    style: "fill",
    size: "base",
    disabled: false,
    // remove the icon
    icon: "ArrowRight",
    iconIs: "after",
  },
};

export const FillHover: Story = {
  args: {
    ...Fill.args,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const FillFocus: Story = {
  args: {
    ...Fill.args,
  },
  parameters: {
    pseudo: { "focus-visible": true },
  },
};

export const FillDisabled: Story = {
  args: {
    ...Fill.args,
    disabled: true,
  },
};

/**
 * Outline - States
 */
export const Outline: Story = {
  args: {
    ...Fill.args,
    style: "outline",
  },
};

export const OutlineHover: Story = {
  args: {
    ...Outline.args,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const OutlineDisabled: Story = {
  args: {
    ...Outline.args,
    disabled: true,
  },
};

/**
 * Ghost - States
 */
export const Ghost: Story = {
  args: {
    ...Fill.args,
    style: "ghost",
  },
};

export const GhostHover: Story = {
  args: {
    ...Fill.args,
    style: "ghost",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const GhostDisabled: Story = {
  args: {
    ...Fill.args,
    style: "ghost",
    disabled: true,
  },
};

/**
 * Icon
 */
export const WithIconBefore: Story = {
  args: {
    ...Fill.args,
    icon: "ArrowLeft",
    iconIs: "before",
  },
};

export const WithIconAfter: Story = {
  args: {
    ...Fill.args,
    icon: "ArrowRight",
    iconIs: "after",
  },
};

export const WithNoIcon: Story = {
  args: {
    ...Fill.args,
  },
};

/**
 * Size
 */
export const SizeBase: Story = {
  args: {
    ...Fill.args,
  },
};

export const SizeSmall: Story = {
  args: {
    ...Fill.args,
    size: "small",
  },
};
