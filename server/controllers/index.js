var Render = require('../render'),
    render = Render.render;

function getContent(req, res) {
    var hello = 'Hello';
    var world = 'World';
    render(req, res, {
        view: 'page-index',
        title: 'Main page',
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name'
            }
        },
        hello: hello,
        world: world
    });
}

module.exports = {
    getContent
};
