import { nanoid } from 'nanoid';
import { idSize } from '../../services/utils';
import { SET_PLANETS, DELETE_PLANET, ADD_PLANET, UPDATE_PLANET, CHANGE_BELOVED_STATUS } from '../actions/planets';

const initialState = {
  allPlanets: []
}

function planets(state = initialState, action) {
  switch(action.type) {
    case SET_PLANETS:
      return {...state,
        allPlanets: action.planets
      };

    case DELETE_PLANET:
      return {...state,
        allPlanets: state.allPlanets.filter(planet => planet.id !== action.id)
      };

    case ADD_PLANET:
      return {...state,
        allPlanets: [...state.allPlanets, {...action.planetData, beloved: false, id: nanoid(idSize)}]
      };

    case UPDATE_PLANET:
      return {...state,
        allPlanets: state.allPlanets.map(planet =>  
          planet.id === action.planetData.id ? action.planetData : planet
        )
      };

    case CHANGE_BELOVED_STATUS:
      return {...state,
        allPlanets: state.allPlanets.map((planet) => {
          return planet.id === action.id ? {...planet, beloved: !planet.beloved} : planet
      })
      };

    default:
      return state;
  }
}

export default planets;