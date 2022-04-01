import { API_ORIGIN } from '@/environment';

export enum APIError {
	UNKNOWN = 0,
	NOT_LOGGED_IN = 1,
}

export type APIResponse<T> = {
	success: boolean;
	data?: T;
	error?: APIError;
};

export const getRequest = async <T>(url: string, withToken = false): Promise<APIResponse<T>> => {
	const headers: Record<string, string> = {};
	if (withToken) {
		headers['Authorization'] = localStorage['PM_Token'];
	}
	const response = await fetch(API_ORIGIN + url, {
		method: 'GET',
		headers: headers,
	});
	return await response.json();
};

export const postRequest = async <T>(url: string, data: unknown, withToken = false): Promise<APIResponse<T>> => {
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
	};
	if (withToken) {
		headers['Authorization'] = localStorage['PM_Token'];
	}
	const response = await fetch(API_ORIGIN + url, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(data),
	});
	return await response.json();
};
