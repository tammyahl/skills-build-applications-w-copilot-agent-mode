import { Document, Types } from 'mongoose';
export interface ILeaderboard extends Document {
    user: Types.ObjectId;
    team?: Types.ObjectId;
    score: number;
    rank: number;
    totalActivities: number;
    totalMinutes: number;
    updatedAt: Date;
}
export declare const Leaderboard: import("mongoose").Model<ILeaderboard, {}, {}, {}, Document<unknown, {}, ILeaderboard, {}, import("mongoose").DefaultSchemaOptions> & ILeaderboard & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ILeaderboard>;
//# sourceMappingURL=Leaderboard.d.ts.map