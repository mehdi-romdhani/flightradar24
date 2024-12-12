import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightradarService } from './flightradar/flightradar.service';
import { FlightsController } from './flightradar/flightradar.controller';

@Module({
  imports: [],
  controllers: [AppController, FlightsController],
  providers: [AppService, FlightradarService],
})
export class AppModule {}
