import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurentUserContext';

function Card(props) {
    const currentUser = useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === currentUser._id
    const isLiked = props.card.likes.some((item) => item._id === currentUser._id)
    const cardDeleteButtonClassName = (
        `elements__delete-btn ${isOwn ? '' : 'elements__delete-btn_state_hidden'}`
    )
    const cardLikeButtonClassName = (
        `elements__like-btn ${isLiked ? 'elements__like-btn_active' : ''}`
    )

    function handleCardClick() {
        props.onCardClick(props.card)
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <li className="elements__card">
            <button
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}
            >
            </button>
            <div className="elements__image-container">
                <img
                    src={props.card.link}
                    className="elements__image"
                    alt={props.card.name}
                    onClick={handleCardClick}
                />
            </div>
            <div className="elements__title-wrapper">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like-wrapper">
                    <button
                        type="button"
                        className={cardLikeButtonClassName}
                        onClick={handleLikeClick}
                    >
                    </button>
                    <span className="elements__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card