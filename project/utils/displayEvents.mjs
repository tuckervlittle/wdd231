export default function displayEvents(filter, container, header) {

    filter.forEach(event => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("event")
        const title = document.createElement(header)
        title.classList.add("title")
        const image = document.createElement("img")
        image.classList.add("image")
        const date = document.createElement("p")
        date.classList.add("date")
        const cost = document.createElement("ul")
        cost.classList.add("cost")
        const requirements =document.createElement("ul")
        requirements.classList.add("requirements")
        const desc = document.createElement("p")
        desc.classList.add("desc")

        title.innerHTML = `${event.name}`

        image.src = `images/${event.image}.webp`
        image.alt = event.name
        image.loading = "lazy"
        image.width = 300
        image.height = 200

        date.innerHTML = `${event.date}`

        if (event.cost.members !== 0 && event.cost.non_members !== 0) {
            cost.innerHTML = `
            <b>Cost: </b>
            <li>💵Members: $${event.cost.members}</li>
            <li>💵Non-Members: $${event.cost.non_members}`
        }
        else if (event.cost.members === 0 && event.cost.non_members !== 0) {
            cost.innerHTML = `
            <b>Cost: </b>
            <li>Members: Free</li>
            <li>💵Non-Members: $${event.cost.non_members}`
        }
        else {
            cost.innerHTML = `
            <b>Cost: </b>
            <li>Free to all</li>`
        }

        requirements.innerHTML = `<b>Required:</b>` + event.requirements.map(requirement => `<li>🤙${requirement}</li>`).join("");

        desc.innerHTML = event.description

        card.appendChild(title)
        card.appendChild(image)
        card.appendChild(date)
        card.appendChild(cost)
        card.appendChild(requirements)
        card.appendChild(desc)
        container.appendChild(card)
    });
}