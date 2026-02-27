require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const { tunnelmole } = require('tunnelmole');
const db = require('./db');

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_ID = process.env.ADMIN_ID;
const PORT = 5173; // Current Vite Port

if (!BOT_TOKEN) {
    console.error("Please provide BOT_TOKEN in .env file");
    process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

async function startBot() {
    try {
        let webAppUrl = process.env.WEBAPP_URL;

        // If no URL in env, try to create a tunnel for development
        if (!webAppUrl) {
            console.log("[Tunnel] No WEBAPP_URL found. Starting tunnelmole...");
            try {
                webAppUrl = await tunnelmole({ port: PORT });
                console.log(`[Tunnel] Public URL generated: ${webAppUrl}`);
            } catch (err) {
                console.error("[Tunnel] Failed to start tunnelmole:", err);
                webAppUrl = 'https://program-course-mini-app.surge.sh'; // Fallback
            }
        }

        console.log(`[Bot] Initializing with WebApp URL: ${webAppUrl}`);

        // Set the permanent "Open" menu button in the chat
        try {
            await bot.telegram.setChatMenuButton({
                menu_button: {
                    type: 'web_app',
                    text: 'Open',
                    web_app: { url: webAppUrl }
                }
            });
            console.log("Chat menu button 'Open' was successfully set.");
        } catch (err) {
            console.error("Failed to set chat menu button:", err);
        }

        bot.start((ctx) => {
            // Save user to database
            try {
                db.saveUser(ctx.from);
                console.log(`User saved/updated: ${ctx.from.id} (${ctx.from.username || 'no username'})`);
            } catch (err) {
                console.error("Failed to save user:", err);
            }

            ctx.reply(
                'Привет! 👋 Готов стать Fullstack-разработчиком?\n\nЖми на кнопку ниже, чтобы открыть обновленное приложение и посмотреть программу курса!',
                Markup.inlineKeyboard([
                    [Markup.button.webApp("🎓 Открыть приложение", webAppUrl)]
                ])
            );
        });

        // Optional Admin command just to test the ID
        bot.command('admin', (ctx) => {
            if (ctx.from.id.toString() === ADMIN_ID) {
                const userCount = db.getUserCount();
                ctx.reply(`Вы вошли как Администратор. 🛠️\n\nВсего пользователей в базе: ${userCount}`,
                    Markup.inlineKeyboard([
                        [Markup.button.webApp("Открыть Админ-панель", webAppUrl + "?admin=true")]
                    ])
                );
            } else {
                ctx.reply('У вас нет доступа к этой команде ❌');
            }
        });

        bot.launch();
        console.log('Telegram Bot started successfully!');

        // Enable graceful stop
        process.once('SIGINT', () => {
            bot.stop('SIGINT')
        });
        process.once('SIGTERM', () => {
            bot.stop('SIGTERM')
        });

    } catch (e) {
        console.error("Failed to start bot or tunnel:", e);
    }
}

startBot();
