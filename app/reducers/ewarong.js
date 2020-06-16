import {
  EWARONG,
  EWARONG_DISTRICTS_VILLAGES,
  EWARONG_ITEMS,
  EWARONG_PARAMS,
  EWARONG_MYORDERS,
} from '../constants/actionTypes';

const initialState = {
  ewarong: null,
  alldistricts: [],
  allItems: [],
  myorders: [],
  filters: {
    timefilter: null,
    itemfilter: [],
    latitude: null,
    longitude: null,
    villagefilter: null,
    districtfilter: null,
    rangekm: 1,
    showRadius: false,
    usemylocation: false,
  },
};

const reducer = (state = initialState, action) => {
  const {payload, type} = action;
  switch (type) {
    case EWARONG: {
      return {
        ...state,
        ewarong: payload,
      };
    }
    case EWARONG_DISTRICTS_VILLAGES: {
      return {
        ...state,
        alldistricts: payload,
      };
    }
    case EWARONG_ITEMS: {
      return {
        ...state,
        allItems: payload,
      };
    }
    case EWARONG_MYORDERS: {
      return {
        ...state,
        myorders: payload,
      };
    }
    case EWARONG_PARAMS: {
      console.log(payload);
      return {
        ...state,
        filters: {
          ...initialState.filters,
          ...payload,
        },
      };
    }
    case 'RESET_STATE': {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
