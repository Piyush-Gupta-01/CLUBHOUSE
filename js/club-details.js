document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const clubKey = params.get("club");
    const club = clubsData[clubKey];

    if (!club) {
        document.getElementById("club-details-container").innerHTML =
            "<h1>Club not found.</h1>";
        return;
    }

    const detailsHTML = `
        <h1 class="display-5 mb-4">${club.name}</h1>
        <div class="club-details-container mb-4">
            <img class="club-image" src="${club.image}" alt="${club.name}">
            <p>${club.description}</p>
        </div>
        <h4>Mission</h4>
        <p>${club.mission}</p>
        <h4>Vision</h4>
        <p>${club.vision}</p>
        <h4>Notifications</h4>
        <ul>${club.notifications.map(n => `<li>${n}</li>`).join("")}</ul>
        <h4>Ambassadors</h4>
        <div class="row">
            ${club.ambassadors.map(a => `
                <div class="col-md-4 text-center">
                    <img class="ambassador-image rounded-circle mb-3" src="${a.image}" alt="${a.name}">
                    <h5>${a.name}</h5>
                    <p>${a.role}</p>
                </div>
            `).join("")}
        </div>
    `;
    document.getElementById("club-details-container").innerHTML = detailsHTML;
});
