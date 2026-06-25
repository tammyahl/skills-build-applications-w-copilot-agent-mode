"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
const mongoose_1 = require("mongoose");
const workoutSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true, enum: ['strength', 'cardio', 'flexibility', 'balance', 'mixed'] },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    duration: { type: Number, required: true }, // in minutes
    exercises: [{ type: String }],
    targetMuscles: [{ type: String }],
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    isTemplate: { type: Boolean, default: true }, // true for system templates, false for user-created
}, { timestamps: true });
exports.Workout = (0, mongoose_1.model)('Workout', workoutSchema);
//# sourceMappingURL=Workout.js.map