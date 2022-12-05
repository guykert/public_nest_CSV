import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import * as paginate from "mongoose-paginate-v2";

@Schema()
export class Empresa extends Document {

    // id:string;
    @Prop({
        index:true,
    })
    name: string;

    @Prop({
        index:true,
    })
    identificador: string;

    @Prop()
    rbd: string;

    @Prop()
    encargado: string;

    @Prop()
    telefono: string;

    @Prop()
    telefono2: string;

    @Prop()
    contacto: string;

    @Prop()
    imagen: string;

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

const schema = SchemaFactory.createForClass(Empresa);
schema.plugin(paginate);
schema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

export const EmpresaSchema = schema;


