document.addEventListener('DOMContentLoaded', () => {


    const cards = document.getElementById('members');
    
    const path = './data/members.json';
    
    async function getMembers() {
          const response = await fetch(path);
          const data = await response.json();
          console.log(data.members);
          displayMembers(data.members);
    }
    getMembers();
    
    const displayMembers = (allMembers) => {
      allMembers.forEach((member) => {
        const name = document.createElement('h2')
        name.textContent= member.name;
        const address = document.createElement('p')
        address.textContent = member.address
        const phone = document.createElement('p')
        phone.textContent = member.phone
        const url = document.createElement('p')
        url.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`
        const image = document.createElement('img')
        image.src= member.image
        image.setAttribute('loading', 'lazy')
        image.setAttribute('width', '300')
        image.setAttribute('height', '200')
        image.setAttribute('alt', `${member.name}`)
        const membership = document.createElement('p')
        if (member.membership == 2) {
        membership.textContent="Membership Level: Silver"
        }
        else if (member.membership == 3) {
            membership.textContent="Membership Level: Gold"
        }
        else {
            membership.textContent="Membership Level: Not for Profit"
        }
        
        const section = document.createElement('section')
        const div = document.createElement('div')
        section.classList.add('card')
        section.appendChild(image)
        div.appendChild(name)
        div.appendChild(address)
        div.appendChild(phone)
        div.appendChild(url)
        div.appendChild(membership)
        section.appendChild(div)
        cards.appendChild(section)
      });
    }
    
    const makeGrid = document.getElementById('grid')
    const makeList = document.getElementById('list')
    makeGrid.addEventListener('click',() => {
      makeGrid.className="active"
      makeList.className=""
      cards.className='grid'
    })
    makeList.addEventListener('click',() => {
      makeList.className="active"
      makeGrid.className=""
      cards.className='list'
    })
    
    })