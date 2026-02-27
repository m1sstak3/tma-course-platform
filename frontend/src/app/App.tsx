import { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { motion, AnimatePresence } from 'framer-motion';
import type { PageType } from '../shared/types/telegram';

// Components
import { WarmupAnimation } from '../shared/ui/WarmupAnimation';
import { CoursePreview } from '../pages/CoursePreview';
import { Checkout } from '../pages/Checkout';
import { AdminDashboard } from '../pages/Admin';

export const App = () => {
    const [currentPage, setCurrentPage] = useState<PageType>('entry');

    // Haptic feedback on page change
    useEffect(() => {
        if (currentPage !== 'entry') {
            WebApp.HapticFeedback.selectionChanged();
        }
    }, [currentPage]);

    useEffect(() => {
        // Initialize Telegram WebApp
        if (WebApp.initDataUnsafe) {
            WebApp.ready();
            WebApp.expand(); // Make it full height natively

            if (WebApp.initDataUnsafe.start_param === 'admin') {
                setCurrentPage('admin');
            }
        }

        // Fallback for query parameters and local testing
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('admin') === 'true' || urlParams.get('tgWebAppStartParam') === 'admin') {
            setCurrentPage('admin');
        }
    }, []);

    return (
        <div className="min-h-screen bg-black sm:bg-gray-100 flex flex-col items-center sm:justify-center overflow-hidden">
            <div className="w-full max-w-md bg-md-background min-h-[100dvh] sm:min-h-[850px] sm:max-h-[850px] sm:shadow-2xl sm:rounded-3xl relative overflow-hidden flex flex-col">


                {/* Dynamic Route Render wrapper with AnimatePresence for transitions */}
                <div className="flex-1 w-full relative h-full">
                    <AnimatePresence mode="wait">
                        {currentPage === 'entry' && (
                            <motion.div
                                key="entry"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center h-full p-6 text-center"
                            >
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/coding-4488737-3738466.png" alt="Coding" className="w-48 h-48 mb-8 object-contain drop-shadow-lg" />
                                <h2 className="text-2xl font-black mb-4 tracking-tight">Открой мир IT</h2>
                                <p className="mb-8 text-md-onSurfaceVariant font-medium">Бесплатный вводный урок уже пройден. Готов узнать, какой путь подойдет именно тебе?</p>
                                <button
                                    onClick={() => setCurrentPage('warmup')}
                                    className="bg-md-primary text-md-onPrimary px-8 py-4 rounded-full font-bold shadow-lg active:scale-95 transition-transform"
                                >
                                    Подобрать программу
                                </button>
                            </motion.div>
                        )}

                        {currentPage === 'warmup' && (
                            <motion.div
                                key="warmup"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="h-full w-full"
                            >
                                <WarmupAnimation onComplete={() => setCurrentPage('preview')} />
                            </motion.div>
                        )}

                        {currentPage === 'preview' && (
                            <motion.div
                                key="preview"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="h-full w-full"
                            >
                                <CoursePreview onCheckout={() => setCurrentPage('checkout')} />
                            </motion.div>
                        )}

                        {currentPage === 'checkout' && (
                            <motion.div key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full">
                                <Checkout onBack={() => setCurrentPage('preview')} />
                            </motion.div>
                        )}

                        {currentPage === 'admin' && (
                            <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full">
                                <AdminDashboard />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
