import { Player } from '@lottiefiles/react-lottie-player';

const DailyItem = (props) => {
   const t = Date.now();
   const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(t);
   const isToday = props.data[0] === today;
   const style = { width:'50px', height: '50px', marginTop: '-10px', marginLeft: '-5px' }

   return (
      <div className={`flex flex-col items-center gap-2 rounded-md text-center p-3 border-2 w-[80px] ${isToday ? "bg-slate-100/50 border-slate-100": " border-slate-100"}`}>
            <h6 className="font-semibold text-sm text-slate-800">{isToday ? 'Today': props.data[0].slice(0, 3)}</h6>
            <div className="flex flex-col items-center gap-1">
               <div className="border-slate-200 pt-1.5 rounded-full">
                  {/* <img className="inline w-8 h-8" src={props.image} alt="icon"/> */}
                  <Player loop autoplay speed={.6} src={props.image}  style={style}/>
               </div>
               <p className="font-medium text-base text-slate-700">{props.data[1]}°C</p>
            </div>
      </div>
   )
}
export default DailyItem