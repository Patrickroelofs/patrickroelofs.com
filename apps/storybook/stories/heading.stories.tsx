import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@patrickroelofs/design-system/heading";

const meta: Meta<typeof Heading> = {
  title: "Primitives/Heading",
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
