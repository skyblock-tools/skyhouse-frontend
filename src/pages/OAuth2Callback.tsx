import 'twin.macro';
import Loading from '@/components/Loading';

const OAuth2Callback = () => {
	if (window.location.href.includes('error')) {
		window.close();
	}
	const query = new URLSearchParams(window.location.search);
	const code = query.get('code');
	httpGetAsync(`https://api.skyblock.tools/api/auth/oauth/discord?code=${code}`, function (res: any) {
		const json = res.responseText;
		console.log;
		window.localStorage.setItem('user_session_data', json);
		window.close();
	});

	function httpGetAsync(theUrl: string, callback: any) {
		if (window.location.href.includes('localhost')) {
			theUrl += '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fskyhouse%2Foauth_callback%2F';
		}
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function () {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
		};
		xmlHttp.open('GET', theUrl, true);
		xmlHttp.send(null);
	}

	return (
		<div tw="z-50">
			<Loading />
		</div>
	);
};

export default OAuth2Callback;
