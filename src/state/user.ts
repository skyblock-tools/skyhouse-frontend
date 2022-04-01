import { Action, action, Thunk, thunk } from 'easy-peasy';

export interface Profile {
	avatar: string;
	discriminator: string;
	locale: string;
	username: string;
	id: string;
}

export interface UserData {
	privilege_level: string;
	discord_info: Array<Profile>;
	session_data: any;
}

export interface UserStore {
	data?: UserData;
	setUserData: Action<UserStore, UserData>;
}

const user: UserStore = {
	data: undefined,
	setUserData: action((state, payload) => {
		state.data = payload;
	}),

	updateUserData: action((state, payload) => {
		// Limitation of Typescript, can't do much about that currently unfortunately.
		// @ts-ignore
		state.data = { ...state.data, ...payload };
	}),
};

export default user;
