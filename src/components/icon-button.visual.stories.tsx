import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";
import { IconButton } from "./icon-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Visual Tests/Icon Button",
  component: IconButton,
  decorators: [
    Story => (
      <div style={{ padding: "1em", display: "inline-flex" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Reusable focus play test
 */
async function focusButton({ canvasElement }) {
  // Starts querying the component from its root
  const canvas = within(canvasElement);

  // Looks up the button and interacts with it.
  await canvas.getByRole("button").focus();
}

/**
 * Fill - States
 */
export const Fill: Story = {
  args: {
    style: "fill",
    size: "base",
    disabled: false,
    name: "ArrowRight", // fix in storybook
  },
};

export const FillHover: Story = {
  name: "Fill - Hover",
  args: {
    ...Fill.args,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const FillFocus: Story = {
  name: "Fill - Focus",
  args: {
    ...Fill.args,
  },
  play: focusButton,
};

export const FillDisabled: Story = {
  name: "Fill - Disabled",
  args: {
    ...Fill.args,
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
  name: "Ghost - Hover",

  args: {
    ...Fill.args,
    style: "ghost",
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const GhostFocus: Story = {
  name: "Ghost - Focus",
  args: {
    ...Fill.args,
    style: "ghost",
  },
  play: focusButton,
};

export const GhostDisabled: Story = {
  name: "Ghost - Disabled",
  args: {
    ...Fill.args,
    style: "ghost",
    disabled: true,
  },
};

/**
 * Size
 */
export const SizeBase: Story = {
  name: "Size - Base",
  args: {
    ...Fill.args,
  },
};

export const SizeSmall: Story = {
  name: "Size - Small",
  args: {
    ...Fill.args,
    size: "small",
  },
};
