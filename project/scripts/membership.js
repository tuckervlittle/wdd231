
const perks = document.getElementById("perks");
const modal = document.getElementById("modal");


perks.addEventListener("click", () => {
    modal.innerHTML = `
    <button id="closeModal">X</button>
    <h3>Benefits:</h3>
    <ul>
    <li>25% off Air Fills</li>
    <li>10% Off Equipment</li>
    <li>Free T-Shirt Anually</li>
    <li>Free Key Float with Membership</li>
    </ul>
    `;
    modal.showModal();
    
    document.getElementById("closeModal").addEventListener("click", () => {
        modal.classList.add("closing");
        
        setTimeout(() => {
            modal.close();
            modal.classList.remove("closing");
        }, 740);
    });
});

document.getElementById('submitdate').value = new Date().toLocaleString();