const SearchDropdownItem = (props) => {
   return (
      <li className="flex ">
         <button className="p-2.5 flex-1 text-left hover:bg-slate-100/75" onClick={() => props.onSelect(props.city)}>{props.city.name}</button>
      </li>
   )
}
export default SearchDropdownItem