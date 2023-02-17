import HourlyItem from './HourlyItem/HourlyItem';
import { weatherCodes } from '../../utilities/Config';
import * as weatherHourlyImages from '../../assets/img/weather-hourly-images'

const Hourly = (props) => {
   return (
      <div>
         <h2 className="text-xl font-semibold mb-4">Today</h2>
         <div className="flex gap-5">
            {props.data.map((hour) => {
               const weatherCode = weatherCodes.find((codeArr) => codeArr[0].some((code) => code === hour[2]))[1];
               const iconName = weatherCode.replace(' ', '')
               return <HourlyItem data={hour} img={weatherHourlyImages[iconName]} key={Math.random()*100}/>
            })}
         </div>
      </div>
   )
}
export default Hourly