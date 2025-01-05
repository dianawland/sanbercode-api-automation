//Check if the response status code is 200 (OK)//

pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});

// check available  fictionBooks//
pm.test("status code is 200", () => {
  pm.response.to.have.status(200);
});

const response = pm.response.json();

const fictionBooks = response.filter((book) => book.available === true);

const book = fictionBooks[0];

pm.test("Book Found", () => {
  pm.expect(book).to.be.an("object");
  pm.expect(book.available).to.be.true;
  pm.expect(book.available).to.eql(true);
  pm.expect(book.type).to.eql("fiction");
});

pm.globals.set("bookId", fictionBooks[0].id);

//check book stock//
pm.test("Is in Stock", () => {
  pm.expect(response["current-stock"]).to.be.above(0);
});

//check order id book//
pm.globals.set("orderid", response.orderid);

//delete book//
postman.setNextRequest("List of books");
