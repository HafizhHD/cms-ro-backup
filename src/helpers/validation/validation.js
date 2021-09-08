import * as yup from 'yup';

const PhoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const validationFormLogin = yup.object({
    email: yup.string('Enter your email').required('Email is required').email('Email not valid'),
    password: yup.string('Enter your password').required('Password is required')
})

export const validationFormRegister = yup.object({
    email: yup.string('Enter your email').required('Email is required').email('Email not valid'),
    accountName: yup.string('Enter your name').required('Name is required'),
    cobrandName: yup.string('Enter your brand name').required('Brand name is required'),
    thumbnail: yup.mixed('Insert your image, 2 MB max').required('Image is required')
        .test(
            'imageType', "Incorrect file extension, must be .jpg, .jpeg, or .png",
            (img) =>
                img && ["image/png", "image/jpg", "image/jpeg"].includes(img.type)
        )
        .test(
            'imageSize', "Image file size too large, max image file size is 2 MB",
            (img) => {
                if(img) {
                    return img.size <= 2097152;
                }
                else {
                    return true;
                }
            }
        ),
    phoneNumber: yup.string('Enter your phone number').required('Phone number is required').matches(PhoneRegex, 'Invalid phone number format'),
    address: yup.string('Enter your address').required('Address is required'),
    password: yup.string('Enter your password').required('Password is required').min(8, 'Password should be 8 characters or more'),
    confirmPassword: yup.string('Confirm your password').required('Password is required')
        .when('password', (password, schema) => {
            return schema.test({
                test: confirmPassword => password && confirmPassword === password,
                message: "Password doesn't match"
            })
        })
})

export const validationProgram = yup.object({
    programName: yup.string('Enter your program title').required('Program title is required'),
    programDescription: yup.string('Enter the program description').required('Program description is required'),
    programThumbnail: yup.mixed('Insert your image, 2 MB max').required('Image is required')
        .test(
            'imageType', "Incorrect file extension, must be .jpg, .jpeg, or .png",
            (img) =>
                img && ["image/png", "image/jpg", "image/jpeg"].includes(img.type)
        )
        .test(
            'imageSize', "Image file size too large, max image file size is 2 MB",
            (img) => {
                if(img) {
                    return img.size <= 2097152;
                }
                else {
                    return true;
                }
            }
        ),
    startDate: yup.date('Insert start date').required('Date is required')
})

export const validationContent = yup.object({
    contentName: yup.string('Enter your content title').required('Content title is required'),
    contentDescription: yup.string('Enter the content description').required('Content description is required'),
    contents: yup.string('Enter the content description').required('Content description is required'),
    contentSource: yup.string('Enter the content source').required('Content source is required'),
    contentThumbnail: yup.mixed('Insert your image, 2 MB max').required('Image is required')
        .test(
            'imageType', "Incorrect file extension, must be .jpg, .jpeg, or .png",
            (img) =>
                img && ["image/png", "image/jpg", "image/jpeg"].includes(img.type)
        )
        .test(
            'imageSize', "Image file size too large, max image file size is 2 MB",
            (img) => {
                if(img) {
                    return img.size <= 2097152;
                }
                else {
                    return true;
                }
            }
        ),
    startDate: yup.date('Insert start date').required('Date is required')
})