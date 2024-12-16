import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { FlightradarService } from './flightradar/flightradar.service';
// import { FlightsController } from './flightradar/flightradar.controller';
import { AirlinesLightController } from './api-client/controllers/airlines-light-service.controller';
import { AirlinesLightService } from './api-client';
// import { ApiClientController } from './src/api-client/api-client.controller';

@Module({
  imports: [],
  controllers: [AppController, AirlinesLightController],
  providers: [AppService, AirlinesLightService],
})
export class AppModule {}
