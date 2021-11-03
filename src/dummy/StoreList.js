const store = [
  {
    id: "2",
    store_name: 'Mediterania Garden Residence',
    address: 'Main Lobby, Apartment Mediterania Garden Residence 1 (Bougenville South Of Jakarta)',
    image: require('../assets/images/flash-coffee-space.jpeg'),
    date: '2021-11-02',
    shop_open_hours: '08:00',
    shope_closing_hours: '17:00',
    clock_in: '09:00',
    clock_out: '10:00',
    isOpen: true
  },
  {
    id: "3",
    store_name: 'Mediterania Garden Residence',
    address: 'Main Lobby, Apartment Mediterania Garden Residence 1 (Bougenville South Of Jakarta)',
    image: require('../assets/images/flash-coffee-space.jpeg'),
    date: '2021-11-03',
    shop_open_hours: '08:00',
    shope_closing_hours: '17:00',
    clock_in: '09:00',
    clock_out: '10:00',
    isOpen: true
  },
  {
    id: "4",
    store_name: 'Mediterania Garden Residence',
    address: 'Main Lobby, Apartment Mediterania Garden Residence 1 (Bougenville South Of Jakarta)',
    image: require('../assets/images/flash-coffee-space.jpeg'),
    date: '2021-11-04',
    shop_open_hours: '08:00',
    shope_closing_hours: '17:00',
    clock_in: '09:00',
    clock_out: '10:00',
    isOpen: true
  }
]

export const getSchedules = () => new Promise((resolve, reject) => {
  resolve(store)
})