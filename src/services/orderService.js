import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/orders`


async function create(order) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(order)
  })
  return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL,
    {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
  return res.json()
}

async function fulfill(order) {
  const res = await fetch(`${BASE_URL}/${order._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(order)
  })
  return res.json()
}

export {
  create,
  getAll,
  fulfill,
}