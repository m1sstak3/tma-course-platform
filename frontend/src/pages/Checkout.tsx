import { motion } from 'framer-motion';
import WebApp from '@twa-dev/sdk';
import { Lock, CheckCircle2, ChevronLeft, Star } from 'lucide-react';

interface CheckoutProps {
    onBack: () => void;
}

export const Checkout = ({ onBack }: CheckoutProps) => {
    return (
        <div className="flex flex-col h-full bg-md-background">

            {/* Header */}
            <div className="flex items-center p-4 relative">
                <button
                    onClick={() => {
                        WebApp.HapticFeedback.impactOccurred('light');
                        onBack();
                    }}
                    className="absolute left-4 p-2 rounded-full bg-white/5 text-white active:scale-95 transition-transform"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pb-8">
                {/* Lock Icon and Title */}
                <div className="flex flex-col items-center text-center mt-2 mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4"
                    >
                        <Lock className="w-8 h-8 text-indigo-400" />
                    </motion.div>
                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Полный доступ</h1>
                    <p className="text-sm font-medium text-md-onSurfaceVariant">
                        Присоединяйтесь к 50,000+ студентов, осваивающих Fullstack-разработку
                    </p>
                </div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="relative bg-[#1a1825] rounded-[2rem] p-6 border border-white/5 shadow-2xl mb-8"
                >
                    <div className="absolute -top-3 right-6 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-md shadow-lg">
                        Выгодное предложение
                    </div>

                    <p className="text-md-onSurfaceVariant text-sm font-medium mb-1 mt-2">Пожизненный доступ</p>
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-5xl font-black text-white">9 900 ₽</span>
                        <span className="text-lg font-bold text-md-onSurfaceVariant line-through">19 900 ₽</span>
                    </div>

                    <div className="space-y-4 mb-8">
                        {[
                            "Полный курс Fullstack-разработки",
                            "5 реальных проектов в портфолио",
                            "Сертификат об окончании",
                            "Доступ в закрытое Discord-сообщество",
                            "Пожизненные обновления и офлайн-режим"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span className="text-sm text-md-onSurface font-medium leading-tight pt-0.5">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => WebApp.HapticFeedback.impactOccurred('heavy')}
                        className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-[0_4px_20px_rgba(79,70,229,0.4)] hover:bg-indigo-500 transition-colors active:scale-[0.98]"
                    >
                        Оплатить ₽9 900
                    </button>
                    <p className="text-center text-[10px] text-md-onSurfaceVariant mt-4">Безопасная оплата через Telegram</p>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <h3 className="font-bold text-white text-sm">Что говорят студенты</h3>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbars">
                        {[
                            { name: "Алексей И.", role: "Junior Frontend Dev", text: "Курс разжеван до мелочей. Проекты мощные, устроился на работу через месяц после финала!" },
                            { name: "Мария С.", role: "Fullstack Dev", text: "Лучшее вложение денег. Менторы супер-помогают в Discord." }
                        ].map((review, i) => (
                            <div key={i} className="min-w-[260px] bg-[#1a1825] p-5 rounded-2xl border border-white/5 snap-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-sm">{review.name}</p>
                                        <p className="text-xs text-md-onSurfaceVariant">{review.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-md-onSurface/90 leading-relaxed">"{review.text}"</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbars::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbars {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </div>
    );
};
