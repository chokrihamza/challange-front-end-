import React from 'react'
import MethodOfPreparation from '../Componants/MethodOfPreparation';

function Ingredient(props) {

      let ingredients = props.location.state

      let Tableofingredient = []

      for (let ingredient in ingredients) {
            if (ingredients[ingredient] !== null)
                  Tableofingredient.push(ingredients[ingredient]);
      }

      return (
            <MethodOfPreparation Tableofingredient={Tableofingredient} />
      )
}

export default Ingredient
