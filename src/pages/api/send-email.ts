import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { IEmailRequestBody } from '@/models/form.types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, mail, telephone, message }: IEmailRequestBody = req.body

    try {
      const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      })

      // Отправка электронного письма
      const info = await transporter.sendMail({
        from: `"${name}" <${process.env.MAIL_USER}>`,
        to: 'work@absolute-ideas-it.com',
        subject: '[Absolute Ideads] Form',
        text: `A new application has been received:\n
Name: ${name}\nEmail: ${mail}\nPhone: ${telephone}\nMessage: ${message}`,
        html: `<p>A new application has been received:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${mail}</p>
               <p><strong>Phone:</strong> ${telephone}</p>
               <p><strong>Message:</strong> ${message}</p>
               `
      })

      console.log('Message sent: %s', info.messageId)
      res.status(200).json({ success: true })
    } catch (error) {
      console.error(
        'Error occurred during email sending:',
        (error as Error).message,
        (error as Error).stack
      )

      res.status(500).json({ error: 'Error sending email' })
    }
  } else {
    res.status(405).end()
  }
}

export default handler
