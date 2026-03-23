import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let query = '';
let totalHits = 0;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSubmit(e) {
  e.preventDefault();

  query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Enter search text!',
      position: 'topRight',
    });
    return;
  }

  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'No images found!',
        position: 'topRight',
      });
      return;
    }

    totalHits = data.totalHits;

    createGallery(data.hits);

    if (page * 15 < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Error occurred!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    const { height } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });

    if (page * 15 >= totalHits) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Error occurred!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
