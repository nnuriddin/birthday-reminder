import React, { useState } from "react";

import data from "./data";
import List from "./components/Lists";

import './App.css';

function App() {
  const [people, setPeople] = useState(data);

  const changingPeopleArr = () => {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={changingPeopleArr}>claer all</button>
      </section>
    </main>
  );
}

export default App;
