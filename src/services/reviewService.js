const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/reviewlist`

async function create(review) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}

export {
  create,
  getAll,
}