const userService = require('../service/userService.js')

const userRoutes = [{
    path: '/user/',
    method: 'get',
    callback: (req, res) => {
        res.send("Olá mundo!");
    }
},
{
    path: '/user/register',
    method: 'post',
    callback: (req, res) => {
        console.log(req.body)
        userService.createUser(req.body)
    }
}
]


module.exports = userRoutes;