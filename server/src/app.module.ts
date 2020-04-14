import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoController } from './mongo/mongo.controller';

@Module({
  imports: [],
  controllers: [AppController, MongoController],
  providers: [AppService],
})
export class AppModule {}
