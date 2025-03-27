import { levels } from "../data/join.mjs";

const buttons = document.querySelectorAll("#levels div button");
const levelInfo = document.getElementById("level-modal");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const selected = levels.find(i => i.id === button.id);
        if (selected) {
            levelInfo.innerHTML = `
            <button id="closeModal">X</button>
            <h2>${selected.level} Membership</h2>
            <h3>Benefits:</h3>
            <ul>
            ${selected.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <p><strong>Cost:</strong> ${selected.cost}</p>
            `;
            levelInfo.showModal();
            
            document.getElementById("closeModal").addEventListener("click", () => {
                levelInfo.classList.add("closing");
                
                setTimeout(() => {
                    levelInfo.close();
                    levelInfo.classList.remove("closing");
                }, 740);
            });
        }
    });
});

document.getElementById('submitdate').value = new Date().toLocaleString();
