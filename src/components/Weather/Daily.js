import DailyItem from './DailyItem/DailyItem';
import { weatherCodes } from '../../utilities/Config';
import * as weatherSummaryImages from '../../assets/img/weather-summary-images'

const Daily = (props) => {
   return (
      <div>
         {/* <h2 className="text-xl font-semibold mb-4">This Week</h2> */}
         <div className="flex gap-4 justify-start">
            {props.data.map((day) => {
               const weatherText = weatherCodes.find((codeArr) => codeArr[0].some((code) => code === day[2]))[1];
               const iconName = weatherText.replace(' ', '');
               const weatherImage = weatherSummaryImages[iconName];
               return <DailyItem data={day} image={weatherImage} key={Math.random()*100}/>
            })}
         </div>
      </div>
   )
}
export default Daily