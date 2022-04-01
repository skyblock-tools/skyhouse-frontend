import Spinner from '@/components/Spinner';
import { CSSTransition } from 'react-transition-group';
import { Offline } from 'react-detect-offline';
import tw from 'twin.macro';

const Fallback = () => {
	return (
		<Offline>
			<CSSTransition timeout={150} in appear classNames={'fade'}>
				<div
					css={[
						tw`bg-red-500 py-2`,
						`box-shadow: 0 4px 2px -2px rgb(0 0 0 / 0.25);
					`,
					]}>
					<div css={tw`flex items-center justify-center`}>
						<Spinner size={'small'} />
						<p css={tw`ml-2 text-sm text-red-50`}>We&apos;re having some trouble connecting to the internet, please wait...</p>
					</div>
				</div>
			</CSSTransition>
		</Offline>
	);
};

export default Fallback;
