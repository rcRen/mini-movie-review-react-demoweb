import React from 'react'
import MainScreen from './MainScreen';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyReview = () => {

  
  return (
    <MainScreen title="Welcome back">
    <Link to="createreview">

      <Button style={{marginLeft:10, marginBottom:6}} size="lg">
        Create New Note
      </Button>
      <Card style={{margin: 10}}>
        <Card.Header style={{display: "flex"}}>
          <span 
          style = {{
            color: "black",
            textDecoration:"none",
            flex: 1,
            cursor: "pointer",
            alignSelf:"center",
            fontSize:18,
          }}>title</span>
          <div>
            <Button>Edit</Button>
            <Button variant="danger" className="mx-2">Delete</Button>
          </div>
        </Card.Header>
      </Card>
    </Link>
    </MainScreen>
  )
}

export default MyReview;