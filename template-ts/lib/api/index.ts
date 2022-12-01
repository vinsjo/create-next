import type { NextApiHandler } from 'next';

export function createApiHandler(handler: NextApiHandler): NextApiHandler {
    return async (req, res) => {
        const allowedMethods = res.getHeader('access-control-allow-methods');
        if (
            typeof allowedMethods === 'string' &&
            req.method &&
            !allowedMethods.includes(req.method)
        ) {
            return res
                .status(405)
                .json({ error: `method '${req.method}' not allowed` });
        }
        await handler(req, res);
        if (!res.writableEnded) res.end();
    };
}
