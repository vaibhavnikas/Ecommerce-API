# Ecommerce-API
This is an API for an ecommerce platform admin to manage product inventory.

# Deployment Link
  https://ecommerce-api-kqvd.onrender.com
  
  You can use this link to test this API on Postman.

# Technologies Used

This project was built using the following technologies :

* <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
* <img alt="Express.js" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
* <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">

NPM packages used for authentication :

* <h4>jsonwebtoken</h4>
* <h4>passport-jwt</h4>

The following tools were used for development and testing :

* <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white">
* <img alt="VS Code" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">

# Installation
1. Install Node.js and MongoDB on your machine.
2. Download this project.
3. Open the terminal and make this project the current working directory.
```
$ cd ./Ecommerce-API
```
4. Install all the dependencies.
```
$ npm install
```
5. Setup environment variables.

     [How To Set Environment Variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)
     
6. Start the server.
```
$ npm start
```
7. Use Postman to test the API.

# How to use ?

Watch the following demo video to get a complete understanding on how to use the project :
[Demo Video](https://drive.google.com/file/d/1NNrnANYDJ545u5o_IDCk5KboPu0Ft-ri/view?usp=sharing)

**Steps to start using the project**

1. Download and open Postman.
2. Make a post request on **/api/admin/register** to register as an admin. Enter email and password in the body of the request before sending the request.
3. Make a post request on **/api/admin/create-session** to generate the secret token. Enter email and password in the body of the request before sending the request.
4. After making a post request on **/api/admin/create-session** you will receive a token. Enter this token as 'Bearer Token' inside the 'Authorization'
header before sending any requests on **/api/products** route. Without this token you will not be able to create, delete, view or update products.

* **API to add a product to the database**

   **URL [POST]: /products/create**

```
//request
Enter name and quantity of the product you want to create in the body of the request.

name: smartphone
quantity: 10

//response
{
message: 'Product added successfully !',
data: {
   product: {
      name: smartphone,
      quantity: 10
    }
  }
}
```

* **API to get a list of all the products**

   **URL [GET]: /products**
   
   ```
   //response
   {
   message: 'Here is a list of all the products',
   data: {
      products: [
         {
             id: '63247a9fdac36728h8f1d7g4',
             name: smartphone,
             quantity: 10
         }
      ]
    }
   }
   ```
   
* **API to delete a product from database**

  **URL [DELETE] : /products/:id**
  
  ```
  //response
  {
  message: 'product deleted'
  }
  ```
  
* **API to update quantity of a product**
  
  **URL [POST] : /products/:id/update_quantity/?number=20**
  
  ```
  //response
  {
  message: 'quantity updated successfully',
  data: {
    product: {
       name: smartphone,
       quantity: 20
      }
    }
  }
  ```
