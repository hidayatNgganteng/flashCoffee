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
    clock_out: '10:00'
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
    clock_out: '10:00'
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
    clock_out: '10:00'
  },
  {
    id: "6",
    store_name: 'Flash Coffee Tegal',
    address: 'Tegal Flash Coffee, Jl Batutulis no 19 Tegal',
    image: require('../assets/images/flash-coffee-space-2.jpeg'),
    date: '2021-11-06',
    shop_open_hours: '08:00',
    shope_closing_hours: '21:00',
    clock_in: '06:00',
    clock_out: '21:00'
  },
  {
    id: "7",
    store_name: 'Flash Coffee Yogyakarta',
    address: 'Jl Laksda adisucipto, Dekat Bandara lama',
    image: require('../assets/images/flash-coffee-space-3.jpeg'),
    date: '2021-11-07',
    shop_open_hours: '08:00',
    shope_closing_hours: '21:00',
    clock_in: null,
    clock_out: null
  }
]

export const getSchedules = () => new Promise((resolve, reject) => {
  resolve(store)
})