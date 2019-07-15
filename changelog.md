- ProductComponent is responsible for showing ProductModel, which receive through Input
- ProductListComponent is responsible for showing list of products using ProductComponent. A list of the products received from ProductsService.
- When "click" on "Buy" button triggered ProductComponent emits event with ProductModel on which button was clicked and pass it to the Output. ProductListComponent handles event from ProductComponent and calls CartService to add new ProductModel to the cart.
- CartService uses Subject and Observable to show changes in real time : adding a new product the the cart

Посмотрите пункт 12.7
