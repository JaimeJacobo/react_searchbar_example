import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    animals: [
      "perro",
      "gato",
      "jirafa",
      "pajaro",
      "aguila",
      "avestruz",
      "hamster",
    ],
    comparativeAnimals: [
      "perro",
      "gato",
      "jirafa",
      "pajaro",
      "aguila",
      "avestruz",
      "hamster",
    ],
  };

  filterAnimals(event) {
    const { value } = event.target;
    const filteredAnimals = this.state.animals.filter((animal) => {
      return animal.includes(value);
    });
    this.setState({ ...this.state, comparativeAnimals: filteredAnimals });
  }

  render() {
    return (
      <div className="App">
        <h1>Mis animales</h1>
        <input
          onChange={(event) => this.filterAnimals(event)}
          type="text"
          placeholder="Busca a tus animales"
        />
        <ul>
          {this.state.comparativeAnimals.map((animal, index) => {
            return <li key={index}>{animal}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
