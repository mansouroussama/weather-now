import { useContext } from 'react';
import Summary from './Summary';
import Hourly from './Hourly';
import Info from './Info';
import Daily from './Daily';
import Context from '../../context/Context';

const Weather = () => {
   const ctx = useContext(Context);
   const { summary, hourly, info, daily } = ctx.selectedCityWeather;
   console.log(ctx);
   
   return (
      <div className="px-8 py-6 flex flex-col flex-1 gap-8">
         <div className="flex gap-8">
            <Summary data={summary}/>
            <Hourly data={hourly}/>
         </div>
         <Info data={info}/>
         <Daily data={daily}/>
      </div>
   )
}
export default Weather