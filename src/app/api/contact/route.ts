import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const {name, email, phone, message} = await request.json();

    // Validate input
    if (!name || !email || !phone || !message) {
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

    // Email to us
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: `Mikilionaire Infinity Income <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We Received Your Message",
      html: `
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and our team will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Mikilionaire Infinity Income Team</p>
      `,
    });

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
