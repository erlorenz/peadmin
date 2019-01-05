import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Not a valid email.')
    .required('Email required.'),
  name: yup
    .string()
    .min(4, 'Password needs to be at least 4 characters.')
    .required('Password required.'),
  company: yup.string(),
  description: yup.string().required('Description required.'),
  phone: yup
    .string()
    .min(10, 'Please enter a 10 digit phone number.')
    .max(10, 'Please enter a 10 digit phone number.')
    .required('Phone required'),
});
