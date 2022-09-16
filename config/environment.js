// file to store environment variables
const production = {
    name: 'production',
    mongodb_url: process.env.productAPI_mongodbURL,
    jwtSecret: process.env.productAPI_jwtSecret
}

module.exports = production;