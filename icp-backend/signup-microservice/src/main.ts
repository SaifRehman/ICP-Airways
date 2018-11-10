import * as http from 'http';
import * as debug from 'debug';

import App from './App';

debug('ts-express:server');

class InitServer {
  private port: number | boolean | string;
  private server: any;

  constructor() {
    this.port = this.normalizePort(process.env.port || 3004);
    App.set('port', this.port);
    this.server = http.createServer(App);
    this.server.listen(this.port);
    this.server.on('error', this.onError);
    this.server.on('listening', this.onListening);
  }

  private normalizePort = (val: number | string): number | string | boolean => {
    let port: number = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false;
  };

  private onError = (error: NodeJS.ErrnoException): void => {
    if (error.syscall !== 'listen') throw error;
    let bind =
      typeof this.port === 'string' ? 'Pipe ' + this.port : 'Port ' + this.port;
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  private onListening = (): void => {
    let addr = this.server.address();
    let bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
  };
}

new InitServer();