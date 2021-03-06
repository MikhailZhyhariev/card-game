import React, { Component } from 'react';
import './StartGame.css';

import image2x from '../../img/StartGame@2x.png'
import image from '../../img/StartGame.png'

class StartGame extends Component {
  render() {
    return (
      <div className="startgame" data-tid="App">
        <img className="startgame__image"
             src={image}
             srcSet={`${image2x} 2x`}
             alt="card" />
        <h1 className="startgame__name">memory game</h1>
        <button className="startgame__button"
                onClick={this.props.startGame}
                data-tid="NewGame-startGame">
                Начать игру
        </button>
      </div>
    );
  }
}

export default StartGame;
