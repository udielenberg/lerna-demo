import styled from "styled-components";

export const TextInput = styled.input`
	width: 130px;
	box-sizing: border-box;
	border-radius: 4px;
	font-size: 16px;
	background-color: white;
	background-image: url("searchicon.png");
	background-position: 10px 10px;
	background-repeat: no-repeat;
	padding: 12px 20px 12px 20px;
	transition: width 0.4s ease-in-out;
	border: 3px solid ${({ color }: { color: string }) => color};
	transition: width 0.4s ease-in-out;
	outline-color: ${(props) => props.color};

	&:focus {
		width: 100%;
	}
`;
