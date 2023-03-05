import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
(() => {
  const gallery = {
    galleryArea: document.querySelector('.gallery'),
    init: function () {
      this.galleryCreate();
      this.galleryArea.addEventListener(
        'click',
        function (event) {
          this.galleryClickHandler(event);
        }.bind(this)
      );
    },
    galleryCreate() {
      let galleryItem = []; //array of images with html code
      for (let i = 0; i < galleryItems.length; i++) {
        const { preview, original, description } = galleryItems[i];
        galleryItem[
          i
        ] = `<a class="gallery__item" href="${original}"><img class="gallery__image" src=" ${preview}" alt=" ${description}"/></a>`;
      }
      let galleryToPublish = galleryItem.map(image => image).join(''); //building one string from array
      this.galleryArea.insertAdjacentHTML('afterbegin', galleryToPublish); //adding elements to ul
    },
    galleryClickHandler: function (event) {
      event.preventDefault();
      if (event.target.nodeName !== 'IMG') {
        return;
      }
      //   let instanceSimpleLightbox = new SimpleLightbox('.gallery a');
      let instanceSimpleLightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250',
      });
      instanceSimpleLightbox.on('error.simplelightbox', function (e) {
        console.log(e); // some usefull information
      });
    },
  };
  gallery.init();
})();

// Zadanie 1 - biblioteka SimpleLightbox
// Wykonuj to zadanie w plikach 01-gallery.html i 01-gallery.js. Rozbij je na kilka podzadań:

// - Dodaj bibliotekę SimpleLightbox jako zależność projektu używając npm (link do CDN z Twojej poprzedniej pracy nie jest już potrzebny).
// - Użyj swojego kodu JavaScript z poprzedniej pracy domowej, ale zrealizuj refaktoryzację uwzględniając to, że biblioteka została zainstalowana przez npm (składnia import/export).
// Aby umieścić kod CSS biblioteki w projekcie, należy dodać jeszcze jeden import, oprócz tego opisanego w dokumentacji.

// // Opisany w dokumentacji
// import SimpleLightbox from "simplelightbox";
// // Dodatkowy import stylów
// import "simplelightbox/dist/simple-lightbox.min.css";
