const applicantInfo = new URLSearchParams(window.location.search);
console.log(applicantInfo);

const userFirst = applicantInfo.get('first');
const userLast = applicantInfo.get('last');
const userTitle = applicantInfo.get('title');
const userEmail = applicantInfo.get('email');
const userPhone = applicantInfo.get('phone');
const compName = applicantInfo.get('organization')
const companyDesc = applicantInfo.get('description');
const userLevel = applicantInfo.get('memberLevel');
const subDate = applicantInfo.get('hiddendate');

document.getElementById('thanks').innerHTML = `
<h2>${userFirst} ${userLast}${displayTitle(userTitle)} - ${compName}</h2>
<p><b>Email:</b> ${userEmail}</p>
<p><b>Phone:</b> ${displayPhone(userPhone)}</p>
${displayCompDesc(companyDesc)}
<p><b>Membership Level Applied for:</b> ${userLevel.toUpperCase()}</p>
<p><b>Application Subbmitted:</b> ${subDate}</p>
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
function displayCompDesc(desc) {
    if (desc == '') {
        return `<p>No business description provided.</p>`
    }
    else {
        return `<p><b>Business Description:</b> ${desc}</p>`
    }
};