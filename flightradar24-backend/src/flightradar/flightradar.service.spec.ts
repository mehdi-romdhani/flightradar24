import { Test, TestingModule } from '@nestjs/testing';
import { FlightradarService } from './flightradar.service';

describe('FlightradarService', () => {
  let service: FlightradarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightradarService],
    }).compile();

    service = module.get<FlightradarService>(FlightradarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
