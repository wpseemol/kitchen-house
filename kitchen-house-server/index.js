const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Server is running...');
});

app.listen(port, () => {
    console.log('Running Port: ' + port);
});

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
//come from dotenv.
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.s0x7bvc.mongodb.net/?retryWrites=true&w=majority`;

// Create a  MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)

        const kitchenHouse = client.db('kitchenHouse');

        const itemsCollection = kitchenHouse.collection('items');

        // app.get('/products', async (request, response) => {
        //     const cursorProducts = products.find();

        //     const resultProducts = await cursorProducts.toArray();
        //     response.send(resultProducts);
        // });
        // app.get('/cart-items', async (request, response) => {
        //     const cursorCartProduct = cartProduct.find();

        //     const resultCartProduct = await cursorCartProduct.toArray();
        //     response.send(resultCartProduct);
        // });
        // app.get('/', async (request, response) => {
        //     response.send('Server is Running ...');
        // });

        // app.get('/products/:category', async (request, response) => {
        //     const categoryId = request.params.category;
        //     const query = {
        //         'category.catId': categoryId,
        //     };
        //     const query2 = {
        //         catId: categoryId,
        //     };

        //     const options = {
        //         projection: {
        //             name: 1,
        //             price: 1,
        //             ImgUrl: 1,
        //             category: 1,
        //         },
        //     };

        //     const findCategory = await products.find(query, options);
        //     const findCategoryBenar = await categoryBenar.find(query2);

        //     const result = await findCategory.toArray();
        //     const result2 = await findCategoryBenar.toArray();

        //     response.json({
        //         category: result,
        //         categoryBenar: result2,
        //     });
        // });

        // // single product
        // app.get('/category/:id', async (request, response) => {
        //     const id = request.params.id;
        //     const query = {
        //         _id: new ObjectId(id),
        //     };
        //     const resultItems = await products.findOne(query);

        //     response.send(resultItems);
        // });

        // //single ite put method
        // app.put('/category/:id', async (request, response) => {
        //     const id = request.params.id;
        //     const query = {
        //         _id: new ObjectId(id),
        //     };

        //     const options = {
        //         upsert: true,
        //     };

        //     const { filteredObject } = request.body;

        //     const updateDoc = {
        //         $set: {
        //             ...filteredObject,
        //         },
        //     };

        //     const result = await products.updateOne(query, updateDoc, options);
        //     response.send(result);
        // });

        // // data post
        // app.post('/products', async (request, response) => {
        //     const product = request.body;

        //     const result = await products.insertOne(product);
        //     response.send(result);
        // });
        // add  item
        app.post('/item', async (request, response) => {
            const item = request.body;
            console.log('Item Uploaded');
            const result = await itemsCollection.insertOne(item);
            response.send(result);
        });

        // data deleted

        // app.delete('/card-item-remove/:id', async (request, response) => {
        //     const id = request.params.id;
        //     const query = {
        //         _id: new ObjectId(id),
        //     };

        //     const result = await cartProduct.deleteOne(query);
        //     response.send(result);
        // });
    } finally {
    }
}
run().catch(console.dir);
