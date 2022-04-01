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
			css={[Animations, tw`rounded-lg px-3 py-1.5 mx-1 text-sm text-sky-100 text-center font-semibold`, active && tw`bg-gray-600/40`]}
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
			<div tw="top-0 sticky">
				<div tw="mx-auto flex items-center justify-between p-4 bg-gray-800/80 backdrop-blur ">
					<div tw="flex items-center space-x-4">
						<div tw="flex items-center space-x-2">
							<button tw="flex appearance-none p-1 text-gray-500 md:hidden">
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
							<Link href="/" tw="flex items-center">
								<img src="https://skyblock.tools/favicon.png" tw="mr-3 h-6 sm:h-9" alt="Skyhouse logo" />
								<span tw="self-center text-xl font-semibold whitespace-nowrap text-sky-100">Skyhouse</span>
							</Link>
						</div>
						<nav tw="ml-1 hidden items-center text-sm font-medium text-gray-800 md:flex">
							<NavLink href="/skyhouse/flipper" name="FLIPPER" />
							<NavLink href="/skyhouse/skyhouse+" name="SKYHOUSE+" />
						</nav>
					</div>
					<nav tw="flex items-center text-sm -my-1">
						{loginStatus ? (
							<div
								onClick={() => Logout()}
								tw="relative flex h-10 w-10 select-none items-center justify-center rounded-full bg-gray-100 text-sm font-bold uppercase text-gray-800"
							>
								<img tw="h-full w-full rounded-full object-cover object-center" src={avatar} />
							</div>
						) : (
							<button onClick={() => LoginViaDiscord()} tw="rounded-lg px-4 py-3 font-semibold text-sky-100 transition hover:bg-gray-600/40">
								LOGIN VIA DISCORD
							</button>
						)}
					</nav>
				</div>
				<Fallback />
			</div>
		);
	}
};

export default NavBar;
