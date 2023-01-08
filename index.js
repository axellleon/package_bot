const TelegramApi = require('node-telegram-bot-api');
const { botOption } = require('./options')

const token = '5641210424:AAG5u83EQqXKPmlxtumaCxUl8oUZYtFwpE4';

const bot = new TelegramApi(token, { polling: true });

const start = () => {

  bot.setMyCommands([
    { command: '/start', description: 'Стартовое приветствие' },
    { command: '/info', description: "Описание сервиса" },
    { command: '/send', description: "Мне нужно отправить посылку" },
    { command: '/deliver', description: "Я могу отвезти посылку" }
  ])

  bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === `/start`) {
      return bot.sendMessage(chatId, 'Добро пожаловать в наш сервис по отправке посылок с попутчиками', botOption);
    }
    if (text === '/info') {
      return bot.sendMessage(chatId, `${msg.from.first_name} ${msg.from.last_name}, наш сервис принимает заказы на перевозку и регистрирует в системе перевозчиков, которые готовы перевезти нужный товар`);
    }
    if (text === '/send') {
      return bot.sendMessage(chatId, `Заполните информацию по вашей посылке ...`);
    }
    if (text === '/deliver') {
      return bot.sendMessage(chatId, `Заполните информацию по вашему маршруту`);
    }
    return bot.sendMessage(chatId, 'Не понимаю команду, повторите, пожалуйста');

  })

  bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === 'Отправить') {
      return bot.sendMessage(chatId, `Заполните информацию по вашей посылке ...`);
    }
    if (data === 'Отвезти') {
      return bot.sendMessage(chatId, `Заполните информацию по вашему маршруту`);
    }
    return bot.sendMessage(chatId, 'Не понимаю команду, повторите, пожалуйста');

    console.log(msg);
  })

}

start();
