const axios = require('axios');

const BE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

export async function registerConsumer(user) {
  try {
    const res = await axios.post(`${BE_URL}/consumer/auth/register`, { user });
    return res.json();
  } catch (e) {
    throw (e);
  }
}
  
export async function loginConsumer(user) {
  try {
    const res = await axios.post(`${BE_URL}/consumer/auth/login`, { user });
    return res.json();
  } catch (e) {
    throw (e);
  }
}

export async function registerPartner(user) {
  try {
    const res = await axios.post(`${BE_URL}/partner/auth/register`, { user });
    return res.json();
  } catch (e) {
    throw (e);
  }
}

export async function loginPartner(user) {
  try {
    const res = await axios.post(`${BE_URL}/partner/auth/login`, { user });
    return res.json();
  } catch (e) {
    throw (e);
  }
}
