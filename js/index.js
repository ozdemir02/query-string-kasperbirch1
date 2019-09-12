document.addEventListener("DOMContentLoaded", () => {

    let mainElement = document.querySelector(".card-container");

    const destinationer = fetch('destinationer.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (resultat) {
            resultat.destinationer.forEach(destination => {
                mainElement.innerHTML += `
                <div class="card">
                    <img src="images/${destination.images}" alt="" class="card__img">
                    <div class="card__info">
                        <i class="active-pink card__info-icon fas fa-heart"></i>
                        <a href="infopage.html?destination_id=${destination.id}" class="card__info-link">More..</a>
                    </div>
                </div>`;
            });
        });
});

