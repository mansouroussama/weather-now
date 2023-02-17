import React, { useState } from "react";

const defaultCityWeather= {summary:{cityName:"Berlin",temperature:1,weatherCode:0},info:{feels_like:-5,rain:0,wind:14,wind_direction:193,humidity:52,precipitation:0,visibility:52,dew_point:-8},hourly:[["00:00",-7,0],["04:00",-7,0],["08:00",-7,0],["12:00",-8,0],["16:00",-9,0],["20:00",-9,1]],daily:[["Thursday",-2,3],["Friday",2,3],["Saturday",5,61],["Sunday",6,3],["Monday",5,3],["Tuesday",6,45],["Wednesday",3,45]]}

const Context = React.createContext()
export const ContextProvider = (props) => {
   const [searchQuery, setSearchQuery] = useState('');
   const [selectedCityWeather, setSelectedCityWeather] = useState({});
   const [searchResults, setSearchResults] = useState([]);
   const [dropdownIsShown, setDropdownIsShown] = useState(false);
   
   const searchQueryHandler = (query) => {
      setSearchQuery(query);
   }
   const searchHandler = (data) => {
      setSearchResults(data);
   }
   const focusHandler = (hasValue) => {
      setDropdownIsShown(hasValue);
   }
   const blurHandler = () => {
      setDropdownIsShown(false);
   }
   const selectHandler = (city) => {
      setSelectedCityWeather(city)
      setDropdownIsShown(false);
   }
   return <Context.Provider value={{
      searchQuery: searchQuery,
      selectedCityWeather: selectedCityWeather,
      searchResults: searchResults,
      dropdownIsShown: dropdownIsShown,
      onFocus: focusHandler,
      onBlur: blurHandler,
      onSearch: searchHandler,
      onQueryChange: searchQueryHandler,
      onSelect: selectHandler
   }}>{props.children}</Context.Provider>
}
export default Context