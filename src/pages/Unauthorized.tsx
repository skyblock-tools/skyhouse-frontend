import tw from 'twin.macro';
import NotLoggedInBG from '@/assets/images/shader-1.webp';
import NotInServerBG from '@/assets/images/shader-2.webp';
import { useStoreState } from 'easy-peasy';

const Unauthorized = () => {
	const privilegeLevel = useStoreState((state) => state.user.data!.privilege_level);

	return (
		<div css={[{ backgroundImage: `url(${NotLoggedInBG})`, backgroundPosition: 'center bottom' }]}>
			<div tw="text-center">
				<div tw="max-w-md">
					<h1 tw="mb-5 text-5xl font-bold">This page requires Authorization</h1>
					<p tw="mb-5 text-base">
						Skyhouse requires you to be logged into a valid discord account and a member of the skyblock.tools discord server.
					</p>
					<p tw="mb-5">
						Skyhouse requires you to be a member of the skyblock.tools discord server. If you are already a member of the server, please log out and
						log back in.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Unauthorized;
