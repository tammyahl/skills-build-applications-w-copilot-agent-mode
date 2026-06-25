import { Document, Types } from 'mongoose';
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
export declare const Workout: import("mongoose").Model<IWorkout, {}, {}, {}, Document<unknown, {}, IWorkout, {}, import("mongoose").DefaultSchemaOptions> & IWorkout & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IWorkout>;
//# sourceMappingURL=Workout.d.ts.map