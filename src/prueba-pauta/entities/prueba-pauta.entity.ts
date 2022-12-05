import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import * as paginate from "mongoose-paginate-v2";
import { PruebaEjeTematico } from "../../prueba-eje-tematico/entities/prueba-eje-tematico.entity";
import { PruebaHabilidad } from "../../prueba-habilidad/entities/prueba-habilidad.entity";

@Schema()
export class PruebaPauta extends Document {

    // id:string;
    @Prop({
        index:true,
    })
    numero_pregunta: number;

    @Prop()
    correcta: string;

    @Prop()
    eje_tematico: PruebaEjeTematico;

    @Prop()
    habilidad_id: PruebaHabilidad;

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

const schema = SchemaFactory.createForClass(PruebaPauta);
schema.plugin(paginate);
schema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

export const PruebaPautaSchema = schema;


