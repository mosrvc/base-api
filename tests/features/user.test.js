const request = require('supertest')

let app


describe('Test User Feature Endpoint', () => {

  test('GET users, success', async () => {
    let sehat = true
    expect(sehat).toBe(true)
    app = require('../../app')

    const result = await request(app).get('/api/users')

    expect(result.statusCode).toBe(200)
    expect(result.body).toHaveProperty('nama', 'jimmy')
    expect(result.body).toHaveProperty('age', 17)


  })

  test('POST users, success', async () => {
    let sehat = true
    expect(sehat).toBe(true)
    app = require('../../app')

    const result = await request(app).post('/api/users').send({ name: 'Manny', species: 'cat' })

    expect(result.statusCode).toBe(200)

    // let checkData = queryLastInsertedRows();
    // [], [{nama: 'Yosteven'}]

    // expect(checkData).toBe([{nama: 'Yosteven'}])

    // let checkData2 = queryLastInsertedRows();
    // [], [{nama: 'Yosteven'}]

    // expect(checkData2).toBe([{nama: 'Yosteven'}])
  })

})