import { courses } from "/data/courses.mjs";
// console.log(courses)

const courseDisplay = document.getElementById("courses");
const courseDetials = document.getElementById("course-details");

showCourses(courses);

document.getElementById("all").addEventListener('click', () => {
    showCourses(courses)
});

document.getElementById("wdd").addEventListener('click', () => {
    showCourses(courses.filter((course) => course.subject === 'WDD'));
});

document.getElementById("cse").addEventListener('click', () => {
    showCourses(courses.filter((course) => course.subject === 'CSE'));
});


function showCourses(filter) {
    
    courseDisplay.innerHTML = '';

    filter.forEach(course => {
        const div = document.createElement("div");
        div.classList.add(course.completed ? "completed" : "need");
        div.textContent = `${course.subject} ${course.number} ${course.completed ? "🗹" : ""}`;
        div.addEventListener("click", () => {
            displayCourseDetails(course);
        });
        courseDisplay.appendChild(div);
    });

    let totalCredits = filter.reduce((accumulator, course) => accumulator + course.credits, 0);
    document.getElementById("credits").innerHTML = `Total number of credits for the current selection: ${totalCredits}`
};
function displayCourseDetails(course) {
    courseDetials.innerHTML = '';
    courseDetials.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p>${course.credits} credits</p>
    <p>Certificate: ${course.certificate}</p>
    <p>${course.description}</p>
    <p>Technology: ${course.technology}</p>
    `;
    courseDetials.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        courseDetials.classList.add("closing");

        setTimeout(() => {
            courseDetials.close();
            courseDetials.classList.remove("closing");
        }, 740);
    });
};