import { LayoutDashboard, GitMerge, Trophy, Globe, Sun } from 'lucide-react';
import React from 'react';

export interface RoadmapItem {
    id: number;
    type: 'module' | 'project';
    label: string;
    title: string;
    duration?: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    glow: string;
    isCompleted?: boolean;
    progress?: number;
    disabled?: boolean;
    bgGradient?: string;
}

export const ROADMAP: RoadmapItem[] = [
    {
        id: 1,
        type: 'module',
        label: 'МОДУЛЬ 1',
        title: 'Верстка и UI Дизайн',
        duration: '2 недели',
        description: 'Изучите HTML, CSS, React-компоненты и принципы Material Design.',
        icon: React.createElement(LayoutDashboard, { className: "w-5 h-5 text-white" }),
        color: 'bg-indigo-500',
        glow: 'shadow-[0_0_20px_rgba(99,102,241,0.5)]',
        isCompleted: true,
        progress: 100
    },
    {
        id: 2,
        type: 'module',
        label: 'МОДУЛЬ 2',
        title: 'Состояние и Архитектура',
        duration: '3 недели',
        description: 'Освойте Zustand, React Router и чистые паттерны архитектуры FSD.',
        icon: React.createElement(GitMerge, { className: "w-5 h-5 text-white" }),
        color: 'bg-indigo-500',
        glow: 'shadow-[0_0_20px_rgba(99,102,241,0.5)]',
        isCompleted: false,
        progress: 60
    },
    {
        id: 3,
        type: 'project',
        label: 'ПОРТФОЛИО-ПРОЕКТ',
        title: 'Приложение Планировщик',
        description: 'Создайте полноценное приложение для продуктивности с управлением состоянием.',
        icon: React.createElement(Trophy, { className: "w-5 h-5 text-white" }),
        color: 'bg-orange-500',
        glow: 'shadow-[0_0_20px_rgba(249,115,22,0.5)]',
        bgGradient: 'bg-gradient-to-br from-orange-400 to-amber-600',
    },
    {
        id: 4,
        type: 'module',
        label: 'МОДУЛЬ 3',
        title: 'API и Бэкенд',
        duration: '3 недели',
        description: 'Подключайте свои приложения к миру с помощью REST API и Node.js.',
        icon: React.createElement(Globe, { className: "w-5 h-5 text-white" }),
        color: 'bg-md-surfaceVariant',
        glow: '',
        isCompleted: false,
        progress: 0,
        disabled: true
    },
    {
        id: 5,
        type: 'project',
        label: 'ФИНАЛЬНЫЙ ПРОЕКТ',
        title: 'Мини-приложение Telegram',
        description: 'Создайте красивое Fullstack TMA с интеграцией Telegram-ботов.',
        icon: React.createElement(Sun, { className: "w-5 h-5 text-white" }),
        color: 'bg-md-surfaceVariant',
        glow: '',
        bgGradient: 'bg-md-surface',
        disabled: true
    }
];
