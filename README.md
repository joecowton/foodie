# fooDeals

fooDeals is an e-commerce app to search for special offers and close to expired products that are free or heavily discounted. This is intended to bring both value for money to the user and help reduce food wastage. It also provides supermarkets an opportunity to generate revenue from expired or close to expiring goods that might otherwise simply be written off.

This application was built to be data agnostic enabling future integration with different retailers. In order to demonstrate how our app integrates with different API's we've connected fooDeals to both a mock database and the Tesco API. Where initially we had thought to focus on expiry, the absence of this data led us to instead concentrate our filters on supermarket deals and promotions. The eventual intention of this application would be to connect various retail sources providing an aggregator of discounted food products.

The project was driven by motivation to learn new technologies, primarily combining Node Js and React but also understanding how redux, passport strategies and mongoDB integrate in a modern stack.

### Setup

Fork and clone the repo then:
```
cd foodie
npm install
cd client
npm install
```
#### To run

From the project root directory run: ```npm run dev```

## Tech Stack

#### MongoDB

To store user and product data we used a MongoDB database hosted on mLab, allowing each member of our team to independently access data. As a near ubiquitous database program we were interested to explore its advantages and disadvantages; previously we had only used the relational database PostgreSQL.

#### Mongoose

Mongoose was used as the Object Document Mapper(ODM). This enabled us to define schemas with strongly typed data, mapped onto our DB. This provided a large amount of functionality around creating and working with our schemas.

####  Node.js - Express

We used Node.js and Express to run our server and provide routing to and from our database via Mongoose. Having worked previously with Ruby and Rails, we were keen to explore the possibilities that Node's modular structure had to offer, creating an isomorphic Javascript application, running both client and server-side.

####  React - Redux - Router

The front end was made with react for the use of multi-faceted library, the buttons and the actions on the page are reactive for as much of single-page app behaviour as possible.In order to manage the states on the app we used Redux to call states on the different components. Finally for the routing and rendering different components we used the react-router library, that allows passing of a single component and rendering on a specific route.

#### Google OAuth

We use Google OAuth to authenticate users to our application. Throughout the course at Makers Academy we learnt different frameworks and how to authenticate users using an email and password based approach. This time we wanted to challenge ourselves and handle user authentication in a modern way. In fooDeals we use Passport.js which is an authentication middleware for Node.js. It has a comprehensive set of strategies support authentication using Google, Facebook, Twitter, and more. This was a great learning experience of authentication control flow.

#### Mocha - Chai - Enzyme - Sinon

We have explored the new libraries and tested the rendering of React components on app page. Instead of using Jest, we looked react-only library for testing - Enzyme.    

## Challenges

#### Architecture of the project: Integrating backend and client servers

We set up the project to run on 2 repos for front-end and the-backend. We quickly switched to integrating both servers, using the concurrently library to run both servers in one call.

#### Refactoring: extracting small components due to use of different databases

We worked with both a mock database created by the team and the Tesco API. Integrating both technologies in the same app using the same 'Products' components was an issue before the routing was set up. Once the project went through a major refactoring, the landing page was separated into two different components (LandingPage and Tesco Page). As the result of that, rendering became easier and the code became more workable for the entire team.

#### Filtering Products: setting up selective product ranges, search filters and categories

We focused on presenting the user with a specific range of products - only the product with special deal offered. to further that we  created a range of filtering methods that allow users to :
 1. search for product by typing in words
 2. choose product by unique categories
 3. arrange product in ascending/descending order by date, price ect.


####  Adding products to the shopping list

It was challenging to create a method that sends a request to back-end, adds new value and re-renders the front-end with the new value, all while in a reactive fashion. This was overcome by taking turns at solving the problem as we progressed through the days. This seemingly simple feature was the last one to be implemented, but we feel that we approached it in more than one way to solve it, and have a better understanding a result.

### DEMO (on youtube)

[![PromotionalVideo](https://i.imgur.com/OuZdBJ5.jpg)](https://www.youtube.com/watch?v=mCtztaA_qU0)

## User Stories

#### As a User


```
So that I can choose available discounted products
I want to see all special offer, discounted and free products available
```

```
So that it is convenient   
I want to be able to use google account for log in
```

```
So that I can order correctly  
I want do see product quantities, precent discount and time till expiration
```

```
So that it can suit my preference
I want to Filter products according to: expiration-date, price, etc.
```
```
So that I choose the closest shop
I want to narrow the search location
```
```
So that I know which brands are available
I want to see the title and info of the shop appear
```
```
So that I know my order
I want to receive email/text confirmation
```

```
So that I can easily  ask any questions  
I want to chat via chatbot
```
