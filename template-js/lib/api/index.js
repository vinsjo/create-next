/**
 * @param {import("next").NextApiHandler} handler
 * @returns {import("next").NextApiHandler}
 */
export function createApiHandler(handler) {
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
