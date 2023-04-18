import React from 'react'
import PopupWithForm from './PopupWithForm'

    function AddPlacePopup(props) {
        const [name, setName] = React.useState('')
        const [link, setLink] = React.useState('')

        function handleNameChange(e) {
            setName(e.target.value)
        }

        function handleLinkChange(e) {
            setLink(e.target.value)
        }

        function handleSubmit(e) {
            e.preventDefault()
            props.onAddPlace({
                name: name,
                link: link,
            })
        }

        return (
            <PopupWithForm
                name='new-card'
                title='Новое место'
                buttonText='Создать'
                isOpen={props.isOpen}
                onClose={props.onClose}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    id="placeName-input"
                    name="name"
                    className="popup__item popup__item_type_name"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    onChange={handleNameChange}
                />
                <span className="popup__input-error placeName-input-error"></span>
                <input
                    type="url"
                    id="placeUrl-input"
                    name="link"
                    className="popup__item popup__item_type_about"
                    placeholder="Ссылка на картинку"
                    required
                    onChange={handleLinkChange}
                />
                <span className="popup__input-error placeUrl-input-error"></span>
            </PopupWithForm>
        )
    }

export default AddPlacePopup;