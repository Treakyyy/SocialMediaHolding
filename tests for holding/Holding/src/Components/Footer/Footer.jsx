import './Footer.css'
import FooterMenu from './FooterMenu'
import LanguageFooter from './LanguageFooter'
import Stiker from './Stiker'

const Footer = () => {
    return(
        <div className='containerFooter'>
            <div></div>
            <div className='footer'>
                <Stiker/>
                <FooterMenu/>
                <LanguageFooter/>
            </div>
        </div>
    )
}

export default Footer