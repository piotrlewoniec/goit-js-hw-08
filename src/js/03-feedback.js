'use strict';
import throttle from 'lodash.throttle';

(() => {
  const formObj = {
    formBind: document.querySelector('.feedback-form'),
    localStorageFormHolder: {
      email: '',
      message: '',
    },
    init: function () {
      try {
        const savedFormInputsValues = localStorage.getItem(
          'feedback-form-state'
        );
        if (savedFormInputsValues !== null) {
          this.localStorageFormHolder = JSON.parse(savedFormInputsValues);
          this.formBind.elements['email'].value =
            this.localStorageFormHolder.email;
          this.formBind.elements['message'].value =
            this.localStorageFormHolder.message;
        }
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
      this.formBind.addEventListener(
        'submit',
        function (event) {
          this.formSubmit(event);
        }.bind(this)
      );
      this.formBind.addEventListener(
        'input',
        throttle(this.formInput, 500).bind(this)
      );
    },
    formInput: function () {
      this.localStorageFormHolder.email = this.formBind.elements.email.value;
      this.localStorageFormHolder.message =
        this.formBind.elements.message.value;
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify(this.localStorageFormHolder)
      );
    },
    formSubmit: function (event) {
      event.preventDefault();
      if (this.localStorageFormHolder.email === '') {
        return console.log('Please fill email field!');
      }
      localStorage.removeItem('feedback-form-state');
      event.currentTarget.reset();
      console.log(this.localStorageFormHolder);
      for (key in this.localStorageFormHolder) {
        this.localStorageFormHolder[key] = '';
      }
    },
  };
  formObj.init();
})();

// Zadanie 3 - formularz kontaktowy
// W HTML znajduje się znacznik formularza. Napisz skrypt, który będzie zapisywał wartości pól w local storage, gdy użytkownik coś wpisuje.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Wykonuj to zadanie w plikach 03-feedback.html i 03-feedback.js. Rozbij je na kilka podzadań:

// Śledź w formularzu zdarzenie input, i za każdym razem zapisuj w local storage obiekt z polami email i message, w których przechowuj aktualne wartości pól formularza. Niech kluczem do storage będzie "feedback-form-state".
// Podczas przeładowywania strony sprawdzaj stan storage i jeśli są tam zapisane dane, wypełniaj nimi pola formularza. W przeciwnym wypadku pola powinny być puste.
// Po wysłaniu formularza wyczyść storage i pola formularza, a także wprowadź obiekt z polami email, message i ich aktualnymi wartościami do wiersza poleceń.
// Zrób tak, aby storage aktualizował się nie częściej niż raz na 500 milisekund. Aby to zrobić, użyj biblioteki lodash.throttle i dodaj ją do projektu.
