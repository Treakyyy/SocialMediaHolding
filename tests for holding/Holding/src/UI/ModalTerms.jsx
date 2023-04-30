import './ModalTerms.css'

const ModalTerms = (props) => {
    return(
        <div className={`modalTerms ${props.isOpened ? 'openModalTerms' : 'closeModalTerms'}`}>
        <div className="modalContentTerms">
            <button onClick={props.isClose} className='closeModal'><img src="modalClose.png" alt="" /></button>
                <p className='modalHeader'><span>Terms</span><span>and</span><span>Conditions</span></p>
                <br />
            <div className='modalParagraphs'>
                <p className='paragraphHeading'>Terms of the affiliate program</p>
                <p className='paragraphContent'>A partner is a publisher (an individual who has reached the age of 18 or a legal entity) who accepts the terms of this document and works to promote the product of the ValorBet Partners Affiliate Program on the Internet;</p>
                <p className='paragraphContent'>The Affiliate Program is a technical marketing platform that provides advertising materials to publishers to promote the product of the ValorBet Partners Affiliate Program on the Internet;</p>
                <p className='paragraphContent'>Product is a project advertised through advertising materials (betting, casino, trading) on the Internet;</p>
                <p className='paragraphContent'>Hybrid consists of two paid results. First event (result) this is the first deposit made by the player. Second event (result) percentage of Gross Gaming Revenue, the amount of which pays off the amount of the 1st event for a cohort of players (minimum period of 3 months). Gross Gaming Revenue consists of the difference between the players' bets and their winnings and bonuses, minus the administrative fee (10%) and the commission fee from payments (10%) of the attracted player.</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='modalParagraphs'>
                <p className='paragraphHeading'>Rules for working with the ValorBet Partners Affiliate Program</p>
                <br />
                <p className='paragraphContent'>When starting to work with the ValorBet Partners Affiliate Program, each Partner is obliged to read and accept this User Agreement.</p>
                <p className='paragraphContent'>The Partner is fully responsible for the safety of personal confidential data for logging into the ValorBet Partners Affiliate Program system (login and password). The Affiliate Program is not responsible for the loss of personal confidential data by the Partner.</p>
                <p className='paragraphContent'>According to the provisions of this affiliate program, it is prohibited to register as a Referral if you already have a valid affiliate account. Or, if you are a Referral of an affiliate account belonging to an individual or legal entity that you maintain or have access to. Members of the Affiliate Program are prohibited from having two or more partner accounts in the ValorBet Partners affiliate program. If there is a need to operate two or more accounts in the partner program, the partner undertakes to inform the support service and provide objective justifications for such a need.</p>
                <br />
                <br />
                <br />
                <p className='paragraphContent'>Brand traffic from contextual advertising and single/small-page sites created exclusively for groups of search queries Valor bet/ValorBet, etc. is accepted only according to the CPA model. It is allowed to receive branded traffic from review sites using Revenue Share and Hybrid models, depending on Geo of the players.</p>
                <p className='paragraphContent'>For violation of the current rules and conditions of cooperation, the Affiliate Program reserves the right to close the Partner's personal account in the ValorBet Partners system without further payment of funds and explanation of the reasons for blocking.</p>
            </div>
            <br />
            <br />
            <div className='modalParagraphs'>
                <p className='paragraphHeading'>Commission structure of the affiliate program</p>
                <p className='paragraphContent'>The Partner's earnings are formed at the expense of the share of the net income of the product from the players attracted by this Partner. The percentage of the Partner's income depends on the offer, the personal tariff and the Product:</p>
                <p className='paragraphContent'>40% of the players' commission from the Casino project</p>
                <p className='paragraphContent'>40% of players' commissions from the Sport project</p>
                <p className='paragraphContent'>The Referral partner program ValorBet Partners is also provided. The remuneration of Partners (Refbringer) is from 3% of all profits received from new Partners (Referrals) attracted by the referral link of the Refbringer.</p>
            </div>
            <br />
            <div className='modalParagraphs'>
                <p className='paragraphHeading'>The procedure for resolving disputes</p>
                <p className='paragraphContent'>Procedure for consideration of dispute situations:</p>
                <p className='paragraphContent'>The affiliate program does not accept for consideration and does not consider disputable appeals for lost profits.</p>
                <p className='paragraphContent'>All requests must be sent to the email address support@valor.casino</p>
                <p className='paragraphContent'>Consideration of Partner requests and resolution of disputes:</p>
                <p className='paragraphContent'>The parties are trying to settle all disputes through negotiations and correspondence. The Partner's requests are accepted by the Affiliate Program for consideration only in writing and no later than three calendar days from the date of the dispute.</p>
                <p className='paragraphContent'>All requests of the Partner are considered official and are considered as requests in writing form, by e-mail to the addresses of the relevant services of the Affiliate Program. Written appeals made with the help of online communication programs, such as Telegram and other messengers, are not considered written.</p>
                <p className='paragraphContent'>The Affiliate program has the right to refuse to consider an application in the following cases:</p>
                <p className='paragraphContent'>if the application does not meet the conditions listed in this paragraph of the Agreement;</p>
                <p className='paragraphContent'>The term of consideration of the Partner's claim Affiliate Program is no more than twenty working days from the date of receipt of all necessary and sufficient data from the Partner related to this claim and necessary for its resolution.</p>
                <p className='paragraphContent'>In case of failure to reach an agreement through negotiations and correspondence within 3 (three) months from the moment of the dispute, its further consideration takes place in court in accordance with the current legislation (at the place of registration of the ValorBet Partners Affiliate Program).</p>
            </div>
        </div>
    </div>
    )
}


export default ModalTerms