"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const loanRoutes_1 = __importDefault(require("./Routes/loanRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
const PORT = 3000;
// MongoDB connection
mongoose_1.default.connect('mongodb://127.0.0.1:27017/loanapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});
app.use('/api/loans', loanRoutes_1.default);
app.get('/', (req, res) => {
    res.send('CreditSea backend running');
});
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
