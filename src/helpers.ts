import { differenceInHours, format, formatDistanceToNow, parseISO } from 'date-fns';
import { useEffect, useState, useRef } from 'preact/hooks';
import { RatingTypeData } from '@/types';
import { getRequest } from '@/api/http';
import DOMPurify from 'dompurify';

type RequestResult = {
	data: Record<string, unknown>[];
};

function debounce<Params extends any[]>(func: (...args: Params) => any, timeout: number): (...args: Params) => void {
	let timer: NodeJS.Timeout;
	return (...args: Params) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, timeout);
	};
}

const bytesToMegabytes = (bytes: number) => Math.floor(bytes / 1024 / 1024);

const megabytesToBytes = (mb: number) => Math.floor(mb * 1024 * 1024);

function bytesToHuman(bytes: number): string {
	if (bytes === 0) {
		return '0 kB';
	}

	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return `${Number((bytes / Math.pow(1024, i)).toFixed(2))} ${['Bytes', 'kB', 'MB', 'GB', 'TB'][i]}`;
}

function megabytesToHuman(mb: number): string {
	return bytesToHuman(megabytesToBytes(mb));
}

const randomInt = (low: number, high: number) => Math.floor(Math.random() * (high - low) + low);

const cleanDirectoryPath = (path: string) => path.replace(/(\/(\/*))|(^$)/g, '/');

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

function capitalizeFirstLetter(string: any) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function encodePathSegments(path: string): string {
	return path
		.split('/')
		.map((s) => encodeURIComponent(s))
		.join('/');
}

function hashToPath(hash: string): string {
	return hash.length > 0 ? decodeURIComponent(hash.substr(1)) : '/';
}

function formatIp(ip: string): string {
	return /([a-f0-9:]+:+)+[a-f0-9]+/.test(ip) ? `[${ip}]` : ip;
}

function chooseRandomColor(theme: string) {
	const colors = [
		'#ec4899',
		'#ef4444',
		'#f97316',
		'#f59e0b',
		'#84cc16',
		'#14b8a6',
		'#06b6d4',
		'#0ea5e9',
		'#3b82f6',
		'#6366f1',
		'#8b5cf6',
		'#a855f7',
		'#d946ef',
	];
	return colors[Math.floor(Math.random() * colors.length)];
}

function formatTimezone(date: any) {
	return Math.abs(differenceInHours(changeTimezone(parseISO(date), Intl.DateTimeFormat().resolvedOptions().timeZone), new Date())) > 48
		? format(changeTimezone(parseISO(date), Intl.DateTimeFormat().resolvedOptions().timeZone), 'MMMM do, yyyy')
		: capitalizeFirstLetter(formatDistanceToNow(changeTimezone(date, Intl.DateTimeFormat().resolvedOptions().timeZone), { addSuffix: true }));
}

function getFormattedDate(date: Date) {
	const year = date.getFullYear();
	let month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;
	let day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;
	return month + '/' + day + '/' + year;
}

function getDateWithUTCOffset(inputTzOffset: any) {
	const now = new Date();
	const currentTzOffset = -now.getTimezoneOffset() / 60;
	const deltaTzOffset = inputTzOffset - currentTzOffset;
	const nowTimestamp = now.getTime();
	const deltaTzOffsetMilli = deltaTzOffset * 1000 * 60 * 60;
	const outputDate = new Date(nowTimestamp + deltaTzOffsetMilli);
	return outputDate;
}

function changeTimezone(date: any, ianatz: any) {
	const invdate = new Date(`${date.toLocaleString('en-US', { timeZone: ianatz })}`);
	const diff = date.getTime() - invdate.getTime();
	return new Date(date.getTime() - diff);
}

/*
 * https://stackoverflow.com/a/55589711
 * Hashbrown - Apr 9, 2019 at 9:41
 */

const parseUA = (() => {
	//useragent strings are just a set of phrases each optionally followed by a set of properties encapsulated in paretheses
	const part = /\s*([^\s/]+)(\/(\S+)|)(\s+\(([^)]+)\)|)/g;
	//these properties are delimited by semicolons
	const delim = /;\s*/;
	//the properties may be simple key-value pairs if;
	const single = [
		//it is a single comma separation,
		/^([^,]+),\s*([^,]+)$/,
		//it is a single space separation,
		/^(\S+)\s+(\S+)$/,
		//it is a single colon separation,
		/^([^:]+):([^:]+)$/,
		//it is a single slash separation
		/^([^/]+)\/([^/]+)$/,
		//or is a special string
		/^(.NET CLR|Windows)\s+(.+)$/,
	];
	//otherwise it is unparsable because everyone does it differently, looking at you iPhone
	const many = / +/;
	//oh yeah, bots like to use links
	const link = /^\+(.+)$/;

	const inner = (properties: any, property: any) => {
		let tmp;

		if ((tmp = property.match(link))) {
			properties.link = tmp[1];
		} else if ((tmp = single.reduce((match, regex) => match || property.match(regex), null))) {
			properties[tmp[1]] = tmp[2];
		} else if (many.test(property)) {
			if (!properties.properties) properties.properties = [];
			properties.properties.push(property);
		} else {
			properties[property] = true;
		}

		return properties;
	};

	return (input: any) => {
		const output: any = {};
		for (let match; (match = part.exec(input)); '') {
			output[match[1]] = {
				...(match[5] && match[5].split(delim).reduce(inner, {})),
				...(match[3] && { version: match[3] }),
			};
		}
		return output;
	};
})();

function getOS() {
	const userAgent = window.navigator.userAgent;
	const platform = window.navigator.platform;
	const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
	const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
	let os = '';

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
}

function md5(inputString: any) {
	const hc = '0123456789abcdef';
	function rh(n: any) {
		let j;
		let s = '';
		for (j = 0; j <= 3; j++) s += hc.charAt((n >> (j * 8 + 4)) & 0x0f) + hc.charAt((n >> (j * 8)) & 0x0f);
		return s;
	}
	function ad(x: any, y: any) {
		const l = (x & 0xffff) + (y & 0xffff);
		const m = (x >> 16) + (y >> 16) + (l >> 16);
		return (m << 16) | (l & 0xffff);
	}
	function rl(n: any, c: any) {
		return (n << c) | (n >>> (32 - c));
	}
	function cm(q: any, a: any, b: any, x: any, s: any, t: any) {
		return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
	}
	function ff(a: any, b: any, c: any, d: any, x: any, s: any, t: any) {
		return cm((b & c) | (~b & d), a, b, x, s, t);
	}
	function gg(a: any, b: any, c: any, d: any, x: any, s: any, t: any) {
		return cm((b & d) | (c & ~d), a, b, x, s, t);
	}
	function hh(a: any, b: any, c: any, d: any, x: any, s: any, t: any) {
		return cm(b ^ c ^ d, a, b, x, s, t);
	}
	function ii(a: any, b: any, c: any, d: any, x: any, s: any, t: any) {
		return cm(c ^ (b | ~d), a, b, x, s, t);
	}
	function sb(x: any) {
		let i;
		const nblk = ((x.length + 8) >> 6) + 1;
		const blks = new Array(nblk * 16);
		for (i = 0; i < nblk * 16; i++) blks[i] = 0;
		for (i = 0; i < x.length; i++) blks[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
		blks[i >> 2] |= 0x80 << ((i % 4) * 8);
		blks[nblk * 16 - 2] = x.length * 8;
		return blks;
	}
	let i;
	const x = sb(inputString);
	let a = 1732584193;
	let b = -271733879;
	let c = -1732584194;
	let d = 271733878;
	let olda;
	let oldb;
	let oldc;
	let oldd;
	for (i = 0; i < x.length; i += 16) {
		olda = a;
		oldb = b;
		oldc = c;
		oldd = d;
		a = ff(a, b, c, d, x[i + 0], 7, -680876936);
		d = ff(d, a, b, c, x[i + 1], 12, -389564586);
		c = ff(c, d, a, b, x[i + 2], 17, 606105819);
		b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
		a = ff(a, b, c, d, x[i + 4], 7, -176418897);
		d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
		c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
		b = ff(b, c, d, a, x[i + 7], 22, -45705983);
		a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
		d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
		c = ff(c, d, a, b, x[i + 10], 17, -42063);
		b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
		a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
		d = ff(d, a, b, c, x[i + 13], 12, -40341101);
		c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
		b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
		a = gg(a, b, c, d, x[i + 1], 5, -165796510);
		d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
		c = gg(c, d, a, b, x[i + 11], 14, 643717713);
		b = gg(b, c, d, a, x[i + 0], 20, -373897302);
		a = gg(a, b, c, d, x[i + 5], 5, -701558691);
		d = gg(d, a, b, c, x[i + 10], 9, 38016083);
		c = gg(c, d, a, b, x[i + 15], 14, -660478335);
		b = gg(b, c, d, a, x[i + 4], 20, -405537848);
		a = gg(a, b, c, d, x[i + 9], 5, 568446438);
		d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
		c = gg(c, d, a, b, x[i + 3], 14, -187363961);
		b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
		a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
		d = gg(d, a, b, c, x[i + 2], 9, -51403784);
		c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
		b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
		a = hh(a, b, c, d, x[i + 5], 4, -378558);
		d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
		c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
		b = hh(b, c, d, a, x[i + 14], 23, -35309556);
		a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
		d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
		c = hh(c, d, a, b, x[i + 7], 16, -155497632);
		b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
		a = hh(a, b, c, d, x[i + 13], 4, 681279174);
		d = hh(d, a, b, c, x[i + 0], 11, -358537222);
		c = hh(c, d, a, b, x[i + 3], 16, -722521979);
		b = hh(b, c, d, a, x[i + 6], 23, 76029189);
		a = hh(a, b, c, d, x[i + 9], 4, -640364487);
		d = hh(d, a, b, c, x[i + 12], 11, -421815835);
		c = hh(c, d, a, b, x[i + 15], 16, 530742520);
		b = hh(b, c, d, a, x[i + 2], 23, -995338651);
		a = ii(a, b, c, d, x[i + 0], 6, -198630844);
		d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
		c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
		b = ii(b, c, d, a, x[i + 5], 21, -57434055);
		a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
		d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
		c = ii(c, d, a, b, x[i + 10], 15, -1051523);
		b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
		a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
		d = ii(d, a, b, c, x[i + 15], 10, -30611744);
		c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
		b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
		a = ii(a, b, c, d, x[i + 4], 6, -145523070);
		d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
		c = ii(c, d, a, b, x[i + 2], 15, 718787259);
		b = ii(b, c, d, a, x[i + 9], 21, -343485551);
		a = ad(a, olda);
		b = ad(b, oldb);
		c = ad(c, oldc);
		d = ad(d, oldd);
	}
	return rh(a) + rh(b) + rh(c) + rh(d);
}

const sanitizeData = (string: any) => {
	return DOMPurify.sanitize(string);
};

function findRatingFraction(rate: string, totalRated: number) {
	return +(parseInt(rate) / totalRated).toFixed(2) * +100;
}

const getResource = (uuid: string) => {
	const [pageData, setPageData] = useState<RequestResult>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		getRequest<RequestResult>(`/resources/view/${uuid}`).then((res) => {
			setPageData(res.data);
			setLoaded(true);
		});
	}, [uuid]);

	if (!loaded) {
		return null;
	} else {
		return pageData as never;
	}
};

const getUser = (uuid: string) => {
	const [pageData, setPageData] = useState<RequestResult>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		getRequest<RequestResult>(`/users/view/${uuid}`).then((res) => {
			setPageData(res.data.user);
			setLoaded(true);
		});
	}, [uuid]);

	if (!loaded) {
		return null;
	} else {
		return pageData as never;
	}
};

const stringToArray = (str: string) => {
	return str.trim().split(' ');
};

const LoginViaDiscord = () => {
	let redirectURI =
		window.location.hostname === 'skyblock.tools'
			? 'https%3A%2F%2Fskyblock.tools%2Foauth_callback%2F'
			: 'http%3A%2F%2Flocalhost%3A3000%2Fskyhouse%2Foauth_callback%2F';
	const win = window.open(
		'https://discord.com/api/oauth2/authorize?client_id=841014617895469096&redirect_uri=' +
			redirectURI +
			'&response_type=code&scope=identify%20guilds&prompt=none',
		'Login',
		'height=500,width=500'
	);
	const pollTimer = window.setInterval(function () {
		if (win.closed !== false) {
			window.clearInterval(pollTimer);
			window.location.reload(false);
		}
	}, 200);
};

const isOnFlipper = () => {
	return location.pathname.startsWith('/skyhouse/flipper');
};

export {
	debounce,
	bytesToMegabytes,
	megabytesToBytes,
	bytesToHuman,
	megabytesToHuman,
	randomInt,
	cleanDirectoryPath,
	capitalize,
	capitalizeFirstLetter,
	encodePathSegments,
	hashToPath,
	formatIp,
	chooseRandomColor,
	formatTimezone,
	getFormattedDate,
	getDateWithUTCOffset,
	changeTimezone,
	parseUA,
	md5,
	getOS,
	sanitizeData,
	findRatingFraction,
	getUser,
	getResource,
	RequestResult,
	stringToArray,
	LoginViaDiscord,
	isOnFlipper,
};
