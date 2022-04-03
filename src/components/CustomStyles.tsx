import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const CustomStyles = createGlobalStyle`
	body {
		${tw`bg-zinc-800 text-zinc-50 overscroll-none`}
	}
`;

export default CustomStyles;
