// import * as Yup from 'yup'

// // Form validation schema
// export const formValidationSchema = Yup.object({
//   name: Yup.string()
//     .required('Please provide your name!')
//     .min(2, 'Name must be at least 2 characters long')
//     .matches(/^[A-Za-z\s\-]+$/, 'Name must contain only letters'),
//   // .matches(/^[A-Z][a-z]+$/, 'Name must contain only letters'),

//   telephone: Yup.string()
//     .required('Please provide a contact phone number!')
//     .matches(
//       /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
//       'Please enter a valid phone number in the format +7 (___) ___-__-__'
//     ),

//   mail: Yup.string()
//     .email('Invalid email address')
//     .matches(/.*\..*/, 'Invalid email address')
//     .required('Required field')
//     .min(8, 'Email must be at least 8 characters long')
//     .max(64, 'Email must be no more than 64 characters long'),

//   message: Yup.string()
//     .required('Required field')
//     .min(10, 'Message must be at least 10 characters long')
// })
import * as Yup from 'yup'

export const formValidationSchema = (t: (key: string) => string) =>
  Yup.object({
    name: Yup.string()
      .required(t('validation.name.required'))
      .min(2, t('validation.name.min'))
      .matches(/^[A-Za-z\s\-]+$/, t('validation.name.matches')),

    telephone: Yup.string()
      .required(t('validation.telephone.required'))
      .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, t('validation.telephone.matches')),

    mail: Yup.string()
      .email(t('validation.mail.email'))
      .matches(/.*\..*/, t('validation.mail.matches'))
      .required(t('validation.mail.required'))
      .min(8, t('validation.mail.min'))
      .max(64, t('validation.mail.max')),

    message: Yup.string()
      .required(t('validation.message.required'))
      .min(10, t('validation.message.min'))
  })
