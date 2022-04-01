import styled from 'styled-components';
import tw from 'twin.macro';

const TextInput = styled.input`
	${tw`w-full bg-zinc-100 dark:(bg-zinc-800 border-zinc-700 focus:border-zinc-600) outline-none
	border border-zinc-200 light:focus:border-zinc-300 rounded mt-1.5 px-3.5 py-1 text-zinc-600 dark:text-zinc-300
	shadow transition-colors duration-200 ease-in-out`}
`;

export default TextInput;
