import { Controller } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import Stripe from 'stripe';
@Controller('payments')
export class PaymentsController {
  private stripe: Stripe;
  constructor(private readonly paymentsService: PaymentsService) {}
}
