import format from 'date-fns/format';

const formatDate = isoDate => {
  if (isoDate) return format(new Date(isoDate), 'MM/DD/YYYY h:mm a');

  return '---';
};

export default formatDate;
