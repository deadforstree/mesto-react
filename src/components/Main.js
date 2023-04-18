import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card'
import { api } from '../utils/Api'
import { CurrentUserContext } from '../contexts/CurentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, handleCardLike, handleCardDelete, cards }) {
    const currentUser = useContext(CurrentUserContext)

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img
                        className="profile__avatar"
                        src={currentUser.avatar}
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
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button
                            className="profile__edit-btn"
                            aria-label="Редактирование профиля"
                            type="button"
                            onClick={onEditProfile}
                        >
                        </button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
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
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />)}
                </ul>
            </section>
        </main>
    )
}

export default Main;