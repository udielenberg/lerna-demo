import styled from "styled-components";

const ButtonContainer = styled.div<any>`
	padding: 5px 10px;
	border-radius: 10px;
	background: ${(props) => (props.different ? "#4148b3" : "#c040c0")};
	color: white;
	width: fit-content;
`;

export interface ButtonProps {
	different?: boolean;
	value: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
	return <ButtonContainer {...props}>{props.value}</ButtonContainer>;
};
