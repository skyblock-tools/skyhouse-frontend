import { useRoutes, Redirect } from 'raviger';
import { GlobalStyles } from 'twin.macro';
import CustomStyles from '@/components/CustomStyles';
import { Suspense } from 'preact/compat';
import { StoreProvider } from 'easy-peasy';
import { Profile } from '@/state/user';
import { store } from '@/state';
import Loading from '@/components/Loading';
import BaseRouter from '@/routers/BaseRouter';
import Navigation from '@/components/Navigation';

const Routes = {
	'/': () => <Redirect to={`skyhouse`} />,
	'/skyhouse*': () => <BaseRouter />,
};

const App = () => {
	const userSessionData = JSON.parse(window.localStorage.getItem('user_session_data'));
	if (!store.getState().user.data) {
		store.getActions().user.setUserData({
			username: userSessionData?.discord_info.username,
			privilege_level: userSessionData?.privilege_level,
			discord_info: userSessionData?.discord_info,
			session_data: userSessionData,
		});
	}

	const GlobalRoute = useRoutes(Routes);
	return (
		<>
			<GlobalStyles />
			<CustomStyles />
			<StoreProvider store={store}>
				<Navigation />
				<Suspense fallback={<Loading />}>{GlobalRoute}</Suspense>
			</StoreProvider>
		</>
	);
};

export default App;
