import SearchDropdownItem from './SearchDropdownItem';

const SearchDropdown = (props) => {
   return (
      <ul className="bg-white border-2 rounded-md p-3 outline-none w-72 flex flex-col items-stretch absolute left-0 top-16 z-50">
         {props.data.length > 0 ? props.data.map(city => <SearchDropdownItem city={city} key={Math.random()*100}onSelect={props.onSelect}/>) : <p className="p-2.5">No results were found.</p>}
      </ul>
   )
}
export default SearchDropdown