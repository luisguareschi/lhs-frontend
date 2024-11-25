import { SendEmailProps } from "@/queries/email/types";
import axios from "axios";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body: SendEmailProps = await req.json();

  // validate body
  if (!body.fromName) {
    return NextResponse.json({ error: "Missing name" }, { status: 400 });
  }
  if (!body.subject) {
    return NextResponse.json({ error: "Missing subject" }, { status: 400 });
  }
  if (!body.content) {
    return NextResponse.json({ error: "Missing content" }, { status: 400 });
  }

  if (!body.fromEmail) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  try {
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [
          {
            to: [{ email: process.env.SENDGRID_FROM_EMAIL }],
          },
        ],
        from: { email: process.env.SENDGRID_FROM_EMAIL },
        subject: `${body.fromName} (${body.fromEmail}) - ${body.subject}`,
        content: [{ type: "text/plain", value: body.content }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    return NextResponse.json({
      message: "Email sent",
      status: response.status,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { errors: error.response.data.errors },
      { status: error.response.status },
    );
  }
}
