import { nanoid } from 'nanoid';
import { idSize } from '../../services/utils';
import { SET_STARSHIPS, DELETE_STARSHIP, ADD_STARSHIP, UPDATE_STARSHIP, CHANGE_BELOVED_STATUS } from '../actions/starships';

const initialState = {
  allStarships: []
}

function starships(state = initialState, action) {
  switch(action.type) {
    case SET_STARSHIPS:
      return {...state,
        allStarships: action.starships
      };

    case DELETE_STARSHIP:
      return {...state,
        allStarships: state.allStarships.filter(starship => starship.id !== action.id)
      };

    case ADD_STARSHIP:
      return {...state,
        allStarships: [...state.allStarships, {...action.starshipData, beloved: false, id: nanoid(idSize)}]
      };

    case UPDATE_STARSHIP:
      return {...state,
        allStarships: state.allStarships.map(starship =>  
          starship.id === action.starshipData.id ? action.starshipData : starship
        )
      };

    case CHANGE_BELOVED_STATUS:
      return {...state,
        allStarships: state.allStarships.map((starship) => {
          return starship.id === action.id ? {...starship, beloved: !starship.beloved} : starship
      })
      };

    default:
      return state;
  }
}

export default starships;