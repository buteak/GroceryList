
import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {
  
  return (
    <main>
      {items.length ? (
        <ItemList
         items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      
       ) : (
        <h2  style ={{marginTop:"2rem"}}>
         Empty List
        </h2>
       )}
    </main>
  );
};

export default Content;
