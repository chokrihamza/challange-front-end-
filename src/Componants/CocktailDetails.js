import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Spinner } from 'reactstrap';

const CocktailDetails = ({ cocktailDetails, loadcocktailDetails }) => {

      return (
            loadcocktailDetails ? (
                  <Spinner color="warning" />
            ) : (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                              <Card style={{ width: "50%" }}>
                                    <CardImg top height="500px" src={cocktailDetails.strDrinkThumb} alt="Card image cap" />
                                    <CardBody>
                                          <CardTitle tag="h5">{cocktailDetails.strDrink}</CardTitle>
                                          <CardText>{cocktailDetails.strInstructions}</CardText>
                                          <CardText> Glass:{cocktailDetails.strGlass}</CardText>
                                          <CardText>{cocktailDetails.strInstructionsDE}</CardText>
                                          <CardText>
                                                <small className="text-muted">Last updated {new Date().toLocaleTimeString()} mins ago</small>
                                          </CardText>
                                          <Button outline color="info"><Link to={{
                                                pathname: "/cocktail/cocktailDetails/ingredient",
                                                state: {
                                                      strIngredient1: cocktailDetails.strIngredient1,
                                                      strIngredient2: cocktailDetails.strIngredient2,
                                                      strIngredient3: cocktailDetails.strIngredient3,
                                                      strIngredient4: cocktailDetails.strIngredient4,
                                                      strIngredient5: cocktailDetails.strIngredient5,
                                                      strIngredient6: cocktailDetails.strIngredient6,
                                                      strIngredient7: cocktailDetails.strIngredient7,
                                                      strIngredient8: cocktailDetails.strIngredient8,
                                                      strIngredient9: cocktailDetails.strIngredient9,
                                                      strIngredient10: cocktailDetails.strIngredient10,
                                                      strIngredient11: cocktailDetails.strIngredient11,
                                                      strIngredient12: cocktailDetails.strIngredient12,
                                                      strIngredient13: cocktailDetails.strIngredient13,
                                                      strIngredient14: cocktailDetails.strIngredient14,
                                                      strIngredient15: cocktailDetails.strIngredient15,

                                                }
                                          }}>Show Ingredient</Link></Button>
                                    </CardBody>
                              </Card>


                        </div>

                  ));
}

export default CocktailDetails;

