import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import * as paginate from "mongoose-paginate-v2";

@Schema()
export class Dia extends Document {

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

}

const schema = SchemaFactory.createForClass(Dia);
schema.plugin(paginate);
schema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

export const DiaSchema = schema;


