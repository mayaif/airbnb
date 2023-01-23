
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from './components/Card';
import Data from './Data';



function App() {
 
  const cardElements = Data.map((info) => {
    return <Card 
      key={info.id}
      {...info}
      
      />
    })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className = "cards-list">
        {cardElements}
      </section>
      
    </div>
  );
}

export default App;
