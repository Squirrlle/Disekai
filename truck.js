const Discord = require('discord.js');
const auth = require("./auth.json");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("in traffic");
});

client.on('message', msg => {
	if(msg.content === 'why') {
		msg.reply("Why are we still here? Just to suffer? Every night, I can feel my leg… and my arm… even my fingers. The body I’ve lost… the comrades I’ve lost… won’t stop hurting… It’s like they’re all still there. You feel it, too, don’t you?");
	}
});

client.login(auth.sauce);
