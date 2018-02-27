const defaultState = {
    city: '',
    history: [],
    search: {}
};

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        // Here in the case of the update description action 
        case 'SEARCH_BTN_FULFILLED': {
          // we'll return an object
          const date = new Date().toString();
          console.log(state.history);
          return {
            // with all the previous state
            ...state,
            // but overwriting the description
            search: payload, 
            history: [...state.history,{city:payload.city.name, date}]
          };
        }
        case 'SEARCH_BTN_PENDING': {
            // we'll return an object
            return {
              // with all the previous state
              ...state,
              // but overwriting the description
              search: 'loading'
            };
          }

          case 'UPDATE_SEARCH': {
            // we'll return an object
            console.log(payload);
            return {
              // with all the previous state
              ...state,
              // but overwriting the description
              city: payload
            };
          }


        default : {return state}

    }

}