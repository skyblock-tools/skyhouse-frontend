import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

const CustomStyles = createGlobalStyle`
	body {
		${tw`bg-gray-900 text-gray-50 overscroll-none`}
	}
`;

export default CustomStyles;
