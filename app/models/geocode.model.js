const { setDefaults, fromAddress } = require("react-geocode")

setDefaults({
    key: 'AIzaSyC7sEQLuAlk3tHkiAyPbrHAfq5QRycH8Ww',
    language: 'en',
    region: 'gb'
});

exports.fetchLocations = (address) => {
    return fromAddress(`${address}, UK`)
        .then(({ results }) => {
            const addresses = results.map((result) => {
                return {
                    address: result.formatted_address,
                    location: result.geometry?.location
                }
            });

            return addresses;
        })
}
