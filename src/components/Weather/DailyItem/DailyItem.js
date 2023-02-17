import { weatherCodes } from '../../../utilities/Config';

const DailyItem = (props) => {
   const t = Date.now();
   const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(t);
   const isToday = props.data[0] === today;
   const weatherText = weatherCodes.find((codeArr) => codeArr[0].some((code) => code === props.data[2]))[1]

   return (
      <div className={`flex flex-col items-center gap-3 rounded-md text-center p-3 border-2 w-[80px] ${isToday ? "bg-slate-100/50 border-slate-100": " border-slate-100/50"}`}>
            <h6 className="font-semibold text-sm text-slate-800">{isToday ? 'Today': props.data[0].slice(0, 3)}</h6>
            <div className="flex flex-col items-center gap-1">
               <p className="font-semibold text-lg text-slate-700">{props.data[1]}°C</p>
               <p className="font-semibold text-sm text-slate-400 break-all">{weatherText}</p>
            </div>
      </div>
   )
}
export default DailyItem