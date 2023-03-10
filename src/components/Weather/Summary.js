import { weatherCodes } from '../../utilities/Config';
import { Player } from '@lottiefiles/react-lottie-player';
import * as weatherSummaryImages from '../../assets/img/weather-summary-images'

const Summary = (props) => {
   const style = { width:'120px', height: '120px', marginTop: '-10px', marginLeft: '-5px' }

   const weatherText = weatherCodes.find((codeArr) => codeArr[0].some((code) => code === props.data.weatherCode))[1];
   const weatherIconName = weatherText.replace(' ', '')

   return (
      // fix image depending on weather code 
      <div className="flex gap-1 items-start">
         <Player loop autoplay speed={.6} src={weatherSummaryImages[weatherIconName]}  style={style}/>
         <div className="flex flex-col gap-.5">
            <h1 className="text-4xl font-bold">{props.data.temperature}°C</h1>
            <h2 className="text-lg font-bold text-slate-600">{weatherText}</h2>
            <h3 className="text-normal text-slate-400">{props.data.cityName}</h3>
         </div>
      </div>
   )
}
export default Summary