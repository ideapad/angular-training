Task 1:
- ProductComponent is responsible for showing ProductModel, which receive through Input
- ProductListComponent is responsible for showing list of products using ProductComponent. A list of the products received from ProductsService.
- When "click" on "Buy" button triggered ProductComponent emits event with ProductModel on which button was clicked and pass it to the Output. ProductListComponent handles event from ProductComponent and calls CartService to add new ProductModel to the cart.
- CartService uses Subject and Observable to show changes in real time : adding a new product the the cart

Task 2:
- Break application into several modules
- Using onPush strategy for cart and product items, Input and Output decorators for communcation with parent and child
- used ngOnInit, ngOnDestroy(for service), ngDoCheck and ngOnChanges
- Create custom directive for changing background using : HostListener and HostBindings decorators
- ngClass is used for changing background for products that are out of stock
- AppComponent shows text thru ViewChild and tempalte variable