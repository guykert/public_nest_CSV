import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import * as paginate from "mongoose-paginate-v2";

@Schema()
export class Permission extends Document {

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

    @Prop({
        index:false,
        default:false
    })
    read: boolean;

    @Prop({
        index:false,
        default:false
    })
    write: boolean;

    @Prop({
        index:false,
        default:false
    })
    create: boolean;

    @Prop()
    createdAt: Date;
  
    @Prop()
    updatedAt: Date;

    @Prop()
    createdBy: string;

    @Prop()
    updatedBy: string;

}

const schema = SchemaFactory.createForClass(Permission);
schema.plugin(paginate);
schema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

export const PermissionSchema = schema;


