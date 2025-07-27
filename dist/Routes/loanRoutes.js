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
const express_1 = __importDefault(require("express"));
const Loan_1 = require("../Models/Loan");
const router = express_1.default.Router();
// Create new loan
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = new Loan_1.Loan(req.body);
        const savedLoan = yield loan.save();
        res.status(201).json(savedLoan);
    }
    catch (error) {
        res.status(500).json({ error: 'Error saving loan Application' });
    }
}));
// Get all loans
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loans = yield Loan_1.Loan.find();
        res.json(loans);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching loans Application' });
    }
}));
// PATCH /api/loans/:id
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const updatedLoan = yield Loan_1.Loan.findByIdAndUpdate(id, { status }, { new: true });
        if (!updatedLoan)
            return res.status(404).send('Loan not found');
        res.json(updatedLoan);
    }
    catch (err) {
        console.error('Error updating loan:', err);
        res.status(500).send('Server error');
    }
}));
exports.default = router;
