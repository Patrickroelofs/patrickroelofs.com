import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "@patrickroelofs/components/paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Components/Paragraph",
  component: Paragraph,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  render: (props) => <Paragraph {...props}>{props.children}</Paragraph>,
  name: "Paragraph",
  args: {
    children: "Hello world",
    size: "medium",
  },
};
