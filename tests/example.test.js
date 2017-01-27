describe('Jest Electron Runner', function() {

  it('has access to the window', function() {
    console.log(global.foo)
    global.foo = 'bar'
    expect(window).toEqual(global)
  })

  it('has access to the document', function() {
    expect(document).toEqual(global.document)
  })

})
