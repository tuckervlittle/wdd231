const year = document.getElementById('currentYear');
const lastModified = document.getElementById('lastModified');

document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.getElementById('currentYear').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleString();
});