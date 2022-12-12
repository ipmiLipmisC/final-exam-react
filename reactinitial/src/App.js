import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription"


const App = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    const response = await fetch(
      "https://demoapi.com/api/series/howimetyourmother"
    );
    const data = await response.json();
    setPersons(data);
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <h1>Series API</h1>
      <main>
        {!persons && <LoadingMask />}
        {persons &&
          persons.map((person) => (
            <Character key={person.name} person={person} />
          ))}
      </main>
      < Subscription />
    </div>
  );
};

export default App;
