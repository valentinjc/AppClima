const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

//lugar.getLugar(argv.direccion)
//    .then(console.log);

//clima.getClima(18.160000, -92.120003)
//.then(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugar(direccion);

        const temp = await clima.getClima(coords.lat, coords.lon);

        return `El clima de ${direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo obtener el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)