/* eslint-disable semi */
import Joi from 'joi';
import IProduct from '../interfaces/IProduct';

const validateProduct = Joi.object({
  produto: Joi.string().max(60).required(),
  valor: Joi.number().min(0).required(),
  descricao: Joi.string().required(),
});

const joiValidation = (payload: Partial<IProduct>) => {
  const { error } = validateProduct.validate(payload);
  if (error) {
    throw new Error(error.details[0].message);
  }
}

export default joiValidation;
