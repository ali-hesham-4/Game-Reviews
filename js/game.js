import { GameDetails } from "./details.js";
import { Display } from "./ui.js";


export class Game{
    constructor () {
        this.getGames("mmorpg");

        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                this.getGames(e.target.dataset.category);
            });
        });
        this.Display = new Display();
    }
    async getGames(category){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '77fb460cbamsha3060e9c1e56869p13aa71jsnbb7929974d71',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}` , options);
        let res = await api.json()
        this.Display.displayGames(res);
        this.startEvent();
        loading.classList.add("d-none");
    }

        startEvent() {
                document.querySelectorAll(".card").forEach((item) => {
                item.addEventListener("click", () => {
                    const id = item.dataset.id
                    this.showDetails(id);
                });
                });
            }
        
            showDetails(idGame) {
                let gameDetails = new GameDetails(idGame);
        }
}   