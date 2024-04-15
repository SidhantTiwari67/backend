import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/jokes")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  // Results in CORS error
  // CORS=> Cross Origin Resource Sharing
  // CORS provides safety
  // URL alag hai , port alag hai ===> Cross origin
  // Ex:- Hum apne ghar main kisiko bhi ghusne ni dete, only humaare parivar waalo ko chhod k
  // So jiska "Origin" same hoga ussi ko resource milega

  // Solution=====> URL whitelisting(Backend ka kaam)

  useEffect(() => {
    axios
      // .get("http://localhost:3000/api/jokes")
      // Lekin hum itna bada URL ni likhenge and we dp standardization
      // So we use proxy, and specify it in config file
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1>Jokes</h1>
      <p>Total jokes:{jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id} className="content">
          <h2>Title:{joke.title}</h2>
          <h3>Content:{joke.content}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
