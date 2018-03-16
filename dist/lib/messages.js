"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const global_1 = require("./global");
class MessageHandler {
    static sendMessage(token, network, destination, content, callback) {
        auth_1.AuthHandler.verifyToken(token, function (err, decoded) {
            if (err) {
                callback({ code: 399, message: "Auth error. -> " + err.message });
            }
            else {
                if (MessageHandler.tokenHasNetwork(network, decoded.networks)) {
                    let connector = global_1.conManager.getConnector(network);
                }
                else {
                    callback({ code: 400, message: "Network " + network + " not found in user network list." });
                }
            }
        });
    }
    static tokenHasNetwork(network, networks) {
        for (let netCandidate of networks) {
            if (netCandidate === network) {
                return true;
            }
        }
        return false;
    }
}
exports.MessageHandler = MessageHandler;
