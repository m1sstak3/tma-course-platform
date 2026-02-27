import { useState } from 'react';
import { ChevronLeft, Plus, Edit2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data matches what we have in CoursePreview
const initialModules = [
    { id: 1, title: "Основы профессии", duration: "1 неделя", lessonsCount: 3 },
    { id: 2, title: "Базовый синтаксис", duration: "2 недели", lessonsCount: 4 },
    { id: 3, title: "Продвинутая практика", duration: "3 недели", lessonsCount: 4 }
];

interface CourseManagerProps {
    onBack: () => void;
}

export const CourseManager = ({ onBack }: CourseManagerProps) => {
    const [modules] = useState(initialModules);

    return (
        <div className="flex flex-col h-full bg-md-surfaceVariant text-md-onSurface">
            {/* Header */}
            <header className="px-4 py-4 bg-md-surface shadow-sm flex items-center gap-3 border-b border-md-outline/10">
                <button
                    onClick={onBack}
                    className="p-2 -ml-2 text-md-onSurfaceVariant hover:bg-md-primaryContainer hover:text-md-onPrimaryContainer rounded-full transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold tracking-tight">Управление курсом</h1>
            </header>

            <div className="flex-1 overflow-y-auto p-4">

                {/* Module List */}
                <div className="mb-6 space-y-3">
                    <AnimatePresence>
                        {modules.map((mod, index) => (
                            <motion.div
                                key={mod.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-md-surface p-4 rounded-2xl shadow-sm border border-md-outline/10 flex items-center justify-between group"
                            >
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-black text-md-outline tracking-wider uppercase">
                                            Модуль {index + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-bold">{mod.title}</h3>
                                    <p className="text-xs text-md-onSurfaceVariant mt-1">
                                        {mod.duration} • {mod.lessonsCount} урока
                                    </p>
                                </div>

                                <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 text-md-primary hover:bg-md-primaryContainer rounded-xl transition-colors">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <button className="w-full border-2 border-dashed border-md-primary text-md-primary font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-md-primaryContainer/30 transition-colors active:scale-95">
                    <Plus className="w-5 h-5" />
                    Добавить модуль
                </button>
            </div>
        </div>
    );
};
