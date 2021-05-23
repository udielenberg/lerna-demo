import React from "react";
import { Block, BlockProps } from "./Block";
import { Story, Meta } from "@storybook/react";

export default {
	title: "Mango-ui/Block",
	component: Block,
} as Meta;

const Template: Story<BlockProps> = (args) => <Block {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	value: "Bugs Bunny",
	label: "User Details",
};
