const applicantInfo = new URLSearchParams(window.location.search);
console.log(applicantInfo);

const userFirst = applicantInfo.get('first');
const userLast = applicantInfo.get('last');
const userOrdinance = applicantInfo.get('ordinance');
const userDate = applicantInfo.get('date');
const userLocation = applicantInfo.get('location');
const userPhone = applicantInfo.get('phone');
const userEmail = applicantInfo.get('email');

document.getElementById('results').innerHTML = `
<p>Appointment for ${userFirst} ${userLast}</p>
<p>Proxy ${userOrdinance} on ${userDate} in the ${userLocation} Temple</p>
<p>Your Phone: ${userPhone}</p>
<p>Your Email: ${userEmail}</p>
`;