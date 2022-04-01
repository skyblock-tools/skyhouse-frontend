import { useRoutes, Redirect } from 'raviger';
import Unauthorized from '@/pages/Unauthorized';

const Routes = {
	'/': () => <Redirect to={`/skyhouse/flipper`} />,
	'/skyhouse+': () => <Unauthorized />,
	'/flipper': () => <Unauthorized />,
	'/profile': () => <Unauthorized />,
	'/oauth_callback': () => <OAuth2Callback />,
};

const BaseRouter = () => {
	const routeResult = useRoutes(Routes, { basePath: '/skyhouse' });
	return routeResult;
};

export default BaseRouter;
