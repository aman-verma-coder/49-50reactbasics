// // import logo from './logo.svg';
// import Item from './components/Item.js';
// import ItemDate from "./components/ItemDate.js";
// import Card from "./components/Card.js";
import Product from "./components/Product.js";
// import ProductForm from "./components/ProductForm.js";
import NewProduct from "./components/NewProduct.js";
import './App.css';

function App() {
  const response = [
    {
      name: 'Nirma',
      date: '10 June 1998'
    },
    {
      name: 'SurfExcel',
      date: '24 Sept 1995'
    },
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
  function printProductData(data) {
    console.log(data);
    console.log('I am inside App.js');
  }
  return (
    <div>
      <NewProduct aman={printProductData} />
      <Product items={response}></Product>
      {/* <div className="App">
        Hello Ji
      </div> */}
    </div>
  );
}

export default App;