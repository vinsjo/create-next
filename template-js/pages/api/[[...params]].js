// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { runMiddleware, getParams } from '../../utils/api';
import cors from 'cors';

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
	await runMiddleware(req, res, cors());
	const params = getParams(req);
	res.status(200).json({ params });
}
