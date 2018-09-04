const discord = require('discord.js')



/**
 * An example of how you can send embeds
 */

// Extract the required classes from the discord.js module
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('franchisco dawood mlaksh bot is on')
});




var prefix = "%"



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '%help') {
    const embed = new RichEmbed()
    .setTitle('help commands')
    .addField("%fun", "for very fun comands :joy:")
    .addField("%animals", "for animals gif")
    .addField("%lifegif", "for life gif")
    .setColor(0xFF0000)
    message.channel.send(embed);
  }
});









client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '%fun') {
    const embed = new RichEmbed()
    .setTitle('fun comands:joy:')
    .addField("%hi", "for big hi try it")
    .addField("%garo", "for drink segar")
    .addField("%avatar", "for your avatar")
    .addField('%wormax.io')
    .setColor(0xFF0000)
    message.channel.send(embed);
  }
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '%support') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('server support')
      // Set the color of the embed
      .setColor(0xFFFFFF)
      // Set the main content of the embed
      .setDescription('https://discord.gg/JdCUN2C');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '%makerinfo') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('info')
      // Set the color of the embed
      .setColor(0xFFFFFF)
      // Set the main content of the embed
      .setDescription('name`franchisco` |age `13`| country `egypt`|real name `dawood` ');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});





// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '%hi') {
    // Send "pong" to the same channel
    message.channel.send(':regional_indicator_h: :regional_indicator_i: ');
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'wormax.io') {
    // Send "pong" to the same channel
    message.channel.send('wormax.io go');
  }
});







// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '%avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});






client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '%makerinfo') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('info')
      .setfiled('name`franchisco` |age `13`| country `egypt`|real name `dawood` ')
      // Set the color of the embed
      .setColor(0xFFFFFF)
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'hi') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('hello')
      // Set the color of the embed
      .setColor(0xFFFFFF)
      // Set the main content of the embed
      .setDescription('hi :wave:');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'hello') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('welcome :wave:')
      // Set the color of the embed
      .setColor(0xFFFFFF)
      // Set the main content of the embed
      .setDescription('how are you :tada:');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'fine') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('ohhhh :smirk:')
      // Set the color of the embed
      .setColor(0xFFFFFF)
      // Set the main content of the embed
      .setDescription('good');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'fine') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('gender')
      // Set the color of the embed
      .setColor(0xFFFFFF)
      // Set the main content of the embed
      .setDescription('what is your gender**(`male` __or__ `female`)**');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'male') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('wow like me iam `male` to')
      // Set the color of the embed
      .setColor(0xFFFFFF)
      // Set the main content of the embed
      .setDescription('iam male :joy:');
    // Send the embed to the same channel as embed message
    message.channel.send(embed);
  }
});





// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server :tada: have fun, ${member}`);
});




client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '%animals') {
    const embed = new RichEmbed()
    .setTitle("%cat", "cAT gif")
    .addField("%dog", "for dog gif")
    .addField("%worm", "for worm gif")
    .addField("%wolf", "for wolf gif")
    .addField("%frog", "for frog gif")
    .setColor(0xFF0000)
    message.channel.send(embed);
  }
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '%lifegif') {
    const embed = new RichEmbed()
    .setTitle("%hi1", "hi gif")
    .addField("%hi2", "for hi gif")
    .addField("%play", "for play  gif")
    .addField("%screem", "for scary")
    .addField("%no", "it's not your pesnes")
    .addField("yes", "yes gif")
    .addField("%laugh", "hhhhhhhhh")
    .addField("%stop", "for stop gif")
    .addField("%bye", "bye gif")
    .setColor(0xFF0000)
    message.channel.send(embed);
  }
});



client.on('message', msg => {
  if (msg.content === '%dog') {
    msg.reply('https://giphy.com/gifs/dog-shiba-inu-typing-mCRJDo24UvJMA ');
  }
});



client.on('message', msg => {
  if (msg.content === '%cat') {
    msg.reply('https://giphy.com/gifs/JIX9t2j0ZTN9S ');
  }
});



client.on('message', msg => {
  if (msg.content === '%worm') {
    msg.reply('https://giphy.com/gifs/3d-worm-gif-26BoD64nDXYKHNuj6 ');
  }
});



client.on('message', msg => {
  if (msg.content === '%wolf') {
    msg.reply('https://giphy.com/gifs/wolf-howling-fa52tjli2wTza ');
  }
});




client.on('message', msg => {
  if (msg.content === '%frog') {
    msg.reply('https://giphy.com/gifs/frog-peace-on-earth-it-me-happy-time-for-you-l3vR4gFDcYN1Ywmbu ');
  }
});





client.on('message', msg => {
  if (msg.content === '%hi1') {
    msg.reply('https://giphy.com/gifs/dog-miss-Wj7lNjMNDxSmc ');
  }
});




client.on('message', msg => {
  if (msg.content === '%hi2') {
    msg.reply('https://giphy.com/gifs/bread-L3nWlmgyqCeU8 ');
  }
});



client.on('message', msg => {
  if (msg.content === '%play') {
    msg.reply('https://giphy.com/gifs/80s-vhs-art-8b29QJQgVwUW4 ');
  }
});



client.on('message', msg => {
  if (msg.content === '%screem') {
    msg.reply('https://giphy.com/gifs/xU9TT471DTGJq ');
  }
});




client.on('message', msg => {
  if (msg.content === '%malash') {
    msg.reply('https://giphy.com/gifs/no-cat-nR4L10XlJcSeQ ');
  }
});


client.on('message', msg => {
  if (msg.content === '%yes') {
    msg.reply('https://giphy.com/gifs/daughter-houston-bathtub-hVYVYZZBgF50k ');
  }
});


client.on('message', msg => {
  if (msg.content === '%no') {
    msg.reply('https://giphy.com/gifs/cheezburger-no-bird-g69ZPJfLy7hD2 ');
  }
});

client.on('message', msg => {
  if (msg.content === '%laugh') {
    msg.reply('https://giphy.com/gifs/laughing-despicable-me-minions-ZqlvCTNHpqrio ');
  }
});


client.on('message', msg => {
  if (msg.content === '%stop') {
    msg.reply('https://giphy.com/gifs/one-direction-zayn-malik-naughty-boy-3BL45MJDZABqg  ');
  }
});



client.on('message', msg => {
  if (msg.content === '%bye') {
    msg.channel.send('https://giphy.com/gifs/goodbye-see-ya-you-l1J3CbFgn5o7DGRuE ');
  }
});



client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
});


client.on('message', msg => {
  if (msg.content === '%garo') {
    msg.channel.send('ok').then(msg => {
  setTimeout(() => {
    msg.edit(`:kissing_smiling_eyes: 🚬💨💨💨`);
   },1500);
   setTimeout(() => {
    msg.edit(`:kissing_smiling_eyes: 🚬💨💨`);
  },1800);
  setTimeout(() => {
    msg.edit(`:kissing_smiling_eyes: 🚬💨`);
  },2100);
  setTimeout(() => {
    msg.edit(`:yum:  🚬`)
  },2400);
  });
  }        
  });//by abdo





client.login('NDgzNjI4NTEwNjE1OTYxNjEy.Dmnx4A.uJf67ngBwHa6fT3DZuYATexoYxQ');