const {pecahString} = require('./playground')

let parameter = 'A';

describe("unit test for playground.js",  () => {
  beforeEach(() => {
    parameter = 'B';
  });

  afterEach(() => {
    // clearCityDatabase();
  });

  test('pecah string berhasil', async () => {
    // prepare condition
    let result = pecahString("test")
    expect(result).toBe('x')
  })

})
