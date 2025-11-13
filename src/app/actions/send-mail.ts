"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendContactEmail(formData: ContactFormData) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: "We received your message",
      html: `
        <h2>Thank You, ${formData.name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p>Best regards,<br>The Team</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
