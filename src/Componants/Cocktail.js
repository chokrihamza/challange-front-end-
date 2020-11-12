import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './cocktail.css'
function Cocktail({ cocktail }) {
      return (
            <div style={{
                  width: "25%",
                  padding: "2%",

            }}>
                  <Card className="cocktail" style={{ borderTopLeftRadius: "50px" }}>

                        <CardHeader
                              avatar={
                                    <Avatar src={cocktail.strDrinkThumb} aria-label="recipe" >

                                    </Avatar>
                              }
                              action={
                                    <IconButton aria-label="settings">

                                    </IconButton>
                              }
                              title={cocktail.strDrink}
                              subheader={new Date().toLocaleDateString()}
                        />

                        <CardContent>
                              <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image={cocktail.strDrinkThumb}
                                    title="Contemplative Reptile"
                              />
                              <Button style={{ textAlign: "center" }} variant="contained" color="warning">
                                    <Link to={`/cocktail/${cocktail.idDrink}`}>Cocktail Details</Link>
                              </Button>
                        </CardContent>




                  </Card>
            </div>
      );
}

export default Cocktail
