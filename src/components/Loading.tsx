import Spinner from '@/components/Spinner';
import tw from 'twin.macro';

const Loading = () => {
	return (
		<div css={tw`w-full h-screen flex justify-center items-center`}>
			<div>
				<Spinner size="large" />
			</div>
		</div>
	);
};

export default Loading;
