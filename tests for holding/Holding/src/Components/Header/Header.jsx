import Connection from './Connection'
import './Header.css'
import HeadMenu from './HeadMenu'
import Language from './Language'
import Registration from './Registration'

const Header = () => {
    return(
        <div className='contain'>
            <Language/>
            <div className='headMenu'>
                <HeadMenu/>
                <Registration/>
            </div>
            <Connection/>
        </div>
    )
}

export default Header