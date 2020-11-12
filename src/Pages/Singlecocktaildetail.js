import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import CocktailDetails from '../Componants/CocktailDetails';

function Singlecocktaildetail(props) {

      const [cocktailDetails, setcocktailDetails] = useState({});
      const [loadcocktailDetails, setLoadcocktailDetails] = useState(true);

      const getCocktailById = () => {

            const { id } = props.match.params;
            Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                  .then((res) => {
                        setcocktailDetails(res.data.drinks[0])
                        setLoadcocktailDetails(false);
                  })
                  .catch((err) => console.log(err));
      };
      useEffect(() => {
            getCocktailById()

      }, []);
      return (
            <div>
                  <CocktailDetails cocktailDetails={cocktailDetails} loadcocktailDetails={loadcocktailDetails} />
            </div>
      )
}

export default Singlecocktaildetail
