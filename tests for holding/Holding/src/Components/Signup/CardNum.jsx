import './CardNum.css'
import FormRegistration from './FormRegistration'

const CardNum = () => {
    return(
        <div className='containerCardNum'>
                    <div className='cardNum1'>
                        <p className='cardHeader'>Support</p>
                        <br />
                        <p className='cardDescription'>Personal manager <br /> 24/7, Support and <br /> training</p>
                        <img className='imgCard' src="card1.png" alt="" />
                        <img className='imgCardNum' src="cardNum1.png" alt="" />
                    </div>
                    <div className='cardNum2'>
                        <p className='cardHeader'>Conversion</p>
                        <br />
                        <p className='cardDescription'>Hight conversion <br /> from click <br /> to deposit (1:6)</p>
                        <img className='imgCard' src="card2.png" alt="" />
                        <img className='imgCardNum' src="cardNum2.png" alt="" />
                    </div>
                    <div className='cardNum3'>
                        <p className='cardHeader'>Software</p>
                        <br />
                        <p className='cardDescription'>Webview <br /> & PWA Apps</p>
                        <img className='imgCard' src="card3.png" alt="" />
                        <img className='imgCardNum' src="cardNum3.png" alt="" />
                    </div>
                    <div className='cardNum4'>
                        <p className='cardHeader'>Promo</p>
                        <br />
                        <p className='cardDescription'>Customized <br /> promo materials</p>
                        <img className='imgCard' src="card4.png" alt="" />
                        <img className='imgCardNum' src="cardNum4.png" alt="" />
                    </div>
                    <FormRegistration/>
                </div>
    )
}

export default CardNum