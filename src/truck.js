const Discord = require('discord.js');
const auth = require("../auth.json");
const charCreate = require("./charCreate.js")
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("in traffic");
});

client.on('message', msg => {
	if(msg.content === 'Gamer') {
		msg.channel.send("Lets get this bread");
	}
	if(msg.content[0] == '!') {
        	var resp = charCreate.handleUser(msg.author.id,msg.content);
        	msg.channel.send(resp)
	}
});

client.login(auth.sauce);
