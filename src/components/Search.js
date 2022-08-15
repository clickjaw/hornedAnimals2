import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {cart: 0,}
    
  }

  render() {
    return (
      <>
        {" "}

<Card style = {{backgroundColor: 'black', }}>
    <Card.Text>
        {this.props.hornsAll}
    </Card.Text>
</Card>

        <form>
          <label value="hornsTitle">Horns</label><br/>
          <select onChange = {this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </select>
        </form>

      </>
    );
  }
}
