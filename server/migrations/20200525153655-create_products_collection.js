module.exports = {
    async up(db, client) {
        const getCategoryId = async (name) => {
            return db.collection('categories').findOne({name: name}).then( category => {
                return category._id
            })
        }

        const products = [
            {
                name: 'game1',
                price: 30,
                description: 'desc1',
                image_url: 'localhost',
                category_id: await getCategoryId('Action')
            },
            {
                name: 'game2',
                price: 10,
                description: 'desc2',
                image_url: 'localhost',
                category_id: await getCategoryId('RPG')
            },
            {
                name: 'game3',
                price: 15,
                description: 'desc3',
                image_url: 'localhost',
                category_id: await getCategoryId('Puzzle')
            },
            {
                name: 'game4',
                price: 4,
                description: 'desc4',
                image_url: 'localhost',
                category_id: await getCategoryId('MMO')
            },
            {
                name: 'game5',
                price: 7,
                description: 'desc5',
                image_url: 'localhost',
                category_id: await getCategoryId('RPG')
            }
        ]

        products.map(product => {
            db.collection('products').insertOne(
                product
            )
        })
    },

    async down(db, client) {
        await db.collection('products').drop();
    }
};
