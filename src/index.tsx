import 'preact/debug';
import { render } from 'preact';
import App from '@/App';
import '@fontsource/inter';
import '@fontsource/inter/variable.css';

render(
	<App />,
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	document.getElementById('app')!
);
