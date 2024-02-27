import React from 'react';
import { useState , useEffect } from 'react';

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Cocktail = () => {
    const [drinksData , setDrinksData] = useState([]);
    const [searchTerm , setSearchTerm] = useState("");
    const [loading , setLoading] = useState(false);
    const [isError , setIsError ] = useState({status:false , msg:''});

    // function to fetch the drinks data
    const fetchDrink = async(apiURL) => {
        setLoading(true);
        setIsError({status:false , msg:''});
        try {
           
            const response = await fetch(apiURL);
            const {drinks} = await response.json();
            setDrinksData(drinks)
            setLoading(false);
            setIsError({status:false , msg:''})
            if(!drinks){
                throw new Error("Data not Found");
            }
        } catch (error) {
            console.log(error)
            setIsError({status:true , msg:error.message || 'something went wrong -- try different drink'})
            setLoading(false);
        }
      
    }

    // useEffect hook for change in input

    useEffect(()=>{
        const correctUrl = `${URL}${searchTerm}`
        fetchDrink(correctUrl);

    } , [searchTerm])

  return (
    <div>
      {/* <h3>Drinks : {drinksData.length}</h3> */}
      <form>
        <input type='text' name='search' id='search' placeholder='Find your drink' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
      </form>
      <hr/>
      {
        loading && !isError?.status && <h1>Loading..........</h1>
      }
      {
        isError.status && <h3 style={{color : 'red'}}>{isError.msg}</h3>
      }
     {
        !loading && !isError?.status && <ul className='cocktail-data'>
        {
            drinksData.map((eachDrink) => {
                const { idDrink , strDrink , strDrinkThumb } = eachDrink;
                return<li key={idDrink}>
                    <div>
                        <img src={strDrinkThumb} alt={strDrink} />
                    </div>
                    <div className='text'>
                        <h3>{strDrink}</h3>
                    </div>
                </li>
            })
        }
      </ul>
     }

    </div>
  )
}

export default Cocktail
