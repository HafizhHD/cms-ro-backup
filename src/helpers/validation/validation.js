import * as yup from 'yup';

export const validationFormLogin = yup.object({
    email: yup.string('Enter your email').required('Email is required').email('Email not valid'),
    password: yup.string('Enter your password').required('Password is required')
})

export const validationFormRegister = yup.object({
    email: yup.string('Enter your email').required('Email is required').email('Email not valid'),
    accountName: yup.string('Enter your name').required('Name is required'),
    cobrandName: yup.string('Enter your co-brand name').required('Co-brand name is required'),
    thumbnail: yup.mixed('Insert your image').required('Image is required'),
    phoneNumber: yup.string('Enter your phone number').required('Phone number is required'),
    address: yup.string('Enter your address').required('Address is required'),
    password: yup.string('Enter your password').required('Password is required'),
    confirmPassword: yup.string('Confirm your password').required('Password is required')
})