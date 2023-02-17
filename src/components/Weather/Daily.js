import DailyItem from './DailyItem/DailyItem';

const Daily = (props) => {
   return (
      <div>
         <h2 className="text-xl font-semibold mb-4">This Week</h2>
         <div className="flex gap-4 justify-start">
            {props.data.map((day) => {
               return <DailyItem data={day} key={Math.random()*100}/>
            })}
         </div>
      </div>
   )
}
export default Daily