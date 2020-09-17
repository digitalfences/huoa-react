import axios from 'axios';

import { GET_PAGES, GET_HEROS, MODAL_OPEN, MODAL_CLOSE } from './actionTypes';

const API = 'https://dev.huoa.org/wp-json';
const PRODUCTION = 'https://huoa-dev.netlify.app/';

export const getPages = () => async (dispatch) => {
  if (document.location.origin !== PRODUCTION) {
    const response = await axios.get(`${API}/wp/v2/pages?page=1&per_page=100`);
    const data = response.data.reduce((allData, { slug, title, acf }) => ({ ...allData, [slug]: { title: title.rendered, ...acf }}), {});

    dispatch({ type: GET_PAGES, payload: data });
  }
};

export const getHeros = () => async (dispatch) => {
  if (document.location.origin !== PRODUCTION) {
    const { data } = await axios.get(`${API}/wp/v2/heros?page=1&per_page=100`);

    dispatch({ type: GET_HEROS, payload: data });
  }
};

export const openModal = (modalContent) => {
  return {
    type: MODAL_OPEN,
    payload: modalContent
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};
