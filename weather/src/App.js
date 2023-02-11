import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Coin from './components/Coin';
function App() {
    const [listofcoins, setlistofcoins] = useState([]);
    const [searchWord,setsearchWord] = useState("");
    useEffect(()=> {
        Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR').then(
            (response) => {
                setlistofcoins(response.data.coins);
        })

    },[])
    const filterCoins = listofcoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    })
    return (
        <div className="App">
            <div className="Header">
                <input type = "text" placeholder = "Wanna search ?" onChange={(event) => setsearchWord(event.target.value)}/>
            </div>
            <div className="Display>">
                {filterCoins.map((coin => {
                    return <Coin name ={coin.name}
                                  icon ={coin.icon}
                                  price ={coin.price}
                                  symbol={coin.symbol}/>
                }))}
            </div>
        </div>
    );
}
export default App;
