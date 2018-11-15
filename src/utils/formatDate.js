import format from 'date-fns/format';

export default isoDate => {
  if (isoDate) return format(new Date(isoDate), 'MM/DD/YYYY h:mm a');

  return '---';
};
