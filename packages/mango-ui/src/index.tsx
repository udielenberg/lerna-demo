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
	padding: 12px 20px 12px 40px;
	transition: width 0.4s ease-in-out;
	border: 3px solid ${({ color }: { color: string }) => color};
	transition: width 0.4s ease-in-out;
	outline-color: ${(props) => props.color};

	&:focus {
		width: 100%;
	}
`;

export const Button = styled.div<any>`
	padding: 5px 10px;
	border-radius: 10px;
	background: ${(props) => (props.different ? "#4148b3" : "#c040c0")};
	color: white;
	width: fit-content;
`;

const BlockContainer = styled.div`
	.container {
		display: flex;
		align-items: baseline;
	}

	.block-label {
		font-weight: bold;
		text-transform: uppercase;
		margin-right: 10px;
	}

	pre {
		padding: 10px;
		background: pink;
		font-size: 1.2rem;

		white-space: pre-wrap; /* Since CSS 2.1 */
		white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
		white-space: -pre-wrap; /* Opera 4-6 */
		white-space: -o-pre-wrap; /* Opera 7 */
		word-wrap: break-word;
	}
`;

interface BlockComponentProps {
	label: string;
	value: string;
}

export const Block: React.FC<BlockComponentProps> = (props) => {
	return (
		<BlockContainer>
			<span className="block-label">{props.label}:</span>
			<pre>{props.value}</pre>
		</BlockContainer>
	);
};
