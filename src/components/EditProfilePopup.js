import React, { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurentUserContext';

function EditProfilePopup(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name='profile-edit'
            title='Редактировать профиль'
            buttonText='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input
                name="userName"
                type="text"
                className="popup__item popup__item_type_name"
                id="userName-input"
                placeholder="Имя"
                minLength="2"
                maxLength="40" pattern="^[a-zA-Zа-яА-я-\s]+$"
                required
                value={name || ''}
                onChange={handleNameChange}
            />
            <span className="popup__input-error userName-input-error"></span>
            <input
                name="userAbout"
                type="text"
                className="popup__item popup__item_type_about"
                id="userAbout-input"
                placeholder="Профессия"
                minLength="2"
                pattern="^[a-zA-Zа-яА-я-\s]+$"
                maxLength="200"
                required
                value={description}
                onChange={handleDescriptionChange}
            />
            <span className="popup__input-error userAbout-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;

