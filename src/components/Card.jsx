import qr_code from '../images/qr-code.svg';

const Card = () => {
    return (
        <div className="card">
            <div className="card__image-content">
                <img src={qr_code} alt="" />
            </div>
        </div>
    )
}

export default Card;