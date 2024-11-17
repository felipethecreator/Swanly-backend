const postRoutes = [{
    path:'/post/', 
    method: 'get',
    callback: (req, res) => {
        res.send("Olá mundo!");
    }
}]

module.exports = postRoutes;