import { Ui } from './uiM.js';

export class Details {
    constructor(id) {
        this.ui = new Ui();
        document.getElementById("btnClose").addEventListener("click", () => {
            document.getElementById("s1").classList.remove("d-none");
            document.getElementById("s2").classList.add("d-none");
        });
        this.getDetailsApi(id);
    }

    async getDetailsApi(id) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
            this.ui.displayDetalis(result);
        } catch (error) {
            console.error(error);
        }
        finally{
            this.ui.loaderHide();
        }
    }
}