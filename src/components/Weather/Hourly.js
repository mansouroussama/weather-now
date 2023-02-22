// import HourlyItem from './HourlyItem/HourlyItem';
// import * as weatherHourlyImages from '../../assets/img/weather-hourly-images'
import { weatherCodes } from '../../utilities/Config';
import { AreaChart, Area, Tooltip } from 'recharts';

const Hourly = (props) => {
   const now = new Date().getHours();
   const data = props.data.slice(now, now+24).map((hour) => {
      const text = weatherCodes.find((codeArr) => codeArr[0].some((code) => code === hour[2]))[1];
      return {name: text, uv: hour[1], pv:hour[0]}
   })
   console.log(data);

   const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
      const {name: desc, uv: temp, pv: time} = payload[0].payload;
        return (
          <div className="custom-tooltip px-2.5 py-2 bg-white flex flex-col gap-1 text-center">
            <div className="flex gap-1 justify-center">
               <p className="text-[#1758FE] font-semibold">{`${temp} °C`}</p>
               <p className="text-slate-400">{`${time}`}</p>
            </div>
            <p className="text-slate-700">{`${desc}`}</p>
          </div>
        );
      }
      return null;
    };
   return (
      <div>
         {/* <h2 className="text-xl font-semibold mb-4">Today</h2> */}
         <div className="flex gap-5">
            <div className="rounded-xl overflow-hidden">
               <AreaChart width={400} height={100} data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#1758FE" stopOpacity={0.35}/>
                     <stop offset="55%" stopColor="#1758FE" stopOpacity={0.1}/>
                     <stop offset="95%" stopColor="#1758FE" stopOpacity={0}/>
                     </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} wrapperStyle={{outline: "none", boxShadow: "0 1px 3px rgb(140 140 140 / 20%), 0 1px 1px rgb(140 140 140 / 14%)"}}/>
                  <Area type="monotone" dataKey="uv" stroke="#1758FE" strokeWidth="2.5" fillOpacity={1} fill="url(#colorUv)" />
               </AreaChart>
            </div>
            {/* {props.data.map((hour) => {
               const weatherCode = weatherCodes.find((codeArr) => codeArr[0].some((code) => code === hour[2]))[1];
               const iconName = weatherCode.replace(' ', '');
               return <HourlyItem data={hour} img={weatherHourlyImages[iconName]} key={Math.random()*100}/>
            })} */}
         </div>
      </div>
   )
}
export default Hourly