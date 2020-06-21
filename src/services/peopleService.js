import { nanoid } from 'nanoid'
import { idSize, url } from './utils'
import Joi from '@hapi/joi'

export const personColumns = [
  'name',
  'height',
  'mass',
  'gender',
  'birth_year',
]

export const personSchema = Joi.object({
  name: Joi.string()
      .max(35)
      .required(),

  height: Joi.number()
      .required(),

  mass: Joi.number()
      .required(),

  gender: Joi.string()
      .required(),

  birth_year: Joi.string()
      .required(),
  id: Joi.string()
})

export const getPeople = async () => {
  if(localStorage.getItem('people')) {
    console.log('local')
    return JSON.parse(localStorage.getItem('people'));
  }
  console.log('api')
  const peopleResponse = await (await fetch(`${url}/people`)).json();

  return  peopleResponse.results.map(({name, height, mass, gender, birth_year}) => ({
      name, height, mass, gender, birth_year, id: nanoid(idSize)
  }))
}