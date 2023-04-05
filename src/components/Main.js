import React, { useState, useEffect } from 'react';
import Card from '../components/Card'
import { api } from '../utils/Api'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        api.getUserInfo().then((data) => {
            setUserName(data.name)
            setUserDescription(data.about)
            setUserAvatar(data.avatar)
        })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img
                        className="profile__avatar"
                        src={userAvatar}
                        alt="Изображение профиля"
                    />
                    <button
                        type="button"
                        className="profile__avatar-edit-button"
                        onClick={onEditAvatar}
                    >
                    </button>
                </div>
                <div className="profile__info">
                    <div className="profile__info-wrapper">
                        <h1 className="profile__title">{userName}</h1>
                        <button
                            className="profile__edit-btn"
                            aria-label="Редактирование профиля"
                            type="button"
                            onClick={onEditProfile}
                        >
                        </button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button
                    className="profile__add-btn"
                    type="button"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section arial-label="Фотогарелея пользователя" className="elements-container">
                <ul className="elements">
                    {cards.map((card) => <Card key={card._id}
                        card={card}
                        onCardClick={onCardClick}
                    />)}
                </ul>
            </section>
        </main>
    )
}

export default Main;