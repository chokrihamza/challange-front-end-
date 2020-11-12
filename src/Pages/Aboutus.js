
// Aboutus
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
      root: {
            maxWidth: 345,
      },
});

export default function Aboutus() {
      const classes = useStyles();

      return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                  <Card className={classes.root} style={{ width: "70%" }} >
                        <CardActionArea>
                              <CardMedia
                                    component="img"
                                    alt="image chokri hamza"
                                    height="400"
                                    image="https://avatars3.githubusercontent.com/u/69900730?s=400&u=80577c86428680430ec26dd698f656d94e15eeb6&v=4"
                                    title="image chokri hamza"
                              />
                              <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                          Chokri Hamza
          </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                          Chokri hamaza industrial engineer and training
                                          full stuck js development
          </Typography>
                              </CardContent>
                        </CardActionArea>
                        <CardActions>
                              <Button size="small" color="primary">
                                    <a href="https://github.com/chokrihamza" target="blank">Github</a>
                              </Button>

                        </CardActions>
                  </Card>
            </div>
      );
}