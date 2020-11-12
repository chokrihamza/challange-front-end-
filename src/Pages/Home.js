import React from 'react'
import CocktailList from '../Componants/CocktailList'

function Home({ cocktail, loadcocktail }) {

      return (

            <div>
                  <CocktailList cocktail={cocktail} loadcocktail={loadcocktail} />
            </div>
      )
}

export default Home
