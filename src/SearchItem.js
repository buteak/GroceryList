

const SearchItem = ({search, setSearch}) => {
  return(
    <form className="searchForm" onSubmit={(e) => e.preventDefault}>
      <label htmlFor="searchForm">Search List</label>

      <input 
      type="text" 
      required
      placeholder="Search List"
      role='searchbox'
      id="searchForm"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

    </form>
  )
}


export default SearchItem;