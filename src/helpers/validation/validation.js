import * as yup from 'yup';

const PhoneRegex = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const UserRegex = /^\S*$/;

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

export const validationFormEdit = yup.object({
    email: yup.string('Enter your email').required('Email is required').email('Email not valid'),
    cobrandName: yup.string('Enter your brand name').required('Brand name is required'),
    thumbnail: yup.mixed('Insert your image, 2 MB max')
        .test(
            'imageType', "Incorrect file extension, must be .jpg, .jpeg, or .png",
            (img) =>
                (img && ["image/png", "image/jpg", "image/jpeg"].includes(img.type)) || (!img)
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
        //buat nambahin misal upload background. apakah akan masuk kesini?
        
    phoneNumber: yup.string('Enter your phone number').required('Phone number is required').matches(PhoneRegex, 'Invalid phone number format'),
    address: yup.string('Enter your address').required('Address is required'),
    password: yup.string('Enter your password').min(8, 'Password should be 8 characters or more'),
    confirmPassword: yup.string('Confirm your password')
        .when('password', (password, schema) => {
            return schema.test({
                test: confirmPassword => (password && confirmPassword === password) || !password,
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
    startDate: yup.date('Insert start date').required('Date is required'),
    endDate: yup.date('Insert end date').required('Date is required'),
    category: yup.string(),
    targetAudiance: yup.array().min(1, 'Pilih minimal 1'),
    contentPrograms: yup.array().min(1).of(
        yup.object({
            namaTahapan: yup.string().required('Nama Tahapan harus diisi'),
            contentName: yup.string().required('Judul Tahapan harus diisi'),
            contents: yup.string().required('Isi Tahapan harus diisi'),
            startDate: yup.date('Insert start date').required('Date is required'),
            endDate: yup.date('Insert end date').required('Date is required'),
            answerKey: yup.string().when('category', {
                is: 'Ujian',
                then: yup.string().required('Kunci Jawaban harus diisi'),
                otherwise: yup.string()
            })
        })
    )
})

export const validationProgramEdit = yup.object({
    programName: yup.string('Enter your program title').required('Program title is required'),
    programDescription: yup.string('Enter the program description').required('Program description is required'),
    startDate: yup.date('Insert start date').required('Date is required')
})

export const validationContent = yup.object({
    contentName: yup.string('Enter your content title').required('Content title is required'),
    contentDescription: yup.string('Enter the content description').required('Content description is required'),
    contents: yup.string('Enter the content description').required('Content is required'),
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
    startDate: yup.date('Insert start date').required('Date is required'),
    endDate: yup.date('Insert end date').required('Date is required'),
    isActive: yup.boolean(),
    topics: yup.array().min(1),
    targetAudience: yup.array().min(1)
})

export const validationContentEdit = yup.object({
    contentName: yup.string('Enter your content title').required('Content title is required'),
    contentDescription: yup.string('Enter the content description').required('Content description is required'),
    contents: yup.string('Enter the content description').required('Content is required'),
    contentSource: yup.string('Enter the content source').required('Content source is required'),
    startDate: yup.date('Insert start date').required('Date is required')
});

export const validationUserEdit = yup.object({
    nameUser: yup.string('Enter your content title').required('User name is required'),
    emailUser: yup.string('Enter the content description').required('Email is required').email('Email not valid'),
    birdDate: yup.date('Insert start date').required('Date is required')
})

export const validationNotification = yup.object({
    destination: yup.array().min(1),
    messageSubject: yup.string('Enter the message subject').required('Message Subject is required'),
    messageContent: yup.string('Enter the message content').required('Message Content is required'),
    scheduleTime: yup.date('Insert start date').required('Date is required'),
    mediaType: yup.string('Enter the media type').required('Media type is required'),
    category: yup.string('Enter the category').required('Category is required')
})

export const validationAudience = yup.object({
    audianceName: yup.string('Enter your audience name').required('Audience Name is required')
})

export const validationNotifCategory = yup.object({
    category: yup.string('Enter category name').required('Category is required'),
    description: yup.string('Enter description').required('Description is required')
})

export const validationProgCategory = yup.object({
    category: yup.string('Enter category name').required('Category is required'),
    description: yup.string('Enter description').required('Description is required')
})

export const validationStaff = yup.object({
    emailUser: yup.string('Enter your email').required('Email is required').email('Email not valid'),
    userName: yup.string('Enter your name').required('Name is required').matches(UserRegex, 'Invalid username format'),
    phone: yup.string('Enter your phone number').required('Phone number is required').matches(PhoneRegex, 'Invalid phone number format'),
    password: yup.string('Enter your password').required('Password is required').min(8, 'Password should be 8 characters or more')
})

export const validationContentTopic = yup.object({
    topicName: yup.string('Enter topic name').required('Topic Name is required')
})

export const validationScreenTime = yup.object({
    controlParameterName: yup.string('Enter category name').required('Category is required'),
    controlParameterValue: yup.number().required('Number is required')
})