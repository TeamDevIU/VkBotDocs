YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "TasksDistributor",
        "VkRequestHandler",
        "onErrorMessage",
        "onResponse",
        "process.on"
    ],
    "modules": [
        "bot.js",
        "worker.js"
    ],
    "allModules": [
        {
            "displayName": "bot.js",
            "name": "bot.js",
            "description": "Обработчик всех входящих сообщений на сервер"
        },
        {
            "displayName": "worker.js",
            "name": "worker.js",
            "description": "Функция обработки команды от пользователя\nс последующей отправкой ответа в чат вк."
        }
    ],
    "elements": []
} };
});