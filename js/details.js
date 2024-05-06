import { Display } from "./ui.js";

export class GameDetails{
    constructor(id){
        this.Display = new Display();
        this.getGamesDetails(id);
    }


    async getGamesDetails(id){
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '77fb460cbamsha3060e9c1e56869p13aa71jsnbb7929974d71',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    
        let res = await api.json()
        this.Display.displayGameDetails(res)
        loading.classList.add("d-none");
    }

}