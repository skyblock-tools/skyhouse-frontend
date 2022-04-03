import tw from 'twin.macro';
import NotLoggedInBG from '@/assets/images/shader-1.webp';
import NotInServerBG from '@/assets/images/shader-2.webp';
import Animations from '@/components/styles/Animations';
import { LoginViaDiscord } from '@/helpers';
import { useStoreState } from 'easy-peasy';

const Unauthorized = () => {
	const privilegeLevel = useStoreState((state) => state.user.data!.privilege_level);

	return (
		<div
			css={[
				{ backgroundImage: `url(${privilegeLevel == 1 ? NotLoggedInBG : NotInServerBG})` },
				tw`-mt-16 grid w-full h-screen place-items-center bg-cover bg-center col-start-1 row-start-1`,
			]}
		>
			<div tw="col-start-1 row-start-1 h-full w-full bg-[#22212c] bg-opacity-50"></div>
			<div tw="text-center z-0 flex items-center justify-center max-w-7xl gap-4 p-4 col-start-1 row-start-1">
				<div tw="max-w-2xl mt-10 bg-zinc-800/80 backdrop-blur shadow-inner shadow-2xl pt-20 pb-10 px-20 rounded-2xl">
					<h1 tw="mb-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-green-300">
						This page requires Authorization
					</h1>
					{privilegeLevel == 1 ? (
						<p tw="mb-10 text-base text-zinc-300">
							Skyhouse requires you to be logged into a valid discord account and a member of the skyblock.tools discord server.
						</p>
					) : (
						<p tw="mb-5 text-base text-zinc-300">
							Skyhouse requires you to be a member of the skyblock.tools discord server. If you are already a member of the server, please log out and
							log back in.
						</p>
					)}
					{privilegeLevel == 1 ? (
						<button
							onClick={() => LoginViaDiscord()}
							css={[Animations, tw`transition duration-150 bg-gray-700 rounded-lg font-semibold text-sm hover:bg-[#6d78ed] `]}
						>
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 640 512"
									fill="currentColor"
									tw="rounded-l-lg py-2 px-2 w-10 inline bg-[#5865F2] mr-1"
								>
									<path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
								</svg>
								<span tw="px-2">LOGIN VIA DISCORD</span>
							</div>
						</button>
					) : (
						<button css={[Animations, tw`transition duration-150 bg-[#5865F2] rounded-lg py-3.5 px-4 font-semibold text-sm hover:bg-[#6d78ed] `]}>
							JOIN DISCORD
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Unauthorized;
