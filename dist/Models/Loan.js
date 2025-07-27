"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const LoanSchema = new mongoose_1.default.Schema({
    fullName: String,
    loantenture: String,
    phone: String,
    address: String,
    loanAmount: String,
    loanReason: String,
    income: String,
    appliedAt: {
        type: Date,
        default: Date.now, // sets current date/time on creation
    },
    status: {
        type: String,
        default: 'Pending',
    },
});
exports.Loan = mongoose_1.default.model('Loan', LoanSchema);
