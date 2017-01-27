/**
 * This is just a dummy test to verify parallelism
 */
describe('Math', function() {

  it('can adds two numbers', function() {
    console.log(global.foo)
    global.foo = 'bar'
    expect(2 + 2).toEqual(4)
  })

})
