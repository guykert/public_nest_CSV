import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document} from "mongoose";
import * as paginate from "mongoose-paginate-v2";
import { Permission, PermissionSchema } from "../../permission/entities/permission.entity";

@Schema()
export class Role extends Document {

    // id:string;
    @Prop({
        index:true,
    })
    name: string;

    @Prop()
    description: string;

    @Prop({
        index:false,
        default:1
    })
    activo: boolean;

    @Prop()
    createdAt: Date;
  
    @Prop()
    updatedAt: Date;

    @Prop()
    createdBy: string;

    @Prop()
    updatedBy: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Permission.name }] })
    permissions: Permission[];

}

const schema = SchemaFactory.createForClass(Role);
schema.plugin(paginate);
schema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

export const RoleSchema = schema;


