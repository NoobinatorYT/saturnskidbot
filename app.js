const Discord = require('discord.js')
const client = new Discord.Client();
//change this prefix to whatever u want
const prefix = 's!'
const fs = require('fs')
const randomcolor = require('randomcolor')

client.on('ready', () => {
  console.log("I am on this many servers.." + client.guilds.size);
  client.user.setGame(`${prefix}help ${client.guilds.size}`)
});
//make sure you get the id of the channel you want to ost the jons and leaves in
client.on("guildMemberAdd", member => {
let guild = member.guild;

  const embed = new Discord.RichEmbed()
  .setColor(randomcolor())
  .addField('User:', `${member.user.username}#${member.user.discriminator}`)
  .addField('Message:', 'Welcome to Saturn Exploit!!')
  .addField('Users:', `${guild.users.size}`)
  return client.channels.get('channelidgoeshere').send({embed});
  
   if(autorole[member.guild.id]) {
        member.addRole(autorole[member.guild.id])
    }
});
//make sure you get the id of the channel you want to ost the jons and leaves in
client.on("guildMemberRemove", member => {
let guild = member.guild;

  const embed = new Discord.RichEmbed()
  .setColor(randomcolor())
  .addField('User:', `${member.user.username}#${member.user.discriminator}`)
  .addField('Message:', 'Did you have to leave dude!')
  .addField('Users:', `${guild.users.size}`)
  return client.channels.get('channelidgoeshere').send({embed});
  
   if(autorole[member.guild.id]) {
        member.addRole(autorole[member.guild.id])
    }
});

client.on('message', message => {
	//logs the dms of whoever dms that person
	  if (message.author.bot) return;
if (message.channel.type ==='dm') {
	try {
  let modlog = client.channels.find('name', 'private');
return console.log(`${message.author.tag} has sent a message to SaturnBot. The message was ${message.content}`) 
	} catch (e) {
		console.log(e)
	}
};

//dont change any of this except the part [Saturn]
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0]
  command = command.slice(prefix.length)
  console.log(`[Saturn] ${message.author.tag} has used ${command}`);

  let args = message.content.split(" ").slice(1);
	
	//blacklists someone hahaha
	
	    if (command === "blacklist") {
	    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Blacklisted');
	  if (message.author.id !== "231849508764516352") return;
	  if (message.author.id == "231849508764516352") {
		  
	  let user = message.mentions.users.first();
  message.guild.member(user).addRole(muteRole);
  message.reply("If no error has come to harm, it was completed.") 
	  } else {
		message.reply("You don't have permission dumbass");  
	  }
} 

//say stuff
	 if (command === "say") {
     
	       if (message.member.roles.some(r=>["Blacklisted", "naughtylist"].includes(r.name)) )
	return message.reply("You are blacklisted! You are not allowed to use this command. Thanks very much!");
	let listentome = args.join(" ");
        message.channel.sendMessage("", {
          embed: {
            color: 0xFF0000,
            description: `**${message.author.username}** has just said **${listentome}**`
          }
      });
  }
//makes an announcement
  if (command === "announce") {
      if (message.member.hasPermission("ADMINISTRATOR")) {
		  try {
			  message.channel.send("@everyone")
			  message.delete();
       let args = message.content.split(" ").slice(1).join(" ");
    let split = args.split("-");
    let url = args[2];

	  
	  
  const embed = new Discord.RichEmbed()
  .setTitle("Saturn Announcement")
  .setColor(randomcolor())
  .setDescription(split[0])
  return message.channel.sendEmbed(embed);

	  } catch (e) {
		  console.log(e);
	  }
    }
  }
//sets game name
  if (command === "setgame") {
    if (message.author.id == "youridgoeshere") {
    var argresult = args.join(' ');
    if (!argresult) argresult = null;
    client.user.setGame(argresult);
    message.reply("It has been set..");
    } else {
      message.reply("DONT EVEN TRY IT BOI!");
    }
  }
//sets status
  if (command === "setstatus") {
    if (message.author.id == "youridgoeshere") {
    var argresult = args.join(' ');
    client.user.setStatus(argresult);
    message.reply("It has been set..");
    } else {
      message.reply("DONT EVEN TRY IT BOI!");
    }
  }
//lmgtfy is a special kind of command I use. 
if (command === "lmgtfy") {
	     if (message.member.roles.some(r=>["Blacklisted", "naughtylist"].includes(r.name)) )
	return message.reply("You are blacklisted! You are not allowed to use this command. Thanks very much!");
	       let args = message.content.split(" ").slice(1).join("+");
	
	message.reply(`http://lmgtfy.com/?q=` + args)
	
}


//you get the idea

  if (command === "ping") {
    message.channel.sendMessage("pong!")
  }
//you get the idea
if (command === "help") {
	  try {

  const embed = new Discord.RichEmbed()
  .setTitle("Commands")
  .setColor(randomcolor())
  .addField('Misc','8ball s!8ball <message>, roll s!roll, ping s!ping, say s!say <message>, lmgtfy s!lmgtfy <what you want to search>, bean s!bean <user>, buy s!buy, roast s!roast <user>')
  .addField('Clients', 'whitelist s!whitelist {HWID}')
  .addField('Music', 'Music - play song - s!play [url] - play music from url Music - skip song - s!skip - skip current song (admin only) Music - list queue - s!queue - list queue Music - pause playback - s!pause - pause playback (admin only) Music - resume playback - s!resume - resume playback (admin only) Music - set volume - s!volume [volume] - set volume (admin only) Music - leave channel - s!leave - leave channel (admin only)Music - clear queue - s!clearqueue - clear queue (admin only)')
  .addField('Admins','Announce - s!announce (message), lockdown s!lockdown <time>, opensales s!opensales, closesales s!closesales, permit s!permit <user>, unpermit s!unpermit <user>')
  return message.channel.sendEmbed(embed);

	  } catch (e) {
		  console.log(e);
	  }
  }

 
//you get the idea
  if (command === "kms") {
	       if (message.member.roles.some(r=>["Blacklisted", "naughtylist"].includes(r.name)) )
	return message.reply("You are blacklisted! You are not allowed to use this command. Thanks very much!");
    message.channel.sendMessage(`:knife: I have successfully killed ${message.author}. :knife:`)
  }
//executes some good js code
  if (command == "eval") {
    if (message.author.id !== "youridgoeshere") return;
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util")
        .inspect(evaled);
        message.channel.sendCode("xl", clean(evaled));
    } catch (err) {
      message.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
  // you must have a channel called #owner-whitelist
  if (command === "whitelist") {
	  if (message.author.id !== "231849508764516352") return message.reply("This has been disabled until release")
	  if (!message.member.roles.some(r=>["Clients"].includes(r.name)) )
	return message.reply("You are NOT a client, so you are not to use this");
   let reason = args.slice(0).join(' ');
  let modlog = message.guild.channels.find('name', 'owner-whitelist');
  if (reason.length < 1) return message.reply('You must supply your HWID first.');
  message.delete();
  const embed = new Discord.RichEmbed()
  .setColor(0x32CD32)
  .addField('Action:', 'Whitelist')
  .addField('User:', `${message.author.username}#${message.author.discriminator}`)
  .addField('HWID:', reason);
  return client.channels.get(modlog.id).sendEmbed(embed); 
  message.author.send("You have been sent to the whitelist database. It may take a while, but thanks for buying Saturn!")
	  
  }

  if (command === "8ball") {
	       if (message.member.roles.some(r=>["Blacklisted", "naughtylist"].includes(r.name)) )
	return message.reply("You are blacklisted! You are not allowed to use this command. Thanks very much!");
   var ball = ['Yes','No doubt about it','Try again','signs point to yes','I say no','No chance','Dont think so'];
   message.channel.sendMessage(ball[Math.floor(Math.random () * ball.length)]);
  }

    if (command === "roast") {
	  let user = message.mentions.users.first()
	       if (message.member.roles.some(r=>["Blacklisted", "naughtylist"].includes(r.name)) )
	return message.reply("You are blacklisted! You are not allowed to use this command. Thanks very much!");
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to roast them.').catch(console.error);

   var ball = [`${user.username} I doubt that you could drown: fat floats.`, `${user.username} Don't play hard to get when you're hard to want.`, `${user.username} If you really want to know about mistakes, you should ask your parents.`, `${user.username} Your mom is so stupid she tried to wake a sleeping bag.`, `${user.username} I'm no proctologist, but I know an asshole when I see one.`, `${user.username} You're not funny, but your life, now that's a joke.`, `${user.username} Your gene pool could use a little chlorine.`, `${user.username} Did your parents ever ask you to run away from home?`, `${user.username} You may have had sex once: with a gardening hoe.`, `${user.username} You're so dense, light must bend around you.`, `${user.username} You shouldn't play hide and seek, no one would look for you.`, `${user.username} Am I getting smart with you? How would you know?`, `${user.username} I don't exactly hate you, but if you were on fire and I had water, I'd drink it.`, `${user.username} I've seen people like you, but I had to pay admission!
`, `${user.username} I can prove that God isn't real. If He was real, He would never have made something as ugly as you.
`, `${user.username} Which sexual position produces the ugliest children? Ask your mother.`, `${user.username} You clearly have not been burdened by an overabundance of education.`, `${user.username} Roses are red violets are blue, God made me pretty, what happened to you?`, `${user.username} You couldn't pour water out of a boot if the instructions were on the heel.`, `${user.username} Your hairline is like a peson with alzheimer's drawing a straight line.`];
   message.channel.sendMessage(ball[Math.floor(Math.random () * ball.length)]);
  }
  
if (command === "roll") {
	     if (message.member.roles.some(r=>["Blacklisted", "naughtylist"].includes(r.name)) )
	return message.reply("You are blacklisted! You are not allowed to use this command. Thanks very much!");
  message.channel.sendMessage(Math.floor(Math.random() * 100));
}


if (command === "purge") {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
}
  if (command === "lockdown") {
  if (message.member.hasPermission("MANAGE_CHANNELS") || if (message.author.id == "youridgoeshere")) {
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Lockdown lifted.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
}
}

	
});


function clean(text) {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203))
    .replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

            client.login('tokengoeshere');
