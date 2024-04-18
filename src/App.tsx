import { useState } from "react";
import "./App.scss";
import { Form } from "./components/Form";
import { JokeEl } from "./components/JokeEl";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import sourceOfJokes from "./source/jokes-data";
import { Joke, JokeWithId, JokeTypes, FormData } from "./model";

function App() {
  const [userName, setUserName] = useState<string>('');
  const [jokesData, setJokesData] = useState<JokeWithId[]>([]);

  const fetchData = async (type: JokeTypes, count: number): Promise<void> => {
    const resp = await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
    const data = await resp.json() as JokeWithId[];
    setJokesData(data.slice(0, count));
  };

  // const generateJokesData = (type: JokeTypes, count: number, source: (Joke | JokeWithId) []): void => {
  //   const data = [...source];
  //   setJokesData(
  //     data
  //       .filter((item) => item.type === type)
  //       .map((item, index) => ({ ...item, id: index }))
  //       .slice(0, count)
  //   );
  // };

  const handleSendData = (data: FormData) => {
    setUserName(data.name);
    fetchData(data.type, data.count);
    // generateJokesData(data.type, data.count, sourceOfJokes);
  };

  return (
    <div className="app">
      {jokesData.length > 0 ? (
        <div className="app__container">
          <h2>{userName}</h2>
          <h3>There are jokes for you!</h3>
          {jokesData.map((item) => (
            <JokeEl key={item.id} setup={item.setup} punchline={item.punchline} />
          ))}
          <span
            className="app__container__back-icon"
            onClick={() => setJokesData([])}
          >
            <ArrowUturnLeftIcon />
          </span>
        </div>
      ) : (
        <div className="app__container">
          <h2>Welcome to jokes generator</h2>
          <h3>Please fill the form:</h3>
          <Form onSubmitData={handleSendData} />
        </div>
      )}
    </div>
  );
}

export default App;
