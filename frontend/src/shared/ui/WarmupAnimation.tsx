import { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { motion, AnimatePresence } from 'framer-motion';

const statements = [
    "Анализируем ваш профиль...",
    "Оцениваем опыт...",
    "Подбираем оптимальные модули...",
    "Формируем персональную программу...",
    "Готовим специальный оффер!"
];

interface WarmupAnimationProps {
    onComplete: () => void;
}

export const WarmupAnimation = ({ onComplete }: WarmupAnimationProps) => {
    const [progress, setProgress] = useState(0);
    const [statementIndex, setStatementIndex] = useState(0);

    useEffect(() => {
        const duration = 4000; // 4 seconds total
        const intervalTime = 50;
        const steps = duration / intervalTime;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const currentProgress = (currentStep / steps) * 100;
            setProgress(currentProgress);

            // Change statement based on progress
            const currentStatementIndex = Math.min(
                Math.floor((currentProgress / 100) * statements.length),
                statements.length - 1
            );
            setStatementIndex(currentStatementIndex);

            if (currentStep >= steps) {
                clearInterval(timer);
                WebApp.HapticFeedback.notificationOccurred('success');
                setTimeout(onComplete, 500); // Small delay before transition
            }
        }, intervalTime);

        // Initial statement timeout to prevent flicker
        const initialStatementTimer = setTimeout(() => {
            setStatementIndex(1);
        }, 800)

        return () => {
            clearInterval(timer);
            clearTimeout(initialStatementTimer);
        }
    }, [onComplete]);

    return (
        <div className="flex flex-col items-center justify-center p-6 h-full w-full">

            {/* Animated icon or illustration placeholder */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                }}
                className="mb-8 p-4 bg-md-primaryContainer rounded-full"
            >
                <span className="text-4xl">✨</span>
            </motion.div>

            {/* Dynamic Text */}
            <div className="h-16 flex items-center justify-center text-center w-full mb-8">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={statementIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-medium text-md-onSurface"
                    >
                        {statements[statementIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-xs h-3 bg-md-surfaceVariant rounded-full overflow-hidden relative shadow-inner">
                {/* Animated Progress Fill */}
                <motion.div
                    className="h-full bg-md-primary absolute left-0 top-0 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear", duration: 0.05 }}
                />

                {/* Shimmer effect over the progress bar */}
                <motion.div
                    className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    style={{ x: '-100%' }}
                />
            </div>

            <p className="mt-4 text-md-outline text-sm font-medium">
                {Math.round(progress)}%
            </p>

        </div>
    );
};
