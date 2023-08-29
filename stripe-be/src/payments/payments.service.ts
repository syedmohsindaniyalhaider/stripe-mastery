import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Response } from 'express';
@Injectable()
export class PaymentsService {
  private stripe: Stripe;
  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-08-16',
    });
  }
  async createPaymentIntent(dto: any, res: Response) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: dto?.amount,
        currency: 'usd',
        payment_method_types: ['card'],
      });
      return res.status(200).json({
        success: true,
        data: { clientSecret: paymentIntent?.client_secret },
        error: {},
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        data: {},
        error: { message: error.message },
      });
    }
  }
}
