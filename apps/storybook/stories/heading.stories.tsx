import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@patrickroelofs/components/heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  render: (props) => <Heading {...props}>{props.children}</Heading>,
  name: "Heading",
  args: {
    children: "Hello World",
  },
};
