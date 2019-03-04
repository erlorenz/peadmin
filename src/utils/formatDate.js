import { DateTime } from 'luxon';

function formatDate(timestamp) {
  if (!timestamp) return '--';
  try {
    const pacificTime = DateTime.fromMillis(+timestamp).setZone(
      'America/Los_Angeles',
    );

    return pacificTime.toFormat('EEEE M/d t');
  } catch (e) {
    console.log(e.message);
    return '--';
  }
}

export default formatDate;
