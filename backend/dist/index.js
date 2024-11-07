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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findServer = findServer;
const axios_1 = __importDefault(require("axios"));
const REQUEST_TIMEOUT = 5000;
function checkServerOnline(server_1) {
    return __awaiter(this, arguments, void 0, function* (server, timeout = REQUEST_TIMEOUT) {
        try {
            const result = yield axios_1.default.get(server.url, {
                timeout: REQUEST_TIMEOUT
            });
            return result.status >= 200 && result.status < 300;
        }
        catch (error) {
            return false;
        }
    });
}
/**
 * findServer
 */
function findServer(servers) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = yield Promise.allSettled(servers.map((server) => __awaiter(this, void 0, void 0, function* () {
            const isOnline = yield checkServerOnline(server);
            if (!isOnline) {
                throw new Error('Server is offline');
            }
            return server;
        })));
        let onlineServer = null;
        promises.forEach(promise => {
            if (promise.status === 'fulfilled'
                && (!onlineServer || promise.value.priority < onlineServer.priority)) {
                onlineServer = promise.value;
            }
        });
        if (!onlineServer) {
            throw new Error('All servers all offline');
        }
        return onlineServer;
    });
}
