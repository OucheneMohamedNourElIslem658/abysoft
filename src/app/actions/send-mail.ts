"use server"

import { getLanguage } from '@/utilities/getLanguage'
// import { mailOptions, transporter } from "@/lib/mailer"
// import { getLanguage } from "./strapi"

import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const password = process.env.PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
})

const mailOptions = {
 
  from: email,
  to: email,
}


export async function sendMailAction (prev: any, formData: FormData) {

  const lang = await getLanguage()

  let messages : {
    success: string,
    failure: string,
    wrongData: string
  }

  switch (lang) {
    case 'fr':
      messages = {
        success: 'E-mail envoyé avec succès',
        failure: "Échec de l'envoi de l'e-mail",
        wrongData: 'Veuillez remplir tous les champs'
      }
      break
    case 'en':
      messages = {
        success: 'Email sent successfully',
        failure: 'Failed to send email',
        wrongData: 'Please fill all fields'
      }
      break
    case 'ar':
      messages = {
        success: 'تم إرسال البريد الإلكتروني بنجاح',
        failure: 'فشل في إرسال البريد الإلكتروني',
        wrongData: 'يرجى ملء جميع الحقول'
      }
      break
    default:
      messages = {
        success: 'Email sent successfully',
        failure: 'Failed to send email',
        wrongData: 'Please fill all fields'
      }
      break
  }
 
  const newFormData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    text: formData.get('message') as string
  }


  console.log('newFormData', newFormData)

  try {

  if (!newFormData.name || !newFormData.email || !newFormData.subject || !newFormData.text) {
    return { message: messages.wrongData, success: false }
  }

    await transporter.sendMail({
      ...mailOptions,
      subject: `New message from ${newFormData.name}: ${newFormData.subject}`,
      text: `${newFormData.email} -- ${newFormData.text}`,
    })


    return { message: messages.success, success: true }
  } catch (error) {
    return { message: messages.failure, success: false }
  }

}
