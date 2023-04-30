import { useState } from 'react'
import './FooterMenu.css'
import ModalTerms from '../../UI/ModalTerms'

const FooterMenu = () => {
    const [modalTerms, setModalTerms] = useState(false)
    return(
        <div className='menuFooterBtn'>
            <button className='FooterBtnWhite'>© 2023. Valor Partners</button>
            <button className='FooterBtnGray'>F.A.Q.</button>
            <button onClick={() => setModalTerms(true)} className='FooterBtnGray'>Terms</button>
            <button className='FooterBtnWhite'><img src="telegram.png" alt="" />@ValorManager</button>
            <button className='FooterBtnWhite'><img src="message.png" alt="" />support@valor.casino</button>
            <ModalTerms isOpened={modalTerms} isClose={() => setModalTerms(false)}/>
        </div>
    )
}


export default FooterMenu