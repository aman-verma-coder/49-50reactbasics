// import logo from './logo.svg';
import Item from './components/Item.js';
import ItemDate from "./components/ItemDate.js";
import Card from "./components/Card.js";
import './App.css';

function App() {
  const item2Name = 'SurfExcel';
  const item2Date = '24 Sept 1995';
  const response = [
    {
      name: 'Wheel',
      date: '15 Nov 1998'
    },
    {
      name: 'Ghadi',
      date: '26 July 1999'
    },
    {
      name: '555',
      date: '25 Jan 2000'
    }
  ]
  return (
    <div>
      <Card>
        <Item name='Nirma'></Item>
        <ItemDate date='10 June 1998'></ItemDate>
        <Item name={item2Name}></Item>
        <ItemDate date={item2Date}></ItemDate>
        <Item name={response[0].name}></Item>
        <ItemDate date={response[0].date}></ItemDate>
        <Item name={response[1].name}></Item>
        <ItemDate date={response[1].date}></ItemDate>
        <Item name={response[2].name}>Hello ji mai hu aapki fifth item</Item>
        <ItemDate date={response[2].date}></ItemDate>
      </Card>
      <div className="App">
        Hello Ji
      </div>
    </div>
  );
}

export default App;