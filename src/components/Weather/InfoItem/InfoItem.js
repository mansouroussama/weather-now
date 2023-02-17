const InfoItem = (props) => {
   const units = [
      ['feels_like', '°C'],
      ['wind', 'km/h'],
      ['wind_direction', '°'],
      ['humidity', '%'],
      ['precipitation', 'mm'],
      ['rain', 'mm'],
      ['visibility', 'm'],
      ['dew_point', '°C']
   ]
   const getUnit = (value) => {
      const valueUnit = units.find(unit => unit[0] === value)
      return valueUnit[1]
   }
   const formatLabel = (label) => {
      return label.replace('_', ' ').replace(label[0], label[0].toUpperCase())
   }
   
   return (
      // fix icon, depends on unit 
      <div className="flex gap-3 w-40">
         <div className="bg-slate-100 p-2 rounded-full">
            <img className="inline w-8 h-8" src={props.image} alt="icon"/>
         </div>
         <div className="flex flex-col gap-.5">
            <h4 className="font-normal text-sm text-slate-500">{formatLabel(props.data[0])}</h4>
            <h6 className="font-bold text-lg text-slate-800">{`${props.data[1]}${getUnit(props.data[0])}`}</h6>
         </div>
      </div>
   )
}
export default InfoItem