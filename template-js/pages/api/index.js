// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createApiHandler } from '../../lib/api';

export default createApiHandler((req, res) => {
    res.json({ status: 'OK' });
});
