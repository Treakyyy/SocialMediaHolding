import './SleepingCard.css'

const SleepingCard = () => {
    return(
        <div className='SleepingCard'>
            {/* <p className='goldTagline'>Shall we meet?</p> */}
            <div className='cards'>
                <img className='imgSleeping' src="starSleeping.png" alt="" />
                <div className="flexParagraph">
                    <p className='paragraphSleeping'>Feb., 22. <span className='gray1'>2023</span></p>
                    <p className='paragraphSleeping1'>Cascais, <span className='gray2'>Portugal</span></p>
                </div>
            </div>
            <div className='cards'>
                <img className='imgSleeping1' src="blockchain.png" alt="" />
                <div className='flexParagraph1'>
                    <p className='paragraphSleeping'>Feb., 27. <span className='gray1'>2023</span></p>
                    <p className='paragraphSleeping1'>Dubai, <span className='gray2'>UAE</span></p>
                </div>
            </div>
        </div>
    )
}


export default SleepingCard
