import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const {name, phone, message} = await request.json();

    // Validate input
    if (!name || !phone || !message) {
      return NextResponse.json(
        {message: "All fields are required"},
        {status: 400}
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `${name} sent a message from Mikilionaire Infinity Income's website`,
      html: `
        <h2>Sir Mike, we have a message from ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>WhatsAppNumber:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Sent from Mikilionaire Infinity Income contact form</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {message: "Message sent successfully"},
      {status: 200}
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {message: "Failed to send message"},
      {status: 500}
    );
  }
}
