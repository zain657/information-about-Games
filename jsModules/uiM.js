export class Ui{
    displayCard(arr){
        let cards=``;
        for(let i=0;i<arr.length;i++){
            cards+=`
            <div class="col">
                            <div id='card' data-id="${arr[i].id}" class="card h-100 bg-transparent">
                                <div class=" card-body">
                                    <figure class="position-relative">
                                        <img class="card-img-top object-fit-cover h-100"
                                            src="${arr[i].thumbnail}" alt="#">
                                    </figure>
                                    <figcaption>
                                        <div class="hstack justify-content-between">
                                            <h3 class="h6 small text-white">${arr[i].title}</h3>
                                            <span class="bb badge text-bg-primary p-2">Free</span>
                                        </div>
                                        <p class="card-text small text-center opacity-50 text-secondary">
                                            ${arr[i].short_description.split(" ", 8)}
                                        </p>
                                    </figcaption>
                                </div>
                                <footer class="card-footer small hstack justify-content-between">
                                    <span class="badge badge-color">${arr[i].genre}</span>
                                    <span class="badge badge-color">${arr[i].platform}</span>
                                </footer>
                            </div>
                        </div>
            `;
        }
        document.getElementById('row').innerHTML=cards;
    }

    displayDetalis(arr){
        let detalis=`
                <div class="col-md-4">
                    <img src="${arr.thumbnail}" class="w-100" alt="image details">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${arr.title}</h3>
                    <p>Category: <span class="badge text-bg-info"> ${arr.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${arr.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${arr.status}</span> </p>
                    <p class="small">${arr.description}</p>
                    <a class="bb shBtn btn btn-outline-warning" target="_blank"
                        href="${arr.game_url}">Show Game</a>
                </div>`
        document.getElementById("detail").innerHTML = detalis;
    }

    loaderHide(){
        document.getElementById('load').classList.add('d-none')
    }
    loaderUnHide(){
        document.getElementById('load').classList.remove('d-none')
    }
}