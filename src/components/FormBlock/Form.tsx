'use client'
import { useFormik, FormikHelpers } from 'formik'
import { FC, useState } from 'react'
import InputMask from 'react-input-mask'
import { Typography, Box, TextField, Backdrop, CircularProgress, Stack } from '@mui/material'
import { formValidationSchema } from '@/schemas/formValidationSchema'
import { lightTheme } from '@/styles/theme'
import { IEmailRequestBody } from '@/models/form.types'
import SubmittedText from './SubmittedText'
import { useTranslation } from 'react-i18next'
import ColoredButton from '@/common/ui-kit/ColoredButton'
import { Language } from '@/models/language.types'

const inputStyles = (hasError: boolean) => ({
  width: '100%',
  '& .MuiInputBase-root': {
    color: lightTheme.palette.primary.main,
    fontFamily: 'Open Sans, Sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: '125%',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&::placeholder': {
      fontFamily: 'Open Sans',
      fontSize: '16px',
      fontWeight: 600,
      fontStyle: 'normal',
      lineHeight: '125%',
      color: '#C3C3C3',
      opacity: 1
    }
  },

  '& .MuiOutlinedInput-root': {
    fontFamily: 'Open Sans, Sans-serif',
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: '125%',
    fontSize: '16px',
    transition: 'border 0.4s ease',
    color: '#fff',
    height: '48px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: hasError ? 'error.main' : 'rgba(255, 255, 255, 0.2)',
    '& fieldset': {
      borderColor: hasError ? 'error.main' : ''
    },
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 1.0)'
    }
  },

  '& .MuiInputBase-input::placeholder': {
    fontFamily: 'Open Sans',
    fontSize: '16px',
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: '125%',
    color: '#C3C3C3',
    textTransform: 'uppercase',
    opacity: 1
  }
})

const Form: FC = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language === Language.ENG

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)

  const formik = useFormik<IEmailRequestBody>({
    initialValues: {
      name: '',
      telephone: '',
      mail: '',
      message: ''
    },
    // validationSchema: formValidationSchema,
    validationSchema: formValidationSchema(t),
    onSubmit: async (
      values: IEmailRequestBody,
      { setSubmitting, resetForm }: FormikHelpers<IEmailRequestBody>
    ) => {
      try {
        setIsSubmitting(true)
        const endpoint = '/api/send-email'
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...values
          })
        })

        if (response.ok) {
          localStorage.setItem('userData', JSON.stringify(values))
          resetForm()
          setIsSubmitted(true)
        } else {
          // Если сервер вернул ошибку, считываем текст ошибки и устанавливаем его в состояние
          const errorData = await response.json() // Предполагаем, что сервер возвращает JSON с ошибкой
          setSubmissionError(errorData.message || t('form error text'))
        }
      } catch (error) {
        setSubmissionError(t('form error text'))
        console.error('Error submitting form:', error)
      } finally {
        setIsSubmitting(false)
        setSubmitting(false)
      }
    }
  })

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'flex-end'
        }}
      >
        <Stack
          sx={{
            maxWidth: '684px',
            width: '100%',
            '@media (max-width: 1280px) and (min-width: 993px)': {
              maxWidth: '600px'
            }
          }}
        >
          {isSubmitted ? (
            <Box sx={{}}>
              <SubmittedText />
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              display="flex"
              flexDirection="column"
              gap="15px"
            >
              {/* Name Field */}
              <TextField
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="name"
                name="name"
                type="text"
                placeholder={t('form input name')}
                variant="outlined"
                sx={inputStyles(!!(formik.touched.name && formik.errors.name))}
              />
              {formik.touched.name && formik.errors.name && (
                <Typography
                  color="error.main"
                  fontSize={{ md: '12px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.name}
                </Typography>
              )}

              {/* Email Field */}
              <TextField
                value={formik.values.mail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="mail"
                name="mail"
                type="email"
                placeholder={t('form input email')}
                variant="outlined"
                sx={inputStyles(!!(formik.touched.mail && formik.errors.mail))}
              />
              {formik.touched.mail && formik.errors.mail && (
                <Typography
                  color="error.main"
                  fontSize={{ md: '12px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.mail}
                </Typography>
              )}

              {/* Phone Number Field */}
              <InputMask
                mask="+420 (999) 999-999"
                value={formik.values.telephone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="telephone"
                name="telephone"
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    placeholder={t('form input telephone')}
                    variant="outlined"
                    sx={inputStyles(!!(formik.touched.telephone && formik.errors.telephone))}
                  />
                )}
              </InputMask>
              {formik.touched.telephone && formik.errors.telephone && (
                <Typography
                  color="error.main"
                  fontSize={{ md: '12px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.telephone}
                </Typography>
              )}

              {/* Message Field */}

              <TextField
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="message"
                name="message"
                type="text"
                placeholder={t('form input message')}
                variant="outlined"
                multiline
                rows={4}
                InputLabelProps={{
                  shrink: formik.values.message.length > 0
                }}
                sx={{
                  ...inputStyles(!!(formik.touched.message && formik.errors.message)),
                  '& .MuiInputBase-root': {
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    minHeight: '200px',
                    alignItems: 'flex-start'
                  }
                }}
              />
              {formik.touched.message && formik.errors.message && (
                <Typography
                  color="error.main"
                  fontSize={{ md: '12px', xs: '9px' }}
                  sx={{ mt: '-15px', paddingLeft: '10px' }}
                >
                  {formik.errors.message}
                </Typography>
              )}

              {submissionError && (
                <Typography
                  sx={{
                    fontFamily: 'Open Sans, Sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    fontStyle: 'normal',
                    lineHeight: '120%',
                    color: 'primary.light'
                  }}
                >
                  {submissionError}
                </Typography>
              )}

              <ColoredButton
                type="submit"
                disabled={!formik.isValid || isSubmitting}
                iconWidth="19px"
                iconHeight="19px"
                sx={{
                  maxWidth: '100%',
                  textTransform: 'uppercase',
                  display: 'flex',
                  justifyContent: 'space-between',
                  m: '0 auto',
                  color: isSubmitting || !formik.isValid ? '#C3C3C3!important' : 'primary.light',
                  '@media (max-width: 768px)': {
                    fontSize: '22px',
                    maxWidth: '100%'
                  },
                  '@media (max-width: 320px) ': {
                    gap: isEnglish ? 0 : '115px',
                    height: isEnglish ? '46px' : '68px',
                    textAlign: 'left'
                  }
                }}
              >
                {isSubmitting ? t('form submitting text') : t('form send button')}
              </ColoredButton>
            </Box>
          )}
        </Stack>
      </Box>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Form
