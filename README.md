# E-COMMERCE API
<p>This is the API of an E-commerce project! In this Project, user will be able to see different items, add them to cart, like them and other functionalities. The e-commerce's admin will be able to delete users and products.</p> <br/>

## Auth paths
To sign in, POST to => /login. <br/>
To Sign Up, POST to => /register. <br/>
To reset your password, POST to => /change-password. <br/>
To log out, GET to => /logout. <br/>

## Item paths
To retrieve all items, GET to => /item. <br/>
To retrieve one item, GET to => /item/:idItem. <br/>
To like one item, GET to => /item/like-item/:idItem. <br/>
To create a new item, POST to => /item. <br/>
To update one item, PUT to => /item/:idItem. <br/>

## User paths
To retrieve all users, GET to => /user. <br/>
To retrieve info of one user, GET to => /user/:userId. <br/>
To turn one user to Admin, PUT to => /user/update-status/:userId. <br/>
To update one user, PUT to => /user/change-nickname/:userId. <br/>
To delete your own user, DELETE to => /user/delete-user/:userId. <br/>

## Cart paths
To retrieve one cart, GET to => /cart. <br/>
To create a cart, POST to => /cart. <br/>
To add an item to a cart, POST to => /cart/add-cart/:idItem. <br/>
To remove an item from a cart, DELETE to => /cart/remove-item/:idItem. <br/>
To delete a cart, DELETE to => /cart/delete-cart/:idCart. <br/>

## Comment paths
To retrieve comments from an item, GET to => /comment/:idItem. <br/>
To create a comment, POST to => /comment/:idItem. <br/>
To delete a comment, DELETE to => /comment/:idItem. <br/>

## Frontend version
You can find the frontend version [here](https://github.com/vinicgoulart/ecommercefront).