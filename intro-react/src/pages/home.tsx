import person from '../assets/person2-removebg.png'
import DesComp from '../pages/desc'
import './home.css'

function HomePage(){
    return(
        <div className="home">
            <div className="boxperson">
                <img src={person} alt="person" className='person' />
            </div>
            <DesComp />
        </div>
    )
}

export default HomePage