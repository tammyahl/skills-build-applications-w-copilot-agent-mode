import { Schema, model, Document, Types } from 'mongoose';

export interface IActivity extends Document {
  user: Types.ObjectId;
  type: string;
  duration: number;
  distance?: number;
  calories?: number;
  intensity: string;
  date: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, enum: ['running', 'cycling', 'swimming', 'hiking', 'gym', 'yoga', 'walking'] },
    duration: { type: Number, required: true }, // in minutes
    distance: { type: Number }, // in km
    calories: { type: Number },
    intensity: { type: String, required: true, enum: ['low', 'medium', 'high'] },
    date: { type: Date, required: true, default: Date.now },
    notes: { type: String },
  },
  { timestamps: true }
);

export const Activity = model<IActivity>('Activity', activitySchema);
