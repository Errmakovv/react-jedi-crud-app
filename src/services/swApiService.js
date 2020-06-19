import { nanoid } from 'nanoid'

const size = 8
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const url = 'https://swapi.dev/api'

export const getPeople = async () => {
  if(localStorage.getItem('people')) {
    console.log('local people');
    return JSON.parse(localStorage.getItem('people'));
  }
  console.log('api people')
  const peopleResponse = await (await fetch(`${url}/people`)).json();

  return  peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
      name, height, mass, gender, birth_year, id: nanoid(size)
  }))
}

export const getPlanets = async () => {
  if(localStorage.getItem('planets')) {
    console.log('local planets');
    return JSON.parse(localStorage.getItem('planets'));
  }
  console.log('api planets')
  const peopleResponse = await (await fetch(`${proxyUrl}${url}/planets`)).json();

  return  peopleResponse.results.map(({name, surface_water, population, rotation_period, diameter}) => ({
      name, surface_water, population, rotation_period, diameter, id: nanoid(size)
  }))
}

export const getStarships = async () => {
  if(localStorage.getItem('starships')) {
    console.log('local starships');
    return JSON.parse(localStorage.getItem('starships'));
  }
  console.log('api starships')
  const peopleResponse = await (await fetch(`${url}/starships`)).json();

  return  peopleResponse.results.map(({name, model, cost_in_credits, length, passengers}) => ({
      name, model, cost_in_credits, length, passengers, id: nanoid(size)
  }))
}