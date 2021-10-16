import Eris from "eris";
import { Command as CMD, Client } from "../..";

export default class Command implements CMD {
  help = {
    name: "remind",
    description: "Remind Command",
    aliases: [],
  };

  async run(client: Client, message: Eris.Message, args: string[]) {
    setTimeout(function () {
      message.channel.createMessage(
        `${message.author} Reminder for ${args[1]}`
      );
    }, parseFloat(args[0]) * 60 * 1000);
  }
}
