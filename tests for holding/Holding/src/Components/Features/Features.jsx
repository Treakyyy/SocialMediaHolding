import './Features.css'


const Features = () => {
    return(
        <div className='container'>
            <div></div>
            <div className='cardFlex'>
                <div className='card'>
                    <img className='ph01' src="01.png" alt="" />
                    <div className='txt'>
                        <p className='text'>CPA:</p>
                        <p className='text1'>$20 ... $60</p>
                    </div>
                </div> 
                <div></div>
                 <div className='card'> 
                    <img className='ph01' src="cash.png" alt="" />
                    <div className='txt'>
                        <p className='text'>Payments:</p>
                        <p className='text1'>Every Day</p>
                    </div>
                </div>
                <div className='card'>
                    <img className='ph01' src="star.png" alt="" />
                    <div className='txt'>
                        <p className='text'>Revshare:</p>
                        <p className='text1'>UP to 60%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features