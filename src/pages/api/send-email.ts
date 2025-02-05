import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { IEmailRequestBody } from '@/models/form.types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, mail, telephone, message }: IEmailRequestBody = req.body

    try {
      const transporter = nodemailer.createTransport({
        // host: 'smtp.mail.ru',
        // port: 587,
        // secure: false,
        // service: 'gmail',
        host: 'mail.tutanota.com',
        port: 587, // Порт 587 для STARTTLS
        secure: false, // Используется STARTTLS (не SSL)
        // port: 465, // Порт 465 для безопасного соединения
        // secure: true, // Использование SSL
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      })

      // Отправка электронного письма
      const info = await transporter.sendMail({
        from: `"${name}" <${process.env.MAIL_USER}>`,
        to: 'keenandtightcaretakers@tutamail.com',
        subject: '[BLACK OCEAN] Form',
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
