export interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    photo_url?: string;
}

export interface WebAppInitData {
    query_id?: string;
    user?: TelegramUser;
    receiver?: TelegramUser;
    start_param?: string;
    auth_date: number;
    hash: string;
}

export type PageType = 'entry' | 'warmup' | 'preview' | 'checkout' | 'admin';
