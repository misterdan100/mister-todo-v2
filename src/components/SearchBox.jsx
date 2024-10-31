import SearchItem from "./SearchItem";
import useTasks from "../hooks/useTasks";
import { useEffect, useRef } from "react";
import '../styles/searchBox.css'

const SearchBox = () => {
    const {
      searchVisibility,
      setSearchVisibility,
      inputSearch,
      setInputSearch,
      searchResult,
      setSearchResult,
      handleSearchTasks
    } = useTasks();

    const searchContainerRef = useRef(null)

    useEffect(() => {
      const handleClickOutside = (event) => {
        if(searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
          handleInput('')
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      
      return () => {
        document.addEventListener('mousedown', handleClickOutside)
      }
    }, [setSearchResult])

    const handleInput = inputText => {

        if (inputText === '') {
          setSearchVisibility(false);
          setInputSearch('')
          setSearchResult([])
          return
        }
        
        if (inputText === ' ') {
          setSearchVisibility(false);
          setInputSearch('')
          setSearchResult([])
          return
        }
        handleSearchTasks(inputText)
    }

  return (
    
    <div className='search-container'
    ref={searchContainerRef}
    >
      <div className={`items-container ${!searchVisibility && 'hidden'}`}
        
      >
      {/* <div className={`items-container `}> */}
       
        {searchResult.length ? searchResult.map((task, index) => <SearchItem 
          key={index} 
          task={task}
        />) : (<p>No results...</p>)}
        

      </div>
      <input 
        className="nav-input" 
        type="text" 
        placeholder="Search todos..." 
        onChange={e => handleInput(e.target.value.trimEnd())}
        // onBlur={() => {
        //   setTimeout(() => {
        //     handleInput('')
        //   }, 80);
        // }}
        value={inputSearch}
      />
    </div>
  );
};

export default SearchBox;
