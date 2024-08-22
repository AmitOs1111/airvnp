export const dataUserService = {
  getDataUsers,
}

const dataUsers = [
  {
    fullname: 'puki pu',
    password: 'puki123',
    mail: 'puki@pu.com',
  },
  {
    fullname: 'muki mu',
    password: 'muki123',
    mail: 'muki@mu.com',
  },
]

function getDataUsers() {
  return dataUsers
}
