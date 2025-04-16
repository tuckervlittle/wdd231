const applicantInfo = new URLSearchParams(window.location.search);
console.log(applicantInfo);

const userFirst = applicantInfo.get('first');
const userLast = applicantInfo.get('last');
const userEmail = applicantInfo.get('email');
const userPhone = applicantInfo.get('phone');
const experience = applicantInfo.get('description');
const subDate = applicantInfo.get('hiddendate');

const thanks = document.getElementById('thanks');
thanks.classList.add("card")

thanks.innerHTML = `
<h2>${userFirst} ${userLast} - We have received your request for membership</h2>
<p><b>Email:</b> ${userEmail}</p>
<p><b>Phone:</b> ${displayPhone(userPhone)}</p>
${displayExp(experience)}
<p><b>Application Subbmitted:</b> ${subDate}</p>
<p>🤙You will hear back from us within 2 business days🤙</p>
`;

function displayTitle(title) {
    if (title != "") {
        return ` - ${title}`
    }
    else {
        return ``
    }
}
function displayPhone(phone) {
    if (phone.length == 11) {
        return `+${phone[0]} (${phone[1]}${phone[2]}${phone[3]}) ${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
    }
    else if (phone.length == 12) {
        return `+${phone[0]}${phone[1]} (${phone[2]}${phone[3]}${phone[4]}) ${phone[5]}${phone[6]}${phone[7]}-${phone[8]}${phone[9]}${phone[10]}${phone[11]}`
    }
    else  if (phone.length == 10) {
        return `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}-${phone[6]}${phone[7]}${phone[8]}${phone[9]}`
    }
    else {
        return phone
    }
};
function displayExp(experience) {
    if (experience == '' || experience == null) {
        return `<p>No experience or certifications provided.</p>`
    }
    else {
        return `<p><b>Experience/Certifications:</b> ${experience}</p>`
    }
};