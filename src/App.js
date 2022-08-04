import Card from "./components/Card";
import Contact from "./components/Contact";

export default function App() {
  console.log(Contact);

  return (
    <div>
      <h1 className="Heading">Contact list</h1>
      <Card
        Name={Contact[0].Name}
        SELL={Contact[0].SELL}
        email={Contact[0].email}
        img={Contact[0].img}
      />
      <Card
        Name={Contact[1].Name}
        SELL={Contact[1].SELL}
        email={Contact[1].email}
        img={Contact[1].img}
      />
    </div>
  );
}
