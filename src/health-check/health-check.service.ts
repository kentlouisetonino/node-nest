import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class HealthCheckService {
  async healthCheck(response: Response) {
    return response.send({ message: 'Server is online.' });
  }
}
