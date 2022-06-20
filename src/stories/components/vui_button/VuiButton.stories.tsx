
import { ComponentMeta, ComponentStory } from "@storybook/react";
import VuiButton from "./VuiButton";

export default {
  title: "VuiButton",
  component: VuiButton,
} as ComponentMeta<typeof VuiButton>;

const Template: ComponentStory<typeof VuiButton> = (args) => <VuiButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  children: 'Button'
};
