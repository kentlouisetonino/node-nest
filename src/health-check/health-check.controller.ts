import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { HealthCheckService } from './health-check.service';

@Controller('api')
export class HealthCheckController {
  constructor(private healthCheckService: HealthCheckService) {}

  @Get('/health')
  healtCheck(@Req() _: Request, @Res() res: Response) {
    return this.healthCheckService.healthCheck(res);
  }
}
