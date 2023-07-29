import qr_code from '../images/qr-code.svg';

const Card = () => {
    return (
        <div className="card">
            <div className="card__image-content">
                <img src={qr_code} alt="" className='card__image-content--qrcode' />
            </div>
            <div className='card__text-content'>
                <h2 className='card__text-content--title'>Improve your front-end skills by building projects</h2>
                <p className='card__text-content--desc'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}

export default Card;