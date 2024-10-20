import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "@patrickroelofs/components/paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Components/Paragraph",
  component: Paragraph,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  render: (props) => (
    <Paragraph size={props.size} {...props}>
      Hello
    </Paragraph>
  ),
  name: "Paragraph",
  args: {
    children: "Hello world",
    size: "medium",
  },
};
