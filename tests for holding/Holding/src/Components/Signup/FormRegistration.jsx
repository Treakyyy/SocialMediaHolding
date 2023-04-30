import { useEffect, useState } from 'react'
import './FormRegistration.css'
import Dropdown from '../../UI/Dropdown'
import RegistrationModal from '../../UI/RegistrationModal'


const FormRegistration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telegram, setTelegram] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [telegramDirty, setTelegramDirty] = useState(false)
    const [checkboxDirty, setCheckboxDirty] = useState(false)
    const [emailError, setEmailError] = useState('Can not be Empty')
    const [passwordError, setPaswordError] = useState('Can not be Empty')
    const [telegramError, setTelegramError] = useState('Can not be Empty')
    const [checkboxError, setCheckboxError] = useState('Can not be Empty')
    const [formValid, setFormValid] = useState(false)
    const [modalRegistration, setModalRegistration] = useState(false)

    useEffect(() => {
        if(emailError || passwordError || telegramError || checkboxError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [emailError, passwordError, telegramError, checkboxError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Incorrect email')
        }else{
            setEmailError('')
        }
    }
    const handleEntailmentRequest = (e) => {
        setModalRegistration(true)
        e.stopPropagation()()
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(!e.target.value){
            setPaswordError('Can not be Empty')
        }else{
            setPaswordError('')
        }
    }

    const telegramHandler = (e) => {
        setTelegram(e.target.value)
        if(!e.target.value){
            setTelegramError('Can not be Empty')
        }else{
            setTelegramError('')
        }
    }
    const checkboxHandler = (e) => {
        setCheckbox(e.target.value)
        if(!e.target.value){
            setCheckboxError('Can not be Empty')
        }else{
            setCheckboxError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'telegram':
                setTelegramDirty(true)
                break
            case 'checkbox':
                setCheckboxDirty(true)
                break
        }
    }

    return(
        <form className='form'>
            <div className='inputFlex'>
                <div className='labelFlex'>
                    <label 
                        className='label'>
                        Email 
                        {(emailDirty && emailError) && <div style={{color: '#FFFFFF', background: '#FF5454'}}>{emailError}</div>}
                    </label>
                    <input 
                        onChange={e => emailHandler(e)} 
                        value={email} 
                        onBlur={e => blurHandler(e)} 
                        className='input' type="text" name='email' placeholder='...' />
                </div>
                <div className='labelFlex'>
                    <label className='label'>
                        Password 
                        {(passwordDirty && passwordError) && <div style={{color: '#FFFFFF', background: '#FF5454'}}>{passwordError}</div>}
                    </label>
                    <input 
                        onChange={e => passwordHandler(e)}
                        value={password} 
                        onBlur={e => blurHandler(e)} 
                        className='input' type="type" name='password' placeholder='...' />
                    <button className='eye'><img src="eye.png" alt="" /></button>
                </div>
                <div className='labelFlex'>
                    <label className='labelPadding'>Your Business</label>
                    <Dropdown/>
                </div>
                <div className='labelFlex'>
                    <label className='labelPadding'>
                        Your Telegram Account 
                        {(telegramDirty && telegramError) && <div style={{color: '#FFFFFF', background: '#FF5454', width: '90px'}}>{telegramError}</div>}
                    </label>
                    <input 
                        onChange={e => telegramHandler(e)} 
                        value={telegram} 
                        onBlur={e => blurHandler(e)} 
                        className='input' type="text" name='telegram' placeholder='...' />
                </div >
            </div>
                <div>
                    <div className='rectangleLabel'>
                        <label className='labelRectangle'>Tell about Your results</label>
                        <label className='label1'>Attach a File</label>
                    </div>
                    <input className='formInput' type="text" placeholder='...' />
                </div>
                <div className='checkFlex'>
                    <label className='selectDropdown'>
                            <input 
                            className='checkbox' type="checkbox" name='checkbox' 
                            value={checkbox} 
                            onChange={e => checkboxHandler(e)} />
                        {(checkboxDirty && checkboxError) && <div style={{color: 'red'}}>{checkboxError}</div>}
                            <span className='fake'></span>
                            <span className='textCheckboxForm'><p>I</p><p>have</p><p>read</p><p>and</p><p>agree</p><p>to</p><p>the</p><p>Terms</p><p>&</p><p>Coditions</p></span>
                    </label>
                    <button onClick={() => handleEntailmentRequest()} disabled={!formValid} className='gold'><img src="btngold.png" alt="" /> Sign Up</button>
                </div>
                <RegistrationModal openedRegistration={modalRegistration}/>
        </form>
    )
}

export default FormRegistration