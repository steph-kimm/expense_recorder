import apiUrl from '../apiConfig'
import axios from 'axios'

export const createExpense = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/expenses/',
    data: {
      expense: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// export const indexExpenses = (user) => {
//   return axios({
//     method: 'GET',
//     url: apiUrl + '/expenses/',
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

export const indexOwnedExpenses = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/expenses/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateExpense = (data, id, user) => {
  return axios({
    url: apiUrl + '/expenses/' + id,
    method: 'patch',
    data: { expense: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showExpense = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/expenses/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteExpense = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/expenses/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
