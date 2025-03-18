const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastmodified');

document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.getElementById('currentYear').textContent = year;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleString();
});