"use server"

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

  // console.log('first', first)

  // const lang = await getLanguage()

  const lang = 'en' // temporary hardcode

  const messages ={
    success: lang == 'fr' ? 'E-mail envoyé avec succès' : 'Email sent successfully',
    failure: lang == 'fr' ? "Échec de l'envoi de l'e-mail" : 'Failed to send email',
    wrongData: lang == 'fr' ? 'Veuillez remplir tous les champs' : 'Please fill all fields'
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
