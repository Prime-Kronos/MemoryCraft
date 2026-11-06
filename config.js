/* =================================
   ELVARQ MEMORYCRAFT CONFIG
   ================================= */

window.ELVARQ_CONFIG = {
    APP_NAME: "ELVARQ MemoryCraft",
    VERSION: "1.0.0",
    API_URL: "https://elvarq-memorycraft-api.onrender.com",

    BOT_USERNAME: "ECMemoryCraft_bot",

    TELEGRAM: {
        enabled: true,
        bot: "ECMemoryCraft_bot",
        miniApp: "ECMempryCraft_bot"
    },

    GAME: {
        globalTop: 100,
        roomCodeLength: 6,
        maxPlayers: 20,
        difficulties: ["normal", "medium", "extreme"],
        globalDifficulty: "extreme"
    },

    FEATURES: {
        globalLeaderboard: true,
        friendsRooms: true,
        realtime: true,
        telegramAuth: true
    }
};

// Совместимость с backend
window.ELVARQ_API_URL = window.ELVARQ_CONFIG.API_URL;

// API helper
window.MemoryCraftAPI = {
    async request(path, options = {}) {
        const response = await fetch(
            window.ELVARQ_CONFIG.API_URL + path,
            {
                ...options,
                headers: {
                    "Content-Type": "application/json",
                    ...(options.headers || {})
                }
            }
        );

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        return response.json();
    },

    health() {
        return this.request("/health");
    },

    leaderboard() {
        return this.request("/api/leaderboard");
    }
};

console.log("ELVARQ MemoryCraft Config Loaded");
