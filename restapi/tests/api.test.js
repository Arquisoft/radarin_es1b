const request = require('supertest');
const server = require('./server-for-tests')

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await server.startdb()
    app = await server.startserver()
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => await server.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await server.closeServer() //finish the server
    await server.closeDB()
})

/**
 * Product test suite.
 */
describe('user ', () => {
    /**
     * Test that we can list users without any error.
     */
    it('can be listed',async () => {
        const response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        username = 'Pablo'
        email = 'pablo@uniovi.es'        
        admin = 'false';
        status = 'offline';
        const response = await request(app).post('/api/users/add').send({nombre: username,webId: email})
        expect(response.statusCode).toBe(200);
        expect(response.body.nombre).toBe(username);
        expect(response.body.webId).toBe(email);

    });

    it('show de list of users empty', async () => {
        const response = await request(app).post('/api/users/list')
        expect(response.statusCode).toBe(404);

    });

    it('/users/remove', async () => {
        username = 'Pablo'
        email = 'pablo@uniovi.es'        
        admin = 'false';
        status = 'offline';
        const response = await request(app).post('/api/users/add').send({nombre: username,webId: email})
        expect(response.statusCode).toBe(200);
        const response2 = await request(app).post('/api/users/remove').send({webId: email})
        expect(response2.statusCode).toBe(200);
    });
    
    it('/users/lastTime/update', async () => {
        username = 'Pablo'
        email = 'pablo@uniovi.es'        
        admin = 'false';
        status = 'offline';
        const response = await request(app).post('/api/users/add').send({nombre: username,webId: email})
        expect(response.statusCode).toBe(200);
        date = new Date();
        const response2 = await request(app).post('/api/users/lastTime/update').send({webId: email, time: date})
        expect(response2.statusCode).toBe(200);
        //console.log(response2.body)
        const date2=response2.body.time;
        expect(new Date(date2)).toStrictEqual(date)
        expect(response2.body.webId).toBe(email);
    });

    

    it('change status', async () => {
        username = 'Pablo'
        email = 'pablo@uniovi.es'        
        admin = 'false';
        status = 'offline';
        const response = await request(app).post('/api/users/add').send({nombre: username,webId: email})
        expect(response.statusCode).toBe(200);
        status = 'online';
        const response2 = await request(app).post('/api/users/status/update').send({webId: email, status: status})
        expect(response2.statusCode).toBe(200);
        console.log(response2.body)
        //expect(response2.body.status).toBe(status);
        expect(response2.body.webId).toBe(email);
    });

});
