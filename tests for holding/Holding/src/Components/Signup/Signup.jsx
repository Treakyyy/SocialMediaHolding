import CardNum from './CardNum'
import Join from './Join'
import './Signup.css'

const Signup = () => {
    return(
        <div className='containerRegister'>
            <div></div>
            <div>
                <Join/> 
                <CardNum/>
            </div>
        </div>
    )
}

export default Signup