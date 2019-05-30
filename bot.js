const Discord = require('discord.js');
const client = new Discord.Client();
const botname = `CatMemer`;
const prefix = 'cm!'
client.on('ready', () => {
  console.log(`Бот запущен`);
});

client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'help') {
    const helpembed = new Discord.RichEmbed()
   .setColor('#00ff00')
   .setTitle('Помощь по командам бота')
   .setDescription('Чтобы посмотреть команды КэтМемера пожалуйста введите страницу пример - cm!help1')
   .setFooter('Спасибо за то что добавили КэтМемера всего страниц 4')
   .setAuthor(message.author.username,message.author.avatarURL)
message.channel.send(helpembed)};
    });
    client.on('message', message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if (command === 'help1') {
      const help1embed = new Discord.RichEmbed()
    .setColor('#00ff00')    
    .setTitle('Помощь по командам')
    .setDescription('** Утилита **')
    .addField('1.cm!help Страница ','Помощь по командам')
    .addField('2.cm!ping ','Пинг и АПИ бота')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter('Страница 1/4')
message.channel.send(help1embed)};
    });
    client.on('message', message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if (command === 'help2') {
      const help2embed = new Discord.RichEmbed()
    .setColor('#00ff00')    
    .setTitle('Помощь по командам')
    .setDescription('** Инфа **')
    .addField('1.cm!creators ','Создатели бота')
    .addField('2.cm!invite ','Пригласить на свой сервер')
    .addField('3.cm!version','Данная версия бота')
    .addField('4.cm!servers','На скольких серверах данный бот')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter('Страница 2/4')
message.channel.send(help2embed)};
    });
    client.on('message', message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if (command === 'help3') {
      const help3embed = new Discord.RichEmbed()
    .setColor('#00ff00')    
    .setTitle('Помощь по командам')
    .setDescription('** Инфа **')
    .addField('1.cm!8ball ','Шар предсказаний')
    .addField('2.cm!light ','Стрельнуть молнией')
    .addField('3.cm!colours','Рандом цвет')
    .addField('4.cm!dog','Рандом пес')
    .addField('5.cm!cat','Рандом кот')
    .addField('6.cm!meme','Рандом мем')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter('Страница 3/4')
message.channel.send(help3embed)};
    });
    client.on('message', message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      if (command === 'help4') {
      const help4embed = new Discord.RichEmbed()
    .setColor('#00ff00')    
    .setTitle('Помощь по командам')
    .setDescription('** Для создателей **')
    .addField('1.cm!eval ','Запустить любой код')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter('Страница 4/4')
message.channel.send(help4embed)};
    });
    client.on('message', message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
    if (command === 'ping')
      var pingembed = new Discord.RichEmbed()
      .setColor('#00ff00')
      .setTitle('Текущий пинг бота',true)
      .addField('Пинг API:', `\`${Math.round(client.ping)} MS\``, true)
      .addField('Пинг бота:', `\`${new Date().getTime() - message.createdTimestamp + " MS"}\``, true)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTimestamp();
      message.channel.send(pingembed);
    });
    client.on('message', message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
if (command === 'creators') {
  const creatorembed = new Discord.RichEmbed()
  .setColor('00ff00')
  .setTitle('Создатели')
  .addField('Автор бота:', `Azte[Cas]#0346`)
  .addField('Помощник1:', `MrVaDiM4iK#0232`)
  .addField('Помощник2:', 'Зан#5253')
  .setAuthor(message.author.username, message.author.avatarURL)
    message.channel.send(creatorembed)};
  });
  var strikes = [
    "**В Таноса и тот умер от инфаркта лол**",
    "**В свинку и получился стейк**",
    "**Вы не попали ни в кого**",
    "**В пукан и тот бомбонул**"
];
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'light') {
  const lightembed = new Discord.RichEmbed()
  .setColor('00ff00')
  .setTitle('В кого же ты попадешь?')
  .setDescription('И ты попал в...')
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Молодец вот в кого ты попал',strikes[Math.floor(Math.random() * strikes.length)]);
  message.channel.send(lightembed)};
});
var fortunes = [
  "**Да**",
  "**Нет**",
  "**Может быть**",
  "**Возможно нет**",
  "**Ещё как!**",
  "**Никогда!**"
];
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === '8ball') {
  const ballembed = new Discord.RichEmbed()
  .setColor('#00ff00')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Шар предсказаний')
  .addField('Ваш вопрос:', args.join('** **'))
  .addField('Ответ:', fortunes[Math.floor(Math.random() * fortunes.length)]);
  if (args[0]) message.channel.send(ballembed);
}});
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'invite') {
   const inviteembed = new Discord.RichEmbed()
   .setColor('00ff00')
   .setTitle('Инвайт бота')
   .addField('https://discordapp.com/oauth2/authorize?client_id=567034171105607687&scope=bot&permissions=8','Спасибо за помощь!')
   .setAuthor(message.author.username, message.author.avatarURL)
   message.channel.send(inviteembed);
}});
var colours = [
  "**Зеленый**",
  "**Красный**",
  "**Черный**",
  "**Сиреневый**",
  "**Розовый**",
  "**Жёлтый**"
];
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'colours') {
 const colourembed = new Discord.RichEmbed()
  .setColor('00ff00')
  .setTitle('Какой же цвет тебе выпал?')
  .setDescription('И тебе выпал цвет')
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('А вот и цвет который тебе выпал',colours[Math.floor(Math.random() * colours.length)]);
  message.channel.send(colourembed)};
});
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === 'eval') {if(message.author.id !== '489509948896837653') return message.reply('Ты не созд пошел отседава'); try{let evaled = eval(args.join(' ')); let eevaled = typeof evaled; if(typeof evaled!== 'string') evaled = require('util').inspect(evaled); message.channel.send(`//Успешно ✅\n//Тип: ${eevaled}\n${evaled}`, {code: 'js', split: '\n'})}catch(err){message.channel.send(`//Ошибка ❎\n${err}`, {code: 'js'})}} 
});
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'servers') {
 const serversembed = new Discord.RichEmbed()
  .setColor('00ff00')
  .setTitle('Это покажет вам на скольких серверах данный бот')
  .addField('Данный бот сейчас на таком количестве серверов как',client.guilds.size)
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Спасибо за то что добавили бота на этот сервер','Помогите развитию бота и добавьте на другой сервер! узнать ссылку можно командой cm!invite')
  message.channel.send(serversembed)};
});
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'version') {
 const serversembed = new Discord.RichEmbed()
  .setColor('00ff00')
  .setTitle('Это покажет вам какая сейчас версия бота')
  .addField('Сейчас версия бота - 1.6 Глобальное обновление переделали все команды и сделали эмбеды + эваль', 'Это КэтМемер')
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Спасибо за то что добавили бота на этот сервер','Помогите развитию бота и добавьте на другой сервер! узнать ссылку можно командой cm!invite')
  .setFooter(message.author.username,message.author.avatarURL)
  message.channel.send(serversembed)};
});
var dogs = [
  "https://cdn.discordapp.com/attachments/582860869436702732/583539080692760576/Screenshot_344.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583539099517059103/Screenshot_349.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583539128889769984/Screenshot_345.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583539131666399233/Screenshot_348.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583539153107550211/Screenshot_347.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583539167892471808/Screenshot_346.png"
];
  client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === 'dog') {
    const dogembed = new Discord.RichEmbed()
    .setColor('00ff00')
    .setTitle('Милый пёсик')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setImage(dogs[Math.floor(Math.random() * dogs.length)]);
    message.channel.send(dogembed)};
  });
var cats = [
  "https://cdn.discordapp.com/attachments/582860869436702732/583544206195294238/Screenshot_354.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583544222867652618/Screenshot_355.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583544239737012236/Screenshot_353.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583544242035621889/Screenshot_352.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583544355927752714/Screenshot_351.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583544356989042688/Screenshot_350.png"
];
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'cat') {
  const dogembed = new Discord.RichEmbed()
  .setColor('00ff00')
  .setTitle('Красивый кот')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setImage(cats[Math.floor(Math.random() * cats.length)]);
  message.channel.send(dogembed)};
});

var memes = [
  "https://cdn.discordapp.com/attachments/582860869436702732/583551597808975872/Screenshot_356.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583551644155904041/Screenshot_357.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583551674157891604/Screenshot_359.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583551678062526474/Screenshot_360.png",
  "https://cdn.discordapp.com/attachments/582860869436702732/583551678306058262/Screenshot_358.png"
];
client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'meme') {
  const memembed = new Discord.RichEmbed()
  .setColor('00ff00')
  .setTitle('Прикольный мем')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setImage(memes[Math.floor(Math.random() * memes.length)]);
  message.channel.send(memembed)};
});
  

client.login(procces.env.BOT_TOKEN);
