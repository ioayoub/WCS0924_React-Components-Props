import "./App.css";
import Avatar from "./components/Avatar";
import { SimpsonsType } from "./lib/definitions";

import simpsonsData from "./assets/data/simpsons.json";

function App() {
  const simpsons: SimpsonsType[] = simpsonsData;

  return (
    <>
      {simpsons &&
        simpsons.map((s: SimpsonsType) => (
          <Avatar
            key={s.firstName}
            firstName={s.firstName}
            lastName={s.lastName}
            image={s.image}
          />
        ))}
    </>
  );
}

export default App;
