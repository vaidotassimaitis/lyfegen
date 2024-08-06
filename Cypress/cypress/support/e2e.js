import './commands'

beforeEach(() => {
cy.intercept('/api/**', (req) =>
    req.on('response', (res) => {
      //expect(res.statusCode).to.equal(200);
    })
  )
  .as('Response_Code_Check');
});