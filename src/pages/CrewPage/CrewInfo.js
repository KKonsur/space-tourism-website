import CrewButtons from './CrewButtons'

const CrewInfo = ({ onCrewChange, data, currentCrewIndex }) => {
   return (
      <div className='crew__info'>
         <div className="crew__person">
            <h3 className='crew__role'>{data[currentCrewIndex].role}</h3>
            <h2 className='crew__name'>{data[currentCrewIndex].name}</h2>
         </div>
         <p className='crew__bio'>{data[currentCrewIndex].bio}</p>
         <div className="crew__buttons">
            <CrewButtons onCrewChange={onCrewChange} data={data} />
         </div>
      </div>
   )
}

export default CrewInfo