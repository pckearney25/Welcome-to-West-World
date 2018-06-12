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
    topScore: 0
  };

  //removeFriend = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  //const friends = this.state.friends.filter(friend => friend.id !== id);
  // Set this.state.friends equal to the new friends array
  //this.setState({ friends });
  //};

  // Map over this.state.friends and render a FriendCard component for each friend object
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
            selected={host.selected}
            name={host.name}
            image={host.image}
            message={host.message}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
