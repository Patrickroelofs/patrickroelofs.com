import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@patrickroelofs/design-system/container";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  render: (props) => <Container {...props}>{props.children}</Container>,
  name: "Paragraph",
  args: {
    children: "Hello world",
  },
};
