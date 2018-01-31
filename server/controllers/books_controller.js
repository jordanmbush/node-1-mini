let books = [];
let id = 0;

module.exports = {
    create: ( req, res ) => {
        const {title, author} = req.body;
        books.push({id, title, author});
        id++;
        res.status(200).send( books );
    },
    read: ( req, res ) => {
        res.status(200).send( books );
    },
    update: (req, res) => {
        let index = books.findIndex( book => book.id === +req.params.id);

        books[index] = {
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author
        };

        res.status(200).send( books );
    },
    delete: (req, res) => {
        let index = books.findIndex( book => book.id === req.params.id);

        books.splice(index, 1);
        id--;
        res.status(200).send( books );
    }
}