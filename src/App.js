import React, { Component } from "react";

import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import HostCard from "./components/HostCard";
import hosts from "./hosts.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    hosts,
    message: "Click on a host to begin.",
    score: 0,
    topScore: 0,
    selectedArray: []
  };

  createNarrative = (id, message) => {
    //The functions we'll call thoughout the round
    const updateMessage = message => {
      this.setState({ message: message });
    };
    //Modified Durstenfield shuffle
    //h/t https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const shuffleHosts = () => {
      let hosts = this.state.hosts;
      for (let i = hosts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [hosts[i], hosts[j]] = [hosts[j], hosts[i]]; // eslint-disable-line no-param-reassign
      }
      this.setState({ hosts });
    };

    const updateScore = () => {
      this.setState({
        score: this.state.score + 1
      });

      if (this.state.score >= this.state.topScore) {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore + 1
        });
      } else {
        this.setState({
          score: this.state.score + 1
        });
      }
      if (this.state.score + 1 === 12) {
        this.setState({
          score: 0,
          message: "You win! Let's play another round!",
          selectedArray: []
        });
      }
    };

    console.log(this.state.selectedArray);
    let selectedArray = this.state.selectedArray;
    const foundId = selectedArray.find(element => element === id);
    if (foundId) {
      this.setState({
        score: 0,
        message:
          "The robot host remembered you and led a rebellion! Play another round.",
        selectedArray: []
      });
    } else {
      selectedArray.push(id);
      this.setState({
        selectedArray: selectedArray
      });
      updateMessage(message);
      shuffleHosts();
      updateScore();
    }
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.hosts.map(host => (
          <HostCard
            id={host.id}
            key={host.id}
            name={host.name}
            image={host.image}
            message={host.message}
            createNarrative={this.createNarrative}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
