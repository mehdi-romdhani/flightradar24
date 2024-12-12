import { Controller, Get, Param } from '@nestjs/common';
import { FlightradarService } from './flightradar.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightradarService: FlightradarService) {}

  @Get('airline/:icao')
  async getAirline(@Param('icao') icao: string) {
    return this.flightradarService.getAirlineInfo(icao);
  }
}
