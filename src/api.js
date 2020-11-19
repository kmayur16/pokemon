import  './api.css'
import { useState} from "react";

const Api =() =>{
    const [pokemon,setPokemon] = useState("");
    const [data,setData] = useState([]);

    async function fetchPokemonURL() {
        const array = [];
        try {
            const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const result=await fetch(url).then(response=>response.json()).then(datta=>datta);
            console.log("b",result);
            array.push(result);
            setData(array);
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange= (e)=>{
        setPokemon(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetchPokemonURL();
    }
    return (
        <div className="app">
            <form onSubmit= {handleSubmit}>
                <label>
                    <input type="text" placeholder="enter pokemon" onChange={handleChange}></input>
                </label>
                <button type="submit" className="btn" onClick={handleSubmit}>search</button>
                
            </form>
            {data.map((d)=>{
                return(
                    <div className="container">
                        <img src={d.sprites["front_default"]} className="img" alt=""></img>
                        <div className="divTable">
                        <div>
                        <div className="Table">
                            <div div className="Cell">Type</div>
                            <div className="Cell">{d.types[0].type.name}</div>
                        </div>
                        <div className="Table">
                            <div div className="Cell">Height</div>
                            <div className="Cell">{d.height}"</div>
                        </div>
                        <div className="Table">
                            <div div className="Cell">Weight</div>
                            <div className="Cell">{d.weight}lbs</div>
                        </div>
                        <div className="Table">
                            <div div className="Cell">Moves</div>
                            <div className="Cell">{d.moves[0].move.name}</div>
                        </div>
                        <div className="Table">
                            <div div className="Cell">Ability</div>
                            <div className="Cell">{d.abilities[0].ability.name}</div>
                        </div>
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
    );
}
export default Api;

