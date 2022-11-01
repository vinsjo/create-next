// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getParams } from '../../lib/api';

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
    const params = getParams(req, 'params');
    res.status(200).json({ params });
}
