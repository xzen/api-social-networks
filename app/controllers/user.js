/**
 * User
 * @class
 */
class User {
  constructor(app, connect) {
    this.app = app
    this.connect = connect

    this.create()
  }

  create () {
    this.app.post('/user/create', (req, res) => {
      try {
        res.status(200).json({
          code: 200,
          message: 'OK'
        })
      } catch {
        res.status(500).json({
          code: 500,
          message: 'Internal Server Error'
        })
      }
    })
  }
}

module.exports = User