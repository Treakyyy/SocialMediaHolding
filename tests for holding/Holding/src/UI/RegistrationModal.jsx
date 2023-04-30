import './RegistrationModal.css'

const RegistrationModal = (props) => {
    return(
        <div className={`modalRegistration ${props.openedRegistration ? 'openRegistration' : 'closeRegistration'}`}>
            <div className="modalContentRegistration">
                <img className='class' src="class.png" alt="" />
                <p className='modalContentRegister'>Thank you for registering!</p>
                <span className='modalTextRegister'>Please contact our manager via Telegram, indicating <br /> your email, which was used while registering</span>
                <button className='btnModalRegister'><img src="tg.png" alt="" /><span className='black'>@ValorManager</span></button>
            </div>
        </div>
    )
}


export default RegistrationModal