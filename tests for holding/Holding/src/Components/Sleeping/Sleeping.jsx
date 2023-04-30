import './Sleeping.css'
import SleepingCard from './SleepingCard'
import TaglineSleeping from './TaglineSleeping'


const Sleeping = () => {
    return(
        <div className='sleeping'>
            <div></div>
            <div className='flexSleeping'>
                <TaglineSleeping/>
                <SleepingCard/>
            </div>
        </div>
    )
}

export default Sleeping