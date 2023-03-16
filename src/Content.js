
import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {
  
  return (
    <>
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
    </>
  );
};

export default Content;
