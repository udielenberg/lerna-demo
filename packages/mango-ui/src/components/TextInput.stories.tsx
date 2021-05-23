import React from "react";
import { TextInput } from "./TextInput";
import { Story, Meta } from "@storybook/react";

export default {
	title: "Mango-ui/TextInput",
	component: TextInput,
} as Meta;

type TextInputType = HTMLInputElement & { color: string };

// @ts-ignore
const Template: Story<TextInputType> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	placeholder: "placeholder",
	color: "springgreen",
};
