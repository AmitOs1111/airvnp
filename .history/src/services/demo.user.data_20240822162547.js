export const dataUserService = {
  getDataUsers,
}

const dataUsers = [
  {
    fullname: 'puki pu',
    password: 'puki123',
    mail: 'puki@gmail.com',
  },
  {
    fullname: 'muki mu',
    password: 'muki123',
    mail: 'muki@gmail.com',
  },
]

function getDataUsers() {
  return dataUsers
}
