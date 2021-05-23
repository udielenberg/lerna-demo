import React from "react";
import { Button, ButtonProps } from "./Button";
import { Story, Meta } from "@storybook/react";

export default {
	title: "Mango-ui/Button",
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	value: "Click me!",
};
export const Different = Template.bind({});
Different.args = {
	value: "Click me",
	different: true,
};
