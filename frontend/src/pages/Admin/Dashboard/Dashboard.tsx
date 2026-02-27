import { Users, CreditCard, TrendingUp, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CourseManager } from '../CourseManager/CourseManager';

export const Dashboard = () => {
    const [view, setView] = useState<'dashboard' | 'courseManager'>('dashboard');

    if (view === 'courseManager') {
        return <CourseManager onBack={() => setView('dashboard')} />;
    }

    return (
        <div className="flex flex-col h-full bg-md-surfaceVariant text-md-onSurface">
            {/* Admin Header */}
            <header className="px-6 py-4 bg-md-surface shadow-sm flex items-center justify-between border-b border-md-outline/10">
                <div>
                    <h1 className="text-xl font-bold tracking-tight">Панель Управления</h1>
                    <p className="text-xs text-md-onSurfaceVariant">Режим администратора</p>
                </div>
                <button className="p-2 bg-md-secondaryContainer text-md-onSecondaryContainer rounded-full hover:bg-md-primaryContainer transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* KPI Cards */}
                <section className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-md-surface rounded-2xl shadow-sm border border-md-outline/10"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-5 h-5 text-md-primary" />
                            <span className="text-sm font-medium text-md-onSurfaceVariant">Студенты</span>
                        </div>
                        <div className="text-2xl font-black">128</div>
                        <p className="text-xs text-emerald-500 font-medium mt-1 inline-flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> +12%
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="p-4 bg-md-surface rounded-2xl shadow-sm border border-md-outline/10"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <CreditCard className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-medium text-md-onSurfaceVariant">Продажи</span>
                        </div>
                        <div className="text-2xl font-black">2.4m ₽</div>
                        <p className="text-xs text-emerald-500 font-medium mt-1 inline-flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> +5.2%
                        </p>
                    </motion.div>
                </section>

                {/* Recent Activity List */}
                <section className="bg-md-surface rounded-2xl shadow-sm border border-md-outline/10 overflow-hidden">
                    <div className="px-4 py-3 border-b border-md-outline/10 bg-md-surface/50">
                        <h2 className="font-bold text-sm">Последние покупки</h2>
                    </div>
                    <div className="divide-y divide-md-outline/10">
                        {/* Mock Rows */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="px-4 py-3 flex items-center justify-between hover:bg-md-surfaceVariant/30 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-md-primaryContainer flex items-center justify-center text-md-onPrimaryContainer font-bold text-sm">
                                        {`@usr${i}`}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">User {Math.floor(Math.random() * 1000)}</p>
                                        <p className="text-xs text-md-outline">Курс "Fullstack"</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-emerald-600">+9 900 ₽</p>
                                    <p className="text-xs text-md-outline mt-0.5">Сегодня</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Management Actions */}
                <section className="space-y-3">
                    <button
                        onClick={() => setView('courseManager')}
                        className="w-full bg-md-primary text-md-onPrimary rounded-xl py-3 font-bold shadow-sm active:scale-95 transition-all text-sm"
                    >
                        Управление контентом курса
                    </button>
                    <button className="w-full bg-transparent border-2 border-md-primary text-md-primary rounded-xl py-3 font-bold active:scale-95 transition-all text-sm">
                        Выгрузить отчет (CSV)
                    </button>
                </section>

            </div>
        </div>
    );
};
