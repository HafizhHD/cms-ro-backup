import * as yup from 'yup';

export const validationFormLogin = yup.object({
    email: yup.string('Enter your email').required('Email is required').email('Email not valid'),
    password: yup.string('Enter your password').required('Password is required')
})