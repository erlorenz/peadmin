import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Not a valid email.')
    .required('Email required.'),
  password: yup
    .string()
    .min(4, 'Password needs to be at least 4 characters.')
    .required('Password required.'),
});
