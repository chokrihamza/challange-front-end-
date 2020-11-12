import React from 'react';
import { Spinner } from 'reactstrap';
import Cocktail from './Cocktail';
import Alert from '@material-ui/lab/Alert';

function CocktailList({ cocktail, loadcocktail }) {


      return (
            <>

                  <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: "wrap",

                  }}>

                        {loadcocktail ? (
                              <Spinner color="success" />
                        ) : cocktail !== null ? cocktail.map(

                              (drink, i) => (<Cocktail key={i} cocktail={drink} />


                              )

                        ) : (<Alert severity="warning">This is a warning alert — Not found!</Alert>)}



                  </div></>
      )
}

export default CocktailList
