// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getParams } from 'lib/api';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const params = getParams(req, 'params');
    res.status(200).json({ params });
}
