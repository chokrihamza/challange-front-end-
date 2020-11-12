import { Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './Componants/Footer';
import NavBar from './Componants/Navbar';
import Aboutus from './Pages/Aboutus';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Axios from 'axios';
import Singlecocktaildetail from './Pages/Singlecocktaildetail';
import Ingredient from './Pages/Ingredient';
import { Container } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import { GpsFixed } from '@material-ui/icons';
function App() {
  const [cocktailSearch, setSearchCocktail] = useState("");
  const [cocktail, setCocktail] = useState([]);
  const [loadcocktail, setLoadCocktail] = useState(true);
  //fin search cocktails 
  const getCocktails = event => {
    setSearchCocktail(event.target.value)
  }

  useEffect(() => {

    Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearch}`)
      .then((res) => {

        setCocktail(res.data.drinks)
        setLoadCocktail(false)
      })
      .catch((err) => console.log(err));

  }, [cocktailSearch])


  return (
    <div className="App" >
      <NavBar />
      <FormGroup className="FormGroup">
        <Label >Search Any Cocktails cocktails </Label>
        <Input type="text" name="cocktail" placeholder="Enter your Cocktail" value={cocktailSearch} onChange={getCocktails} />
      </FormGroup>
      <Container style={{ marginTop: "9%" }}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home cocktail={cocktail} loadcocktail={loadcocktail} />}
          />
          <Route path="/cocktail/cocktailDetails/ingredient" component={Ingredient} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/cocktail/:id" component={Singlecocktaildetail} />

          <Route path="/*" component={Error} />
        </Switch>

      </Container>
      <Footer />
    </div>

  );
}

export default App;
