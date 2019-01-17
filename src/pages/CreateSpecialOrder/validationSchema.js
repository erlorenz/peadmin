import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Not a valid email.')
    .required('Email required.'),
  name: yup
    .string()
    .min(4, 'Name needs to be at least 4 characters.')
    .required('Name required.'),
  company: yup.string(),
  description: yup.string().required('Description required.'),
  decimalPrice: yup.number().required('Total price required.'),
  phoneAsNumber: yup
    .number()
    .test('phoneLength', 'Please enter a 10 digit phone number', val =>
      val ? val.toString().length === 10 : true,
    )
    .required('Phone required'),
});
