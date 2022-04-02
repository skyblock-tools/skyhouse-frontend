import { useRoutes, Redirect } from 'raviger';
import Unauthorized from '@/pages/Unauthorized';
import SkyhousePlus from '@/pages/SkyhousePlus';

const Routes = {
	'/': () => <Redirect to={`/skyhouse/flipper`} />,
	'/flipper': () => <Unauthorized />,
	'/profile': () => <Unauthorized />,
	'/skyhouse+': () => <SkyhousePlus />,
	'/oauth_callback': () => <OAuth2Callback />,
};

const BaseRouter = () => {
	const routeResult = useRoutes(Routes, { basePath: '/skyhouse' });
	return routeResult;
};

export default BaseRouter;
