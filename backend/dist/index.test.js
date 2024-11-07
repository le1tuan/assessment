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
const index_1 = require("./index");
const sample = [
    {
        "url": "https://does-not-work.perfume.new",
        "priority": 1
    },
    {
        "url": "https://gitlab.com",
        "priority": 4
    },
    {
        "url": "http://app.scnt.me",
        "priority": 3
    },
    {
        "url": "https://offline.scentronix.com",
        "priority": 2
    }
];
jest.mock('axios', () => {
    return Object.assign(Object.assign({}, jest.requireActual('axios')), { get: jest.fn()
            .mockResolvedValueOnce({
            status: 200
        })
            .mockResolvedValueOnce({
            status: 200
        })
            .mockResolvedValueOnce({
            status: 200
        })
            .mockResolvedValueOnce({
            status: 200
        })
            // case 2
            .mockResolvedValueOnce({
            status: 500
        })
            .mockResolvedValueOnce({
            status: 500
        })
            .mockResolvedValueOnce({
            status: 500
        })
            .mockResolvedValueOnce({
            status: 500
        })
            // case 3
            .mockResolvedValueOnce({
            status: 500
        })
            .mockResolvedValueOnce({
            status: 200
        })
            .mockResolvedValueOnce({
            status: 500
        })
            .mockResolvedValueOnce({
            status: 200
        }) });
});
describe('findServer test', () => {
    it('should resolve with the online server of lowest priority', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, index_1.findServer)(sample);
        expect(result).toEqual(sample[0]);
    }));
    it('should throw error when all server are offline', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield (0, index_1.findServer)(sample);
        }
        catch (error) {
            expect(error.message).toEqual('All servers all offline');
        }
    }));
    it('should resolve with the online server of lowest priority', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, index_1.findServer)(sample);
        expect(result).toEqual(sample[3]);
    }));
});
