import InfoItem from './InfoItem/InfoItem';
import * as weatherInfoImages from '../../assets/img/weather-info-images'

const Info = (props) => {
   return (
      <div>
         <h2 className="text-xl font-semibold mb-4">Weather Now</h2>
         <div className="flex flex-wrap gap-x-0 gap-y-6 max-w-2xl -mr-6">
            {Object.entries(props.data).map((info) => {
               const weatherImageName = info[0].split('_').map((word, i) => i === 1 ? word[0].toUpperCase() + word.slice(1) : word).join('') + 'Icon';
               const weatherImage = weatherInfoImages[weatherImageName];
               return <InfoItem data={info} image={weatherImage} key={Math.random()*100}/>
            })}
         </div>
      </div>
   )
}
export default Info