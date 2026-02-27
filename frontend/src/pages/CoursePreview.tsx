import { motion } from 'framer-motion';
import WebApp from '@twa-dev/sdk';
import { ROADMAP } from '../entities/course/model/roadmap';
import { PlayCircle, Code } from 'lucide-react';

interface CoursePreviewProps {
    onCheckout: () => void;
}

export const CoursePreview = ({ onCheckout }: CoursePreviewProps) => {

    return (
        <div className="flex flex-col h-full bg-md-background">

            {/* Header */}
            <div className="px-6 pt-8 pb-4">
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight leading-tight">
                    Ваш путь к Fullstack-разработчику
                </h1>
                <p className="text-md-onSurfaceVariant font-medium text-sm leading-relaxed">
                    Осваивайте навыки пошагово и создавайте реальные проекты для портфолио.
                </p>
            </div>

            {/* Scrollable Roadmap Timeline */}
            <div className="flex-1 overflow-y-auto px-6 pb-32">
                <div className="relative border-l-2 border-md-surfaceVariant ml-4 mt-6 space-y-8 pb-8">

                    {ROADMAP.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="relative pl-8"
                        >
                            {/* Timeline Node */}
                            <div className={`absolute -left-[21px] top-6 w-10 h-10 rounded-full flex items-center justify-center ${item.color} ${item.glow} z-10 border-4 border-md-background`}>
                                {item.icon}
                            </div>

                            {/* Vertical Progress Line Overlay for completed sections */}
                            {item.isCompleted && (
                                <div className="absolute -left-[2px] top-10 w-[2px] h-[calc(100%+2rem)] bg-indigo-500 z-0"></div>
                            )}

                            {/* Card Content */}
                            {item.type === 'module' ? (
                                <div className={`p-5 rounded-2xl border border-md-outline/10 ${item.disabled ? 'opacity-50 grayscale' : 'bg-[#1e1c29] shadow-lg'}`}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold tracking-widest text-indigo-400">{item.label}</span>
                                        <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded-full text-md-onSurfaceVariant">{item.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-md-onSurfaceVariant mb-4">{item.description}</p>

                                    {/* Progress indicator inside module */}
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden flex">
                                        <div className="bg-indigo-500 h-full" style={{ width: `${item.progress}%` }}></div>
                                    </div>

                                    {!item.disabled && (
                                        <div className="flex gap-2 mt-4">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                                <Code className="w-3 h-3 text-white/70" />
                                            </div>
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                                <PlayCircle className="w-3 h-3 text-white/70" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* Project Card */
                                <div className={`relative overflow-hidden rounded-2xl p-5 ${item.disabled ? 'opacity-50 bg-[#1e1c29]' : item.bgGradient} shadow-lg border border-white/10`}>
                                    <span className="inline-block px-2 py-1 bg-black/30 text-[10px] font-bold uppercase tracking-widest text-white rounded mb-3 backdrop-blur-sm">
                                        {item.label}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/80 mb-6 max-w-[80%]">{item.description}</p>

                                    <button disabled={item.disabled} className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${item.disabled ? 'bg-white/5 text-white/30' : 'bg-black/20 text-white hover:bg-black/30 backdrop-blur-md'}`}>
                                        <PlayCircle className="w-4 h-4" /> Посмотреть проект
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sticky Bottom Bar / CTA */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-md-background/90 backdrop-blur-xl border-t border-white/5">
                <div className="flex items-center justify-between mb-3 px-2">
                    <span className="text-xs text-md-onSurfaceVariant font-medium">Общая длительность</span>
                    <span className="text-sm font-bold text-white">12 недель</span>
                </div>
                <button
                    onClick={() => {
                        WebApp.HapticFeedback.impactOccurred('medium');
                        onCheckout();
                    }}
                    className="w-full bg-md-primary text-white font-bold py-4 rounded-2xl shadow-[0_4px_20px_rgba(97,62,234,0.4)] flex items-center justify-center gap-2 hover:bg-[#502eda] active:scale-[0.98] transition-all"
                >
                    Начать обучение <span className="text-lg leading-none">→</span>
                </button>
                <p className="text-center text-[10px] text-md-onSurfaceVariant mt-3">Включена 30-дневная гарантия возврата средств</p>
            </div>
        </div>
    );
};
