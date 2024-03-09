module.exports = {
  "name": "jaidee",
  "version": "0.0.1",
  "rewrites": [
    {
      "from": "/",
      "to": "/jaidee/pages/home"
    },
    {
      "from": "/desk",
      "to": "/jaidee/pages/desk"
    },
    {
      "from": "/calculator",
      "to": "/jaidee/pages/calculator"
    },
    {
      "from": "/app/:app/:path*",
      "to": "/:app/pages/:path*"
    },
  ]
}