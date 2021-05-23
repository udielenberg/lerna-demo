import styled from "styled-components";

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

export interface BlockProps {
	label: string;
	value: string;
}

export const Block: React.FC<BlockProps> = (props) => {
	return (
		<BlockContainer>
			<span className="block-label">{props.label}:</span>
			<pre>{props.value}</pre>
		</BlockContainer>
	);
};
