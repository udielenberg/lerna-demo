import React, { InputHTMLAttributes } from "react";
// interface Props extends InputHTMLAttributes<HTMLInputElement> {
interface Props extends InputHTMLAttributes<any> {
	color: string;
	style?: React.CSSProperties;
}
export const TextInput: React.FC<Props> = ({ color, ...props }) => {
	return <input {...props} style={{ border: `3px solid ${color}` }} />;
};
