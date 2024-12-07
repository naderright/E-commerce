
function TitleSec({name}) {
    return (
      <div>
        <div className="section  flex px-3 md:px-11   pt-6">
          <div className=' w-[1rem] rounded-[2rem] bg-slate-950'></div>
          <h3 className='font-bold text-[1.6rem]' style={{marginLeft:'.3rem'}}>{name}</h3>
        </div>
      </div>
    )
  }
  
  export default TitleSec
  