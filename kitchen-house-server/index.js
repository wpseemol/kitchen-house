const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

// Allow requests from 'http://localhost:5173'
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));
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
        const cardsCollection = kitchenHouse.collection('cards');

        //get all food items.
        app.get('/food-items', async (request, response) => {
            const cursorItems = itemsCollection.find();

            const resultItems = await cursorItems.toArray();
            response.send(resultItems);
        });

        // get single item
        app.get('/food-items/:id', async (request, response) => {
            const id = request.params.id;
            const query = {
                _id: new ObjectId(id),
            };
            const result = await itemsCollection.findOne(query);

            response.send(result);
        });

        // add  item
        app.post('/item', async (request, response) => {
            const item = request.body;
            console.log('Item Uploaded');
            const result = await itemsCollection.insertOne(item);
            response.send(result);
        });

        // add  item
        app.post('/card', async (request, response) => {
            const item = request.body;
            console.log('Item Add to Card');
            const result = await cardsCollection.insertOne(item);
            response.send(result);
        });
    } finally {
    }
}
run().catch(console.dir);
