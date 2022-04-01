import { createStore } from 'easy-peasy';
import user, { UserStore } from '@/state/user';

export interface ApplicationStore {
	user: UserStore;
}

const state: ApplicationStore = {
	user,
};

export const store = createStore(state);
