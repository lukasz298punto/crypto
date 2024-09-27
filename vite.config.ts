import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: {
            key: './localhost-key.pem', // Ścieżka do klucza prywatnego
            cert: './localhost.pem', // Ścieżka do certyfikatu SSL
        },
        host: 'localhost', // Ustawienie hosta na localhost
        port: 3000, // Port, na którym działa serwer
    },
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
            },
            manifest: {
                name: 'Moja Aplikacja Windows',
                short_name: 'MojaAplikacja',
                description:
                    'Aplikacja PWA działająca jak natywna aplikacja Windows.',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                display: 'standalone', // Otwiera aplikację jako pełnoekranową
                start_url: '/',
                scope: '/',
                orientation: 'any',
                icons: [
                    {
                        src: '/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/icon-1024x1024.png',
                        sizes: '1024x1024',
                        type: 'image/png',
                    },
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: ({ request }) =>
                            request.destination === 'image',
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 dni
                            },
                        },
                    },
                ],
            },
        }),
    ],
});
