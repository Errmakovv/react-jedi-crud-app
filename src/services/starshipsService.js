import { nanoid } from 'nanoid'
import { idSize, url } from './utils'
import Joi from '@hapi/joi'

export const starshipColumns = [
  'name',
  'model',
  'cost_in_credits',
  'length',
  'passengers'
]

export const starshipSchema = Joi.object({
  name: Joi.string()
      .max(35)
      .required(),

  model: Joi.string()
      .max(35)
      .required(),

  cost_in_credits: Joi.number()
      .allow('unknown') 
      .required(),

  length: Joi.string()
      .pattern(/^[0-9]*[.,]?[0-9]+$/, 'numbers')
      .required(),

  passengers: Joi.string()
      .pattern(/^[0-9]*[.,]?[0-9]+$/, 'numbers')
      .allow('n/a') 
      .required(),
  id: Joi.string()
})

export const getStarships = async () => {
  if(localStorage.getItem('starships')) {
    return JSON.parse(localStorage.getItem('starships'));
  }
  const peopleResponse = await (await fetch(`${url}/starships`)).json();

  return  peopleResponse.results.map(({name, model, cost_in_credits, length, passengers}) => ({
      name, model, cost_in_credits, length, passengers, id: nanoid(idSize)
  }))
}