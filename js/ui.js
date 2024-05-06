
export class Display {
    displayGames(data) {
        let card = ``;
        for (let i = 0; i < data.length; i++) {
            card += ` <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div id="card" class="card bg-transparent w-100 h-100" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data[i].id}">
                    <div class="card-header mb-2 border-bottom-0">
                        <div class="image mb-2">
                            <img src="${data[i].thumbnail}" class="w-100"  alt="${data[i].title}">                                    
                        </div>
                        <div class="header-text  d-flex justify-content-between align-items-center">
                            <h5 class="card-title text-white h6">${data[i].title}</h5>
                            <p class="px-2 py-1 text-bg-primary rounded-2 mb-0">Free</p>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <p class="card-text text-center opacity-50 small">${data[i].short_description.split(" ", 8)}</p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="badge rounded-5 m-0">${data[i].genre}</p>
                            <p class="badge rounded-5 m-0">${data[i].platform}</p>
                        </div>
                    </div>
                </div>
            </div>`
        }

        document.querySelector('#cardsRow').innerHTML = card;
    }



    displayGameDetails(data) {
        let details = `<div class="modal-body p-0 d-flex flex-column flex-md-row">
            <div class="col-md-4 modal-body-img">
                <img src="${data.thumbnail}" class="w-100" alt="${data.title}">
            </div>
            <div class="col-md-8 modal-body-text">
                <h2 class="w-fit">Title:${data.title}</h2>
                <p class="w-fit">Category: <span class="badge text-bg-info">${data.genre}</span></p>
                <p class="w-fit">Platform: <span class="badge text-bg-info">${data.platform}</span></p>
                <p class="w-fit">Status: <span class="badge text-bg-info">${data.status}</span></p>
                <p class="small pe-5">${data.description}</p>
                <button" class="btn btn-outline-warning">
                <a class="text-decoration-none text-white" href="${data.game_url}" target="_blank" ">Show Game</a>
                </button>
            </div>
            </div>`
        document.getElementById('details-section').innerHTML = details
    }


}

