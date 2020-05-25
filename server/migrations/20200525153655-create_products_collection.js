module.exports = {
    async up(db, client) {
        // TODO write your migration here.
        // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
        // Example:
        // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
        const products = [
            {
                name: 'game1',
                price: 30,
                description: 'desc1',
                image_url: 'localhost',
                category: {
                    data: db.collection('categories').findOne({name: 'Action'}).then( category => {
                        return category
                    }),
                    test: 'test'
                }
            }
        ]

        products.map(product => {
            db.collection('products').insertOne(
                product
            )
        })
    },

    async down(db, client) {
        // TODO write the statements to rollback your migration (if possible)
        // Example:
        // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
        await db.collection('products').drop();
    }
};
