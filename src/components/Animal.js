import React, { Component } from 'react';
import{Card, Button} from 'react-bootstrap';
import AniModal from "./AniModal";


export default class Animal extends Component {

  constructor(props){
    super(props);
    this.state = {
      cart: 0,
    }
  }

  handleClicks(){
    // when user clicks add one
    this.setState((prev) => ({
        cart: prev.cart + 1,
    }))
  }

  render() {
    return (
      <>

      <Card style  = {{width: '30rem', backgroundColor: 'green', color: 'navyblue',border: "4px white solid", margin: "20px"}}>
        <Card.Img variant = "top" src={this.props.img} alt={this.props.title}/>
        <AniModal 
          image = {this.props.img}
          title = {this.props.title}
          description = {this.props.description}
          />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Horns: {this.props.horns}</Card.Text>
          <Button style = {{width: "27rem"}}onClick = {() => this.handleClicks()} variant = 'outline-light'> Likes: {this.state.cart}</Button>
        </Card.Body>
      </Card>
      </>
    )
  }
}
