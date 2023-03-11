import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" 
    href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
    </a>`})
    .join("");

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', 
{ 
    caption: true, 
    captionSelector: 'img[alt]', 
    captionType: 'attr', 
    captionsData: 'alt', 
    captionPosition: 'bottom', 
    captionDelay: 250 
}); 

console.log(galleryItems);
