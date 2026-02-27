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
                                className="flex flex-col items-center justify-center h-full p-6 text-center relative"
                            >
                                {/* Decorative Background Glows */}
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-md-primary/10 blur-[100px] rounded-full -z-10" />
                                <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-md-secondary/10 blur-[60px] rounded-full -z-10" />

                                <motion.div
                                    className="animate-float mb-8"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <img
                                        src="https://cdni.iconscout.com/illustration/premium/thumb/coding-4488737-3738466.png"
                                        alt="Coding"
                                        className="w-56 h-56 object-contain drop-shadow-[0_20px_50px_rgba(97,62,234,0.3)]"
                                    />
                                </motion.div>

                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl font-black mb-4 tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                                >
                                    Открой мир IT
                                </motion.h2>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-10 text-md-onSurfaceVariant font-medium max-w-[280px] leading-relaxed"
                                >
                                    Бесплатный вводный урок уже пройден. Готов узнать, какой путь подойдет именно тебе?
                                </motion.p>

                                <motion.button
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={() => setCurrentPage('warmup')}
                                    className="bg-md-primary text-md-onPrimary px-10 py-5 rounded-2xl font-black shadow-[0_10px_30px_rgba(97,62,234,0.4)] hover:shadow-[0_15px_40px_rgba(97,62,234,0.6)] animate-glow-pulse active:scale-95 transition-all"
                                >
                                    Подобрать программу
                                </motion.button>
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
