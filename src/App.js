import React, { Component } from 'react'
import Main from "./components/Main";
import Animal from "./components/Animal";
import AniModal from "./components/AniModal";
import Search from "./components/Search";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
      <Search/>
      <Main/>
      <AniModal/>
      <Animal/>
      </>
    )
  }
}
