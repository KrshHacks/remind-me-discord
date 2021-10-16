"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor() {
        this.help = {
            name: "remind",
            description: "Remind Command",
            aliases: [],
        };
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            message.channel.createMessage('Will Remind Ya! after ' + args[0] + 'minutes');
            const time = args.shift();
            setTimeout(function () {
                message.channel.createMessage(`<@${message.author.id}> Reminder for ${args.join(" ")}`);
            }, parseFloat(time) * 60 * 1000);
        });
    }
}
exports.default = Command;
