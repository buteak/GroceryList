import Header from "./Header";
import AddItem from "./AddItem";
import Content from './Content'
import Footer from './Footer'
import { useState} from 'react'

function App() {
  
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of cocoa covered bag",
    },
    {
      id: 2,
      checked: true,
      item: "Mangoes",
    },
    {
      id: 3,
      checked: false,
      item: "Bananas",
    }
  ]);

  const [newItem, setNewItem] = useState('')

  const setAndSaveItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItem));
  }

  const addItem = (item) =>{
    const id = items.length ? items[items.length -1 ].id + 1 : 1;
    const myNewItem = {id, checked:false, item}
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems)
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) =>item.id !== id);
    setAndSaveItems(listItems)  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem)

    addItem(newItem)
    setNewItem('')
  }


  return (
    <div className="App">
        <Header title='Grocery'/>
        <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
        <Content
         items={items}
         setItems={setItems}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
        />
        <Footer items={items}/>
    </div>
  );
}

export default App;

