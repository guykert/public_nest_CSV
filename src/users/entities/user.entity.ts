import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import * as paginate from "mongoose-paginate-v2";

@Schema()
export class User extends Document {

    // id:string;
    @Prop({
        index:true,
    })
    first_name: string;

    @Prop({
        index:true,
    })
    last_name: string;

    @Prop()
    m_last_name: string;

    @Prop({
        unique:true,
        index:true,
    })
    email: string;

    @Prop({
        index:true,
    })
    idg:string;

    @Prop()
    first_nameg: string;

    @Prop()
    last_nameg: string;

    @Prop()
    emailg: string;

    @Prop({
        index:true,
    })
    rut: string;

    @Prop({
        index:false,
        default:1
    })
    activo: boolean;

    @Prop({
        index:false,
        default:0
    })
    registrado: boolean;

    @Prop()
    anio_predeterminado : number;

    @Prop()
    colegio_predeterminada : number;

    @Prop()
    photoURL: string;

    @Prop({
        select:false
    })
    password: string;

    @Prop()
    sexo: string;
  
    @Prop()
    telefono: string;

    @Prop()
    id_zoom: string;
    

    @Prop()
    createdAt: Date;
  
    @Prop()
    updatedAt: Date;

    @Prop()
    roles: string[];
  
    @Prop()
    permissions: string[];

}

const schema = SchemaFactory.createForClass(User);
schema.plugin(paginate);
schema.pre("save", function (next) {

    if(this.email){
        this.email = this.email.toLowerCase().trim();
    }

    next();
});

export const UserSchema = schema;


