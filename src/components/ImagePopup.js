function ImagePopup(props) {
    return (
        <div className={`popup ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup__image-container">
                <figure className="popup__figure">
                    <img
                        className="popup__image-full"
                        src={props.card ? props.card.link : '#'}
                        alt={props.card ? props.card.name : ''}
                    />
                    <figcaption className="popup__image-tittle">
                        {props.card ? props.card.name : ''}
                    </figcaption>
                </figure>
                <button
                    type="button"
                    className="popup__close"
                    onClick={props.onClose}
                ></button>
            </div>
        </div>
    )
}

export default ImagePopup;