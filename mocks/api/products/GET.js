const products = [
  {
    "id": 1,
    "email": "Jorgeddrv@gmail.com",
    "password": "abcd.1234",
    "first_name": "Jorge",
    "last_name": "Romero"
  },
  {
    "id": 3,
    "email": "Jorgeddrv@gmail.com",
    "password": "abcd.1234",
    "first_name": "Jorge 2",
    "last_name": "Romero 2"
  },
  {
    "id": 4,
    "email": "Jorgeddrv@gmail.com",
    "password": "abcd.1234",
    "first_name": "Jorge 2",
    "last_name": "Romero 2"
  },
  {
    "id": 5,
    "email": "Jorgeddrv@gmail.com",
    "password": "abcd.1234",
    "first_name": "Jorge",
    "last_name": "Romero"
  }];

const DELAY = 3000;

module.exports = (products, res) => {
  setTimeout(() => {
    res.status(200).json(products);
  }, DELAY);
};
