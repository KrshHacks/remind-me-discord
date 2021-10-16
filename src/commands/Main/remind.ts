import Eris from "eris";
import { Command as CMD, Client } from "../..";

export default class Command implements CMD {
  help = {
    name: "remind",
    description: "Remind Command",
    aliases: [],
  };

  async run(client: Client, message: Eris.Message, args: string[]) {
    message.channel.createMessage('Will Remind Ya! after ' + args[0] + 'minutes')
    
    const time: any = args.shift()
    
    setTimeout(function () {
      message.channel.createMessage(
        `<@${message.author.id}> Reminder for ${args.join(" ")}`
      );
    }, parseFloat(time) * 60 * 1000);
  }
}
