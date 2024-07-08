import { Details } from './deatilsM.js';
import { Ui } from './uiM.js';

export class Games {
    constructor() {
        this.ui = new Ui();
        this.details = new Details();
        this.getGames("mmorpg");


        document.querySelectorAll(".navbar-nav a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".navbar-nav .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.innerHTML);
            });
        });
    }

    async getGames(category) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2f5e5ab8a7mshdd920f262189d9ap15f367jsn53015b899b17',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        try {
            this.ui.loaderUnHide();
            const response = await fetch(url, options);
            const result = await response.json();
            this.ui.displayCard(result);
            this.knowId();
        } 
        catch (error) {
            console.error(error);
        }
        finally{
            this.ui.loaderHide();
        }
    }
    knowId() {
        document.querySelectorAll('.card').forEach(ele => {
            ele.addEventListener('click', () => {
                this.showDetails(ele.dataset.id)
            })
        })
    }
    showDetails(id) {
        this.details.getDetailsApi(id);
        document.getElementById("s1").classList.add("d-none");
        document.getElementById("s2").classList.remove("d-none");
    }
}