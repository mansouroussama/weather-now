import searchIcon from '../../assets/img/search-icon.svg'
// import {DebounceInput} from 'react-debounce-input';

const SearchInput = (props) => {
   return  (  
      <div className="relative">
         <img className="h-6 inline absolute left-4 top-3" src={searchIcon} alt="search"/>
         <input className="bg-white pl-12 pr-6 py-3 w-72 rounded-md outline-none border-2" type="text" spellCheck="false" placeholder="Search any city..." onChange={props.onChange} onFocus={props.onFocus} onBlur={props.onBlur}   debounceTimeout={500} minLength={4}></input>
      </div>
   )
}
export default SearchInput