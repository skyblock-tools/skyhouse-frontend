import { useRoutes, Redirect } from 'raviger';
import { lazy, Suspense } from 'preact/compat';
import Loading from '@/components/Loading';
import OAuth2Callback from '@/pages/OAuth2Callback';
import SkyhousePlus from '@/pages/SkyhousePlus';
import { applyVueInReact } from 'veaury';
import VueFlipper from '@/components/vue/Flipper.vue';

const Flipper = lazy(() => import('@/pages/Flipper'));
//const Flipper = applyVueInReact(VueFlipper);
const Profile = lazy(() => import('@/pages/Profile'));

const Routes = {
	'/': () => <Redirect to={`/skyhouse/flipper`} />,
	'/skyhouse+': () => <SkyhousePlus />,
	'/flipper': () => <Flipper />,
	'/profile': () => <Profile />,
	'/oauth_callback': () => <OAuth2Callback />,
};

const BaseRouter = () => {
	const routeResult = useRoutes(Routes, { basePath: '/skyhouse' });
	return <Suspense fallback={<Loading />}>{routeResult}</Suspense>;
};

export default BaseRouter;
