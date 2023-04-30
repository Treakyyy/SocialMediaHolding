import { useState } from 'react'
import Modal from '../../UI/Modal'
import './HeadMenu.css'


const HeadMenu = () => {
    const [modal, setModal] = useState(false)
    return(
        <div className='panel'>
            <div className='logo'>
                <img src="Vector (1).png" alt="" />
                <img src="Frame 25.png" alt="" />
            </div>
            <div className='menu'>
                <button className='Home'><img src="homePh.png" alt="" /> Home</button>
                <button className='white'><img src="benefitsPh.png" alt="" /> Benefits</button>
                <button className='white'><img src="contactPh.png" alt="" /> Contact</button>
                <button onClick={() => setModal(true)} className='white'><img src="faqPh.png" alt="" /> F.A.Q.</button>
            </div>
            <Modal opened={modal} close={() => setModal(false)} />
        </div>
    )
}

export default HeadMenu