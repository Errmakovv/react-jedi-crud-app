export const localSaver = store => next => action => {
  let result = next(action)
  const nextState = store.getState();
  localStorage.setItem('people', JSON.stringify(nextState.people.allPeople))
  localStorage.setItem('planets', JSON.stringify(nextState.planets.allPlanets))
  localStorage.setItem('starships', JSON.stringify(nextState.starships.allStarships))
  return result
}