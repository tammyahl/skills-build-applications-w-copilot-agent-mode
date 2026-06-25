import { Document, Types } from 'mongoose';
export interface ITeam extends Document {
    name: string;
    description: string;
    members: Types.ObjectId[];
    leader: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Team: import("mongoose").Model<ITeam, {}, {}, {}, Document<unknown, {}, ITeam, {}, import("mongoose").DefaultSchemaOptions> & ITeam & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ITeam>;
//# sourceMappingURL=Team.d.ts.map