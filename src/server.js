import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { setupRoutes } from './backend/routes/viteRoutes.js';

// Memuat konfigurasi .env
dotenv.config();

async function startServer() {
    const app = express();
    const PORT = process.env.PORT || 3000;

    // Buat instance server Vite dalam mode development
    const vite = await createViteServer({
        server: { middlewareMode: true },
    });

    // Gunakan middleware Vite di Express
    app.use(vite.middlewares);

    // Setup routes
    await setupRoutes(app, vite, express);

    // Jalankan server Express
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();
