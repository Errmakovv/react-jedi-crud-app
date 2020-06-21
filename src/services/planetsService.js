import { nanoid } from 'nanoid'
import { idSize, url, proxyUrl } from './utils'
import Joi from '@hapi/joi'

export const planetColumns = [
  'name',
  'surface_water',
  'population',
  'rotation_period',
  'diameter'
]

export const planetSchema = Joi.object({
  name: Joi.string()
      .max(35)
      .required(),

  surface_water: Joi.number()
      .allow('unknown') 
      .required(),

  population: Joi.number()
      .allow('unknown') 
      .required(),

  rotation_period: Joi.number()
      .required(),

  diameter: Joi.number()
      .required(),
  id: Joi.string()
})

export const getPlanets = async () => {
  if(localStorage.getItem('planets')) {
    return JSON.parse(localStorage.getItem('planets'));
  }
  const peopleResponse = await (await fetch(`${proxyUrl}${url}/planets`)).json();

  return  peopleResponse.results.map(({name, surface_water, population, rotation_period, diameter}) => ({
      name, surface_water, population, rotation_period, diameter, id: nanoid(idSize)
  }))
}