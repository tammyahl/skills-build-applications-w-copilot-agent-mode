import { Schema, model, Document, Types } from 'mongoose';

export interface ILeaderboard extends Document {
  user: Types.ObjectId;
  team?: Types.ObjectId;
  score: number;
  rank: number;
  totalActivities: number;
  totalMinutes: number;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
    score: { type: Number, required: true, default: 0 },
    rank: { type: Number, required: true, default: 0 },
    totalActivities: { type: Number, required: true, default: 0 },
    totalMinutes: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

export const Leaderboard = model<ILeaderboard>('Leaderboard', leaderboardSchema);
