const { getRentCars } = require('./getRentCars')
const { createRentCar } = require('./createRentCars')
const { deleteRentCar } = require('./deleteRentCar')
const { updateRentalCar } = require('./updateRentalCar')

module.exports = {
    getRentCars,
    createRentCar,
    deleteRentCar,
    updateRentalCar,
}