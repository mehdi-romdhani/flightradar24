import { Injectable } from '@nestjs/common';
import axios from 'axios';
//todo: Add the following import statement - voir le client directement for call endpoint request 
//increment websocket +1 

@Injectable()
export class FlightradarService {
  private readonly baseUrl =
    'https://fr24api.flightradar24.com/api/sandbox/static/airlines';
  private readonly token =
    '9d8688fb-237e-4857-a26f-d54e5a082952|dx7BQLabOPUVZ1F2ulivyBglKo26zvBqRhMrThYN1e62cbdb';

  async getAirlineInfo(icao: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/${icao}/light`, {
        headers: {
          Accept: 'application/json',
          'Accept-Version': 'v1',
          Authorization: `Bearer ${this.token}`,
        },
      });
      // Log for debugging
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      // Detailed error logging
      console.error('API Error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
      throw new Error(`Failed to fetch airline info: ${error.message}`);
    }
  }
}
