import React, { Component } from 'react'
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Animal from "./components/Animal";
import "./App.css";
import Search from "./components/Search";
import aniModal from "./components/aniModal"

export default class App extends Component {
  render() {
    return (
      <>
      <Search/>
      <Main/>      
      </>
    )
  }
}
