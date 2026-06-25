import { Document, Types } from 'mongoose';
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
export declare const Activity: import("mongoose").Model<IActivity, {}, {}, {}, Document<unknown, {}, IActivity, {}, import("mongoose").DefaultSchemaOptions> & IActivity & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IActivity>;
//# sourceMappingURL=Activity.d.ts.map