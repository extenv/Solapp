import { handleProduction, handleDevelopment } from '../controllers/viteController.js';

export const setupRoutes = async (app, vite, express) => {
    if (process.env.NODE_ENV === 'production') {
        handleProduction(app, express);
    } else {
        await handleDevelopment(app, vite);
    }
};
