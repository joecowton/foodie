# Foodeals App

The "Foodeals" project born out of the need of an app that tells people which products are on sale on different stores, also it shows the products that are near to expire, that way it'd help stores to reduce waste and people to save money on the process.

we where motivated by the idea of learning new technologies and do something meaningful with it.

### MVP

- React Test Passing

- Build simple react page:

    - Display a list of Products
    - Mongo DB simple schema
    - Seed Database - .csv

- Able to choose product (click/hover)

- User sign-in

### User Stories:

```
So that I can choose available discounted products
I want to see all special offer, discounted and free products available
```

```
So that it is convenient   
I want to be able to use google account for log in
```

## As a User

###

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

## As the shop Manager

```
So that I can periodically update available takeaways
I want to easily add products, expiry date and quantity available
```
```
So that I know how many products are bought
I want to see summary of how many are confirmed to pick-up
```
```
So that I give out products to the right customers
I want to receive a summary of user details to give out the products
```
```
So that I can respond to user messages
I want to receive their message via email if i'm not able to chat live
```


## As the Maintainer of the system

```
So that the order of app is kept  
I want to approve major shop partner signup
```
```
So that the order of app is kept  
I want to delete void profiles
```

## How to start

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

### NodeJS - Express

### React - Redux - Router

The front end was made with react since is a powerful library, the buttons and the actions on the page are reactive so there is no need to refresh the page. In order to manage the states on the app we used Redux a react tool that let you call states on the different components. Finally for the routing and rendering different components we used the react-router library, that basically allows the developer to pass a single component and set that component rendering into an specific route.

## Our Test Stack

### Mocha - Chai - Enzyme - Sinon

### Jest

## Challenges
- Integrating backend and frontend servers: at the begging we started with 2 different repos, one for the front end and another for the backend. At the 3rd day we found a way to integrate both of them in just one server, then by using the concurrently library we where able to run both servers in just one call.

- Using different databases: We worked with both a mock database created by the team and the Tesco API, integrating both technologies in the same app using the same 'Products' components was an issue before the routing because it made a massive App file with 200 lines, once separated into different components (LandingPage and Tesco) the rendering became easier and the code became cleaner.

- Filtering: cleating different filtering methods that searched through all the values was a difficult task since the idea is calling the values "this.value" and entering in a function changes that calling, we solved the issue by binding "this" into the needed functions.

- Adding products to the shopping list: Creating a method that send a request to the backend, add a new value and the re-renders the frontend adding the new value into the list in a reactive way was challenging, we overcame this with hard work and a nice attitude.

- Testing in react was a constant issue since the libraries doesn't allow you to feature test.
