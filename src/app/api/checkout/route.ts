import { NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request, response: Response) {
  const { title, price, productId, userId } = await request.json();
  // console.log("フェッチできてる", title, price, productId, userId);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      metadata: {
        productId: productId,
      },
      client_reference_id: userId,
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: title,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/product/checkout-sucsess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:3000",
    });
    return NextResponse.json({ checkout_url: session.url });
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
}
