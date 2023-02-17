import { useContext } from 'react';
import SearchInput from './SearchInput';
import curLocation from '../../assets/img/current-location.svg';
import SearchDropdown from './SearchDropdown';
import { API_KEY, CITY_API_URL } from '../../utilities/Config';
import Context from '../../context/Context';

const Search = (props) => {
   const ctx = useContext(Context);
   const t = Date.now();
   const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(t);
   const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(t);
   
   const searchHandler = async (e) => {
      try {
         ctx.onQueryChange(e.target.value.toLowerCase().replace(' ', ''));
         console.log(ctx.searchQuery);
         
         // Search only if length if greater than 3
         if (ctx.searchQuery.length < 3) {
            ctx.onSearch([]);
            ctx.onFocus(false);
            return
         } 

         // Get results data
         const res = await fetch(`${CITY_API_URL}${ctx.searchQuery}&limit=3`, {
            method: "GET",
            contentType: 'application/json',
            headers: {"X-Api-Key": `${API_KEY}`}
         })
         const data = await res.json();
         ctx.onFocus(true);
         ctx.onSearch(data);
         console.log(data);

      } catch (error) {
        console.error(error)
      }
   }
   const selectHandler = async (city) => {
      const { latitude:lat, longitude:lon} = city;
      console.log(lat, lon);
      
      const cityWeather = await props.fetchCityData(lat, lon, city.name);
      console.log(cityWeather);
      ctx.onSelect(cityWeather);
      
   }
    return (
      <div className="px-8 py-5 text-gray-700 border-b-2 border-slate-100 bg-white flex items-center gap-6">
         <div>
            <h3 className="text-lg font-bold">{day}</h3>
            <h4 className="text-sm text-slate-400">{fullDate}</h4>
         </div>
         <div className="flex relative">
            <SearchInput onChange={(e) => searchHandler(e)} onFocus={() => ctx.onFocus(ctx.searchQuery.length > 0)} onBlur={() => setTimeout(ctx.onBlur, 100)}/>
            {ctx.dropdownIsShown && ctx.searchQuery.length > 0 && <SearchDropdown data={ctx.searchResults} onSelect={selectHandler}/>}
            <button className='px-6 py-3 ml-4 rounded-md bg-blue-700 text-white'><img className="h-7 inline" src={curLocation} alt="search" onClick={props.curPosHandler}/></button>
         </div>
      </div>
   )
}
export default Search