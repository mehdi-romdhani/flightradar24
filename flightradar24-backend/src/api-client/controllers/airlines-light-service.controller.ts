import { Controller, Get, Param } from '@nestjs/common';
import { AirlinesLightService } from '../services/AirlinesLightService';

@Controller('airlines')
export class AirlinesLightController {
  constructor() {}

  @Get(':icao/light')
  async getAirlineLight(@Param('icao') icao: string) {
    return AirlinesLightService.getAirlinesLight(icao);
  }
}
