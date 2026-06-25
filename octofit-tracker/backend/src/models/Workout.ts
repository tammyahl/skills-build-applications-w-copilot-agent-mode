import { Schema, model, Document, Types } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  description: string;
  type: string;
  difficulty: string;
  duration: number;
  exercises: string[];
  targetMuscles: string[];
  userId?: Types.ObjectId;
  isTemplate: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true, enum: ['strength', 'cardio', 'flexibility', 'balance', 'mixed'] },
    difficulty: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    duration: { type: Number, required: true }, // in minutes
    exercises: [{ type: String }],
    targetMuscles: [{ type: String }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    isTemplate: { type: Boolean, default: true }, // true for system templates, false for user-created
  },
  { timestamps: true }
);

export const Workout = model<IWorkout>('Workout', workoutSchema);
