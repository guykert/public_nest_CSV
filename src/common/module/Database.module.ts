import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGODB)],
})
export class DatabaseModule {}