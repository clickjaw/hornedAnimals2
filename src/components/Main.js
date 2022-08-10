import React, { Component } from 'react';
import data from "../data.json";
import Animal from "./Animal";

export default class Main extends Component {
  render() {
    return (
      <>
      <p><h1 class = "pageTitle">Horned Animals</h1></p>
    {data.animal.map(animal => {
        return(
            <Animal
            title = {animal.title}
            img = {animal.image}
            description = {animal.description}
            horns = {animal.horns}
            />

        )


    }
    )
    }
        
      </>
    )
  }
}
