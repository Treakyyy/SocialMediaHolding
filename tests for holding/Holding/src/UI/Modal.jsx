import './Modal.css'

const Modal = (props) => {
    return(
        <div className={`modal ${props.opened ? 'open' : 'close'}`}>
            <div className="modalContent">
                <button onClick={props.close} className='closeModal'><img src="modalClose.png" alt="" /></button>
                    <p className='modalHeader'>F.A.Q.</p>
                    <br />
                <div className='modalParagraphs'>
                    <p className='paragraphHeading'>What is the ValorBet.Partners affiliate program?</p>
                    <p className='paragraphContent'>ValorBet.Partners is an affiliate program of the ValorBet project. By registering in the system, you get the opportunity to run and convert traffic to the ValorBet brand, receiving the payment set by the affiliate program according to the CPA or RevenueShare model.</p>
                </div>
                <br />
                <br />
                <div className='modalParagraphs'>
                    <p className='paragraphHeading'>What traffic sources do we pay for?</p>
                    <p className='paragraphContent'>We accept almost all types of traffic, except for types that violate the law. It is prohibited to use any kind of images and mentions of politicians in advertising creatives, as well as political topics in advertising materials. We accept some sources only according to the Revenue Share model: capper traffic, motivated traffic, earning schemes, etc. You can always find out more details from your manager, who is assigned to you after Registration.</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='modalParagraphs'>
                    <p className='paragraphHeading'>What Geo do we pay for?</p>
                    <p className='paragraphContent'>You can always find out the list of current Geo from your manager, as well as recommendations for working with these Geo.</p>
                </div>
                <div className='modalParagraphs'>
                    <p className='paragraphHeading'>What is the CPA/Revenue Share payment model?</p>
                    <p className='paragraphContent'>The payment model determines the partner's remuneration system. Currently, we have 2 models available: <br /> CPA (cost per action) – traffic payment is made for the first deposit made by the player <br /> Revenue Share – traffic payment is made in the form of % of the casino profit that the players bring</p>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='modalParagraphs'>
                    <p className='paragraphHeading'>What is the payout period?</p>
                    <p className='paragraphContent'>The reporting period established by the ValorBet.Partners Affiliate Program is 2 times a month. It is equal to half of a calendar month (usually 15 days): from the 1st to the 15th of the month, and from the 15th to the 30th (31st) day of the month inclusive.</p>
                </div>
                <br />
                <br />
                <div className='modalParagraphs'>
                    <p className='paragraphHeading'>Where can I find out more about the product and working conditions?</p>
                    <p className='paragraphContent'>You can write to the manager of the ValorBet.Partners affiliate program and get all the necessary information on working with the brand: https://t.me/valorManager</p>
                </div>
            </div>
        </div>
    )
}

export default Modal