import './Dropdown.css'

const Dropdown = () => {
    return(
        <div class="dropdown">
            <button className='dropdownBtn'><img src="dropdown.png"/></button>
                <div class="dropdownContent">
                    <label className='selectDropdown'>
                        <input type="checkbox" className='checkbox'/>
                        <span className='fake'></span>
                        <span className='text'><p>Chicken</p><p>Breeding</p></span>
                    </label>
                    <label className='selectDropdown'>
                        <input type="checkbox" className='checkbox'/>
                            <span className='fake'></span>
                            <span className='text'><p>Female</p><p>Voice</p><p>Actor</p></span>
                    </label>
                    <label className='selectDropdown'>
                        <input type="checkbox" className='checkbox'/>
                        <span className='fake'></span>
                        <span className='text'><p>Parrot</p><p>-</p><p>Costume</p><p>Promoter</p></span>
                    </label>
                </div>
        </div>
    )
}

export default Dropdown