const { resourceRepository } = require('../repository');
const { generateToken } = require('../libs/token');
const { generate: generateId} = require('../libs/idGenerator');

const getToken = async () => {
  const id = generateId()
  const token = await generateToken(id)   
  const response = {
    token,
  }
  
  return Promise.resolve(response)
}

const authenticate = () => {
  const response = {
    authenticated: true,
    message: 'You are now authenticated'
  }

  return Promise.resolve(response)
}

module.exports = {
  authenticate,
  getToken,
};
