import React from "react";
import Rock from './images/rock.png'
import Paper from './images/rock.png'
import Scissors from './images/rock.png'
import "./styles.css";
import "./";

export default function App() {
  return (
    <div class="wrapper">
    <h1>pick one</h1>
    <ul>
      <li class="pick-one">
        <button>
          <img src={Rock} alt="Rock" />
          rock
        </button>
      </li>
      <li class="pick-one">
        <button>
          <img src={Paper} alt="Paper" />
          paper
        </button>
      </li>
      <li class="pick-one">
        <button>
          <img src={Scissors} alt="Scissors" />
          scissors
        </button>
      </li>
    </ul>
    {/* <div class="your-pick">
      <h1 class="you-win">you win</h1>
      <img src={Rock} alt="Rock" />
    </div>
    <div class="computer-pick">
      <h1 class="computer-wins">computer wins</h1>
      <img src={Scissors} alt="Scissors" />
    </div>
    <button class="play-again">
      play again?
    </button> */}
  </div>
  )
}
