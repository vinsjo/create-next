// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getParams, runMiddleware } from '@utils/api';
import cors from 'cors';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await runMiddleware(req, res, cors());
	const params = getParams(req);
	res.status(200).json({ params });
}
