import tw from 'twin.macro';
import SkyhouseShader from '@/assets/images/shader-3.webp';
import Animations from '@/components/styles/Animations';
import { useStoreState } from 'easy-peasy';

const SkyhousePlus = () => {
	const OwnsSkyhousePlus = useStoreState((state) => state.user.data!.skyhouse_plus);

	return (
		<div tw="-mt-16 grid w-full h-screen place-items-center bg-cover bg-center col-start-1 row-start-1">
			<div tw="z-0 flex items-center justify-center max-w-7xl gap-4 p-4 col-start-1 row-start-1 ">
				<div css={[{ backgroundImage: `url(${SkyhouseShader})` }, tw`mt-10 bg-cover xl:mx-80 xl:fixed rounded-xl shadow-xl`]}>
					<div tw="w-full h-full bg-zinc-900/70 py-8 px-8 rounded-xl backdrop-blur-sm">
						<h5 tw="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-green-300">
							Skyhouse<span tw="text-sky-400">+</span>
						</h5>
						<p tw="text-zinc-300">
							Skyhouse+ is our way of having a premium on our services. The profits from this go solely towards maintaining the service and future
							projects.
						</p>
						<p tw="pt-3 font-semibold italic mb-3 text-sky-100">
							By subscribing to Skyhouse+ you are directly supporting us and you also receive the following benefits:
						</p>
						<div tw="p-3 pt-0 text-zinc-300 font-medium">
							<p>✓ No profit cap on BIN to BIN flips</p>
							<p>✓ Filters</p>
							<p>✓ Increased ratelimit</p>
							<p>
								✓ <span tw="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-green-400 to-purple-400">Chroma on the mod</span> (if
								using SBA version 1.6.0+)
							</p>
							<p>✓ Access to cool-chat</p>
							<p>✓ Future perks</p>
						</div>
						<button
							css={[
								Animations,
								tw`mt-6 text-sm inline-flex items-center text-center px-4 py-3 rounded-lg bg-sky-400 text-zinc-800 font-semibold hover:bg-sky-300 transition`,
							]}>
							PURCHASE SKYHOUSE+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkyhousePlus;
