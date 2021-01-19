module.exports = {
    secret: "secretpassword",
    port: process.env.PORT || 5000,
    production: process.env.NODE_ENV === 'production',
    baseUrl: "http://localhost:5000"
}