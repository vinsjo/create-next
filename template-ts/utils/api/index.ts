import type { NextApiRequest, NextApiResponse } from 'next';

export type Middleware = (
	req: NextApiRequest,
	res: NextApiResponse,
	next: (err?: any) => any
) => void | any;

export const runMiddleware = (
	req: NextApiRequest,
	res: NextApiResponse,
	middleware: Middleware
) => {
	return new Promise((resolve, reject) => {
		middleware(req, res, (result) =>
			result instanceof Error ? reject(result) : resolve(result)
		);
	});
};

export const getParams = (req: NextApiRequest, key: string = 'params') => {
	const params = req.query[key];
	return !params ? [] : typeof params === 'string' ? [params] : [...params];
};
