import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  function onCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
      />
      <Footer />
      <PopupWithForm
        name='edit'
        title='Редактировать профиль'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="userName-input" name="userName" className="popup__item popup__item_type_name"
          placeholder="Введите ваше имя" required minLength="2" maxLength="40" />
        <span className="popup__input-error userName-input-error"></span>
        <input type="text" id="userAbout-input" name="userAbout" className="popup__item popup__item_type_about"
          placeholder="Добавьте описание" required minLength="2" maxLength="200" />
        <span className="popup__input-error userAbout-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='delete'
        title='Вы уверены?'
        buttonText='Да'
      />

      <PopupWithForm
        name='avatar-edit'
        title='Обновить аватар'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input name="userAvatar" type="url" className="popup__item popup__item_type_about" id="userAvatar-input"
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error userAvatar-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='new-card'
        title='Новое место'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="placeName-input" name="name" className="popup__item popup__item_type_name"
          placeholder="Название" required minLength="2" maxLength="30" />
        <span className="popup__input-error placeName-input-error"></span>
        <input type="url" id="placeUrl-input" name="link" className="popup__item popup__item_type_about"
          placeholder="Ссылка на картинку" required />
        <span className="popup__input-error placeUrl-input-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
