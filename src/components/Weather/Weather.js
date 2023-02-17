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
      <div className="px-8 py-6 flex flex-1 gap-8">
         <div className="flex flex-col gap-6">
            <Summary data={summary}/>
            <Hourly data={hourly}/>
         </div>
         <div className="flex flex-col justify-between">
            <Info data={info}/>
            <Daily data={daily}/>
         </div>
      </div>
   )
}
export default Weather