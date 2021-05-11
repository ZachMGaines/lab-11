import request from 'superagent';

const URL = 'https://sheltered-beyond-60460.herokuapp.com/api/mortalkombat';

export async function getCharacters() {
  const response = await request.get(URL);
  return response.body;
}

export async function getCharacter(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}