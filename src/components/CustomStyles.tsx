import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const CustomStyles = createGlobalStyle`
	body {
		${tw`bg-[#2F2F33] text-zinc-50 overscroll-none`}
	}
`;

export default CustomStyles;
