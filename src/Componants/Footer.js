import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
function Footer() {

      return (

            <Card body inverse style={{ backgroundColor: 'lightblue', position: "sticky", bottom: "0%", flex: 1 }}>

                  <Button color="danger"><Link to='/'>Go Home</Link></Button>
            </Card>
      )
}

export default Footer
