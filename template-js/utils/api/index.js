/**
 * @typedef {import("next").NextApiRequest} ApiRequest
 * @typedef {import("next").NextApiResponse} ApiResponse
 * @typedef {((req: ApiRequest, res: ApiResponse, next: (err?: any) => void))} Middleware
 */

/**
 * @param {ApiRequest} req
 * @param {ApiResponse} res
 * @param {Middleware} middleware
 */
export const runMiddleware = (req, res, middleware) => {
	return new Promise((resolve, reject) => {
		middleware(req, res, (result) =>
			result instanceof Error ? reject(result) : resolve(result)
		);
	});
};
/**
 * @param {ApiRequest} req
 * @param {string} key
 */
export const getParams = (req, key = 'params') => {
	const params = req.query[key];
	return !params ? [] : typeof params === 'string' ? [params] : [...params];
};
