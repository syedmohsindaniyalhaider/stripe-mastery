import { Controller, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}
  @Post('/create-payment-intent')
  async createPaymentIntent(@Req() req: Request, @Res() res: Response) {
    return await this.paymentsService.createPaymentIntent(req.body, res);
  }
}
