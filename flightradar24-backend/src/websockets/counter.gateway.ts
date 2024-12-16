import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class CounterGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private connectionCount = 0;

  handleConnection() {
    console.log('Client connected');
    this.connectionCount++;
    this.server.emit('counterUpdate', this.connectionCount);
  }

  handleDisconnect() {
    console.log('Client disconnected');
    this.connectionCount--;
    this.server.emit('counterUpdate', this.connectionCount);
  }
}
