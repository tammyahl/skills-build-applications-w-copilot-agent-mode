"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, enum: ['running', 'cycling', 'swimming', 'hiking', 'gym', 'yoga', 'walking'] },
    duration: { type: Number, required: true }, // in minutes
    distance: { type: Number }, // in km
    calories: { type: Number },
    intensity: { type: String, required: true, enum: ['low', 'medium', 'high'] },
    date: { type: Date, required: true, default: Date.now },
    notes: { type: String },
}, { timestamps: true });
exports.Activity = (0, mongoose_1.model)('Activity', activitySchema);
//# sourceMappingURL=Activity.js.map