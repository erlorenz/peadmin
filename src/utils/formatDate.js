import format from 'date-fns/format';

export default isoDate => format(new Date(isoDate), 'MM/DD/YYYY h:mm a');
