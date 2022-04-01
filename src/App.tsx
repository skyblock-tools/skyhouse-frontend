import { useRoutes, Redirect } from 'raviger';
import { GlobalStyles } from 'twin.macro';
import CustomStyles from '@/components/CustomStyles';
import { Suspense } from 'preact/compat';
import { StoreProvider } from 'easy-peasy';
import { Profile } from '@/state/user';
import { store } from '@/state';
import Loading from '@/components/Loading';
import AppRouter from '@/routers/AppRouter';
import AuthRouter from '@/routers/AuthRouter';
import Navigation from '@/components/Navigation';

const AuthRoutes = {
	'/': () => <Redirect to={`skyhouse`} />,
	'/skyhouse*': () => <AppRouter />,
};

const NoAuthRoutes = {
	'/': () => <Redirect to={`skyhouse`} />,
	'/skyhouse*': () => <AuthRouter />,
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

	const GlobalRoute = useRoutes(AuthRoutes);
	const NeedLogin = useRoutes(NoAuthRoutes);

	return (
		<>
			<GlobalStyles />
			<CustomStyles />
			<StoreProvider store={store}>
				<Navigation />
				<Suspense fallback={<Loading />}>
					{userSessionData == null || userSessionData?.privilege_level == 0 || userSessionData?.privilege_level == 1 ? NeedLogin : GlobalRoute}
				</Suspense>
			</StoreProvider>
		</>
	);
};

export default App;
