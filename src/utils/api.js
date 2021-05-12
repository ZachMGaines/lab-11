import request from 'superagent';

const URL = '/api/mortalkombat';

export async function getCharacters() {
  const response = await request.get(URL);
  return response.body;
}

export async function getCharacter(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addCharacter(character) {
  const response = await request.post(URL).send(character);
  return response.body;
}

export async function deletCharacter(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateCharacter(character) {
  const response = await request.put(`${URL}/${character.id}`).send(character);
  return response.body;
}