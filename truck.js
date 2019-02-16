const Discord = require('discord.js');
const auth = require("./auth.json");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("in traffic");
});

client.on('message', msg => {
	if(msg.content === 'Hi') {
		msg.channel.send("String");
	}
});

client.login(auth.sauce);
