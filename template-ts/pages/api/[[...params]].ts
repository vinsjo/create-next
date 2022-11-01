// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getParams } from '@utils/api';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const params = getParams(req);
    res.status(200).json({ params });
}
