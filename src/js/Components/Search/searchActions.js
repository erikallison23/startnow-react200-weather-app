import axios from 'axios';

export function updateSearch(city) {
  return {
      type: "UPDATE_SEARCH",
      payload: city
  }
}

export function searchBtn(search) {
  console.log('balls', search);
    return {
      type: 'SEARCH_BTN',
      payload: axios.get(`/weather/${search}`)
                    .then(res => {
                      console.log(res.data)
                      return res.data;
                    })
    };
  }