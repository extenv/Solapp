import path from 'path';

export const handleProduction = (app, express) => {
    app.use(express.static(path.resolve('dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('dist/index.html'));
    });
};

export const handleDevelopment = async (app, vite) => {
    app.get('*', async (req, res) => {
        try {
            const url = req.originalUrl;
            const html = await vite.transformIndexHtml(url, path.resolve('index.html'));
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
            vite.ssrFixStacktrace(e);
            console.error(e);
            res.status(500).end(e.message);
        }
    });
};
