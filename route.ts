import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to you (owner)
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'moradavega143@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
          <hr />
          <p style="font-size: 12px; color: #666;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    }

    // Email to visitor (confirmation)
    const visitorMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you, ${name}!</h2>
          <p>I received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
          <hr />
          <p>Best regards,<br/>Vega Morada</p>
          <p style="font-size: 12px; color: #666;">
            Email: moradavega143@gmail.com<br/>
            LinkedIn: linkedin.com/in/vegamorada
          </p>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(visitorMailOptions),
    ])

    return NextResponse.json(
      { success: true, message: 'Emails sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    )
  }
}
