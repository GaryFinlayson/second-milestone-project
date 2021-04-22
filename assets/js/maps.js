function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 50,
            lng: 13
        }
    });

    var locations = [
      ["Albania", 41.3278, 19.8184],
      ["Austria", 48.2073, 16.3723],
      ["Belarus", 53.8985, 27.5594],
      ["Belgium", 50.8473, 4.3504],
      ["Bosnia-Herzegovina", 43.8548, 18.4134],
      ["Bulgaria", 42.6975, 23.3220],
      ["Croatia", 45.8138, 15.9802],
      ["Cyprus", 35.1829, 33.3821],
      ["Czech-Republic", 50.0664, 14.4357],
      ["Denmark", 55.6743, 12.5696],
      ["Estonia", 59.4306, 24.7496],
      ["Finland", 60.1684, 24.9382],
      ["France", 48.8564, 2.3522],
      ["Germany", 52.5160, 13.4045],
      ["Greece", 37.9826, 23.7266],
      ["Hungary", 47.4925, 19.0429],
      ["Iceland", 64.1458, -21.9439],
      ["Ireland", 53.3460, -6.2674],
      ["Italy", 41.8969, 12.4973],
      ["Kosovo", 42.6629, 21.1652],
      ["Latvia", 56.9468, 24.1111],
      ["Lithuania", 54.6883, 25.2782],
      ["Luxembourg", 49.6116, 6.1318],
      ["Malta", 35.8989, 14.5146],
      ["Moldova", 47.0084, 28.8618],
      ["Montenegro", 42.4260, 19.2587],
      ["Netherlands", 52.3687, 4.8989],
      ["North-Macedonia", 41.9982, 21.4251],
      ["Norway", 59.9137, 10.7523],
      ["Poland", 52.2287, 21.0121],
      ["Portugal", 38.7223, -9.1396],
      ["Romania", 44.4267, 26.1009],
      ["Serbia", 44.8131, 20.4639],
      ["Slovakia", 48.1427, 17.0997],
      ["Slovenia", 46.0517, 14.5063],
      ["Spain", 40.4169, -3.7038],
      ["Sweden", 59.3268, 18.0687],
      ["Switzerland", 46.9479, 7.4471],
      ["Turkey", 39.9321, 32.8557],
      ["Ukraine", 50.4496, 30.5178],
      ["United-Kingdom", 51.5062, -0.1295]
    ];
  
    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: { lat: locations[i][1], lng: locations[i][2]},
        map,
        title: locations[i][0],
      });
    };
} 
// 41.327828819171415, 19.81845155575029
