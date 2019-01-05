import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Not a valid email.')
    .required('Email required.'),
  password: yup
    .string()
    .min(4, 'Password needs to be more than 6 characters.')
    .required('Password required.'),
});
