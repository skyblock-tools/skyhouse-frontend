import React, { useState, useEffect, Fragment } from 'react';
import { Link, useMatch } from 'raviger';
import tw from 'twin.macro';
import Fallback from '@/components/Fallback';
import Animations from '@/components/styles/Animations';
import { LoginViaDiscord, isOnFlipper } from '@/helpers';
import { useStoreState } from 'easy-peasy';

const NavLink = (props: any) => {
	const active = useMatch(props.href);

	return (
		<Link
			basePath="/"
			href={props.href}
			css={[
				Animations,
				tw`transition duration-150 rounded-lg px-3 py-1.5 mx-1 text-sm text-sky-100 text-center font-semibold hover:text-sky-200`,
				active && tw`bg-zinc-600/40 hover:text-sky-100`,
			]}
		>
			{props.name}
		</Link>
	);
};

const NavBar = () => {
	const privilegeLevel = useStoreState((state) => state.user.data!.privilege_level);
	const sessionData = useStoreState((state) => state.user.data!.session_data);
	const [loginStatus, setLoginStatus] = useState(false);
	const [avatar, setAvatar] = useState(null);

	useEffect(() => {
		if (sessionData == null) {
			setLoginStatus(false);
		} else if (privilegeLevel == 2) {
			setLoginStatus(false);
		} else {
			setLoginStatus(true);
			setAvatar('https://cdn.discordapp.com/avatars/' + sessionData['discord_info'].id + '/' + sessionData['discord_info'].avatar + '.webp?size=512');
		}
	}, [sessionData]);

	const Logout = () => {
		localStorage.removeItem('user_session_data');
		setLoginStatus(false);
		window.location.reload();
	};

	if (location.pathname.startsWith('/skyhouse/oauth_callback')) {
		return null;
	} else {
		return (
			<div tw="z-50 top-0 sticky shadow-lg">
				<div tw="mx-auto flex items-center justify-between p-3 bg-zinc-900/80 backdrop-blur">
					<div tw="flex items-center space-x-4">
						<div tw="flex items-center space-x-1">
							<button tw="flex appearance-none p-1 text-zinc-500 md:hidden">
								<svg tw="h-6 w-6" fill="currentColor" viewBox="0 0 256 256">
									<line
										x1="40"
										y1="128"
										x2="216"
										y2="128"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="24"
									></line>
									<line
										x1="40"
										y1="64"
										x2="216"
										y2="64"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="24"
									></line>
									<line
										x1="40"
										y1="192"
										x2="216"
										y2="192"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="24"
									></line>
								</svg>
							</button>
							<Link href="/" css={tw`flex items-center transition hover:bg-zinc-600/10 -my-1 rounded-lg py-1 px-2`}>
								<div tw="text-sky-400 mr-1">
									<svg xmlns="http://www.w3.org/2000/svg" tw="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
										/>
									</svg>
								</div>
								<span tw="self-center text-xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-br from-sky-200 to-sky-50">
									Skyhouse
								</span>
							</Link>
						</div>
						<div tw="hidden items-center text-sm font-medium text-zinc-800 md:flex">
							<NavLink href="/skyhouse/flipper" name="FLIPPER" />
							<NavLink href="/skyhouse/skyhouse+" name="SKYHOUSE+" />
						</div>
					</div>
					<div tw="flex items-center -my-1">
						{loginStatus ? (
							<div
								onClick={() => Logout()}
								tw="relative flex h-10 w-10 select-none items-center justify-center rounded-full bg-zinc-100 text-sm font-bold uppercase text-zinc-800"
							>
								<img tw="h-full w-full rounded-full object-cover object-center" src={avatar} />
							</div>
						) : (
							<button
								onClick={() => LoginViaDiscord()}
								css={[Animations, tw`rounded-lg px-4 py-3 font-semibold text-sky-100 transition hover:bg-zinc-600/40 text-sm`]}
							>
								LOGIN VIA DISCORD
							</button>
						)}
					</div>
				</div>
				<Fallback />
			</div>
		);
	}
};

export default NavBar;
