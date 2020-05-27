module.exports = {
    async up(db, client) {
        const getCategoryId = async (name) => {
            return db.collection('categories').findOne({name: name}).then( category => {
                return category._id
            })
        }

        const products = [
            {
                name: 'L.A. Noire: The Complete Edition',
                price: 20,
                image_url: 'https://www.mobygames.com/images/covers/l/437137-l-a-noire-the-complete-edition-playstation-4-front-cover.jpg',
                category_id: await getCategoryId('Action')
            },
            {
                name: 'God of War',
                price: 35.98,
                image_url: 'https://www.mobygames.com/images/covers/l/474565-god-of-war-playstation-4-front-cover.png',
                category_id: await getCategoryId('Action')
            },
            {
                name: 'Limbo',
                price: 3.50,
                image_url: 'https://www.mobygames.com/images/covers/l/300355-limbo-playstation-4-front-cover.jpg',
                category_id: await getCategoryId('Action')
            },
            {
                name: 'Gran Turismo: Sport',
                price: 23.99,
                image_url: 'https://www.mobygames.com/images/covers/l/602489-gran-turismo-sport-playstation-4-front-cover.jpg',
                category_id: await getCategoryId('Racing')
            },
            {
                name: 'Need for Speed',
                price: 12.50,
                image_url: 'https://www.mobygames.com/images/covers/l/315555-need-for-speed-playstation-4-front-cover.jpg',
                category_id: await getCategoryId('Racing')
            },
            {
                name: 'Dark Souls III',
                price: 4,
                image_url: 'https://www.mobygames.com/images/covers/l/328136-dark-souls-iii-playstation-4-front-cover.jpg',
                category_id: await getCategoryId('RPG')
            },
            {
                name: 'FIFA 18',
                price: 6.99,
                image_url: 'https://www.mobygames.com/images/covers/l/450978-fifa-18-playstation-4-front-cover.png',
                category_id: await getCategoryId('Sports')
            },
            {
                name: 'FIFA 19',
                price: 6.99,
                image_url: 'https://www.mobygames.com/images/covers/l/510591-fifa-19-playstation-4-front-cover.png',
                category_id: await getCategoryId('Sports')
            },
            {
                name: 'FIFA 20',
                price: 12.99,
                image_url: 'https://www.mobygames.com/images/covers/l/595101-fifa-20-playstation-4-front-cover.png',
                category_id: await getCategoryId('Sports')
            },
            {
                name: 'Fez',
                price: 3.99,
                image_url: 'https://www.mobygames.com/images/covers/l/280974-fez-playstation-3-front-cover.jpg',
                category_id: await getCategoryId('Indie')
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
