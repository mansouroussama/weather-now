const HourlyItem = (props) => {
   return (
      <div className="flex flex-col w-12 items-center">
         <h2 className="text-sm font-semibold text-slate-400 mb-1">{props.data[0]}</h2>
         <div className="bg-slate-100 rounded-full p-2 mb-1">
            <img src={props.img} alt="icon"/>
         </div>
         <h2 className="font-bold">{`${props.data[1]}°C`}</h2>
      </div>
   )
}
export default HourlyItem