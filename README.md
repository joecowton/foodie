# Foodeals App

The "Foodeals" is an e-commerce app for searching on-deal and close to expiry products that are free or heavily discounted. This  brings great value for money to the user as well as help with reducing food wastage. The app integrates a mock-database as well as tesco-API to filter products on promotions and special deals.

The project was driven by motivation to learn new technologies, such as Node Js and React as well as understand better how redux, passport strategies, mongoDB and two-server project set-up works.

### User Stories:


## As a User


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


## To Set Up Project

To run the app you should fork and clone the repo, once in the computer go the project folder and run:
```
npm install
cd client
npm install
```
## To run both servers

Making sure you are on the project folder path you can run: ```npm run dev``` on the terminal and this should start all servers.

## Our Tech Stack

### MongoDB - Mongoose

In order to manage data for 'Foodeals', we opted to use MongoDB for the back-end. One of our greatest motivations for choosing Mongo was the ability to have a shared database through mLab. As a result we were able to work better as a team of 6 people while learning new technologies - ensuring each build iteration on different branches resulted in minimal conflicts.

Mongo enabled us to simplify data models and work in a significantly faster way. Being a non-relational database, we did encounter certain issues when creating relationships between 'products' and 'users' but were fairly straight-forward problems to solve.
Mongoose was used as the Object Document Mapper(ODM). This enabled us to define schemas with strongly typed data, mapped onto our DB. This provided a large amount of functionality around creating and working with our schemas.

### Node JS - Express


### React - Redux - Router

The front end was made with react for the use of multi-faceted library, the buttons and the actions on the page are reactive for as much of single-page app behaviour as possible.
In order to manage the states on the app we used Redux to call states on the different components.
Finally for the routing and rendering different components we used the react-router library, that allows passing of a single component and rendering on a specific route.

## Our Test Stack

### Mocha - Chai - Enzyme - Sinon
We have explored the new libraries and tested the rendering of React components on app page. Instead of using Jest, we looked react-only library for testing - Enzyme.    


## Challenges

- Architecture of the project: Integrating backend and client servers
We set up the project to run on 2 repos for front-end and the-backend. We quickly switched to integrating both server, using the concurrently library to run both servers in one call.

- Refactoring: extracting small components due to use of different databases
We worked with both a mock database created by the team and the Tesco API. Integrating both technologies in the same app using the same 'Products' components was an issue before the routing was set up. Once the project went through a major refactoring, the landing page was separated into two different components (LandingPage and Tesco Page). As the result of that, rendering became easier and the code became more workable for the entire team.


- Filtering Products: setting up selective product ranges, search filters and categories
We focused on presenting the user with a specific range of products - only the product with special deal offered. to further that we  created a range of filtering methods that allow users to :
 1. search for product by typing in words
 2. choose product by unique categories
 3. arrange product in ascending/descending order by date, price ect.

- Adding products to the shopping list
It was challenging to create a method that sends a request to back-end, adds new value and re-renders the front-end with the new value, all while in a reactive fashion. This was overcome by taking turns at solving the problem as we progressed through the days. This seemingly simple feature was the last one to be implemented, but we feel that we approached it in more than one way to solve it, and have a better understanding a result.

- Testing React components
