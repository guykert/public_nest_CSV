import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document,Types, Schema as MongooseSchema } from "mongoose";
import * as paginate from "mongoose-paginate-v2";
import { Nivel } from "../../nivel/entities/nivel.entity";
import { Ramo } from "../../ramo/entities/ramo.entity";


@Schema()
export class PruebaEjeTematico extends Document {

    // id:string;
    @Prop({
        index:true,
    })
    name: string;

    @Prop()
    description: string;

    @Prop()
    orden: number;

    @Prop({ type: Types.ObjectId, ref: Ramo.name })
    ramo: Ramo;

    @Prop({ type: Types.ObjectId, ref: Ramo.name })
    nivel: Nivel;

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

const schema = SchemaFactory.createForClass(PruebaEjeTematico);
schema.plugin(paginate);
schema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

export const PruebaEjeTematicoSchema = schema;


