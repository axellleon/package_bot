module.exports = {

  botOption: {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'Отправить', callback_data: 'Отправить' }, { text: 'Отвезти', callback_data: 'Отвезти' }]
      ]
    })
  }

}