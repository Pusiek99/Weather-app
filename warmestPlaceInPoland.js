const fetch = require('node-fetch');

const processWeatherData = async (data) => {
  const sorted = [...data].sort((a, b) => {
    if (b.temperatura > a.temperatura) return 1;
    if (a.temperatura > b.temperatura) return -1;
    return 0;
  });
  console.log(sorted[0]);
  // console.log(data);
  // let max = data[0].temperatura;
  // let index = 0;
  //
  // for (let i = 1; i < (data.length) - 1; i++) {
  //   if (data[i].temperatura > max) {
  //     max = data[i].temperatura;
  //     index = i;
  //   }
  // }
  // console.log(`Warmest place in poland is: ${data[index].stacja}, and it temperature is: ${max}`);
};

const findWarmestPlaceInPoland = async () => {
  try {
    const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
    const data = await res.json();
    await processWeatherData(data);
  } catch (e) {
    console.log('Oh no, error!:', e);
  }
};

findWarmestPlaceInPoland();
