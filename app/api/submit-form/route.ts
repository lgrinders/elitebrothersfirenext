import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export POST function
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, company, textArea } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "landon.grinders@gmail.com",
      subject: "Form Submission",
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nCompany: ${company}\nText: ${textArea}\n`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json(
        { message: "Email Sent Successfully" },
        { status: 200 },
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Error Sending Mail" },
        { status: 500 },
      );
    }
  } 
  
  
  
  
  
  
  
  catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error processing form" },
      { status: 500 },
    );
  }
}
