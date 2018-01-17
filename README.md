# Foodie App

## MVP

### User Stories:

```
So that I can choose available discounted products
I want to see all special offer, discounted and free products available
```

```
So that it is convenient   
I want to be able to use google account for log in
```
### Check List

- React Test Passing

- Build simple react page:

    - Display a list of Products
    - Mongo DB simple schema
    - Seed Database - .csv

- Able to choose product (click/hover)

- User sign-in



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


## Our Tech Stack

### MongoDB - Mongoose

In order to manage data for 'Foodeals', we opted to use MongoDB at the back-end. One of our greatest motivations for choosing Mongo was the ability to have a share database through mLab. As a result, as a team, we would all be working off of the same dataset thus ensuring that each build iteration on different branches results in minimal conflicts.
Another reason for choosing Mongo is that even though at this point in time, our application is fairly simple in its complexity, Mongo enables the simplifying of complex data models and is significantly faster than working with MySQL for example.
Being a non-relational database, we did encounter certain issues when creating relationships between 'products' and 'users' but quickly found our way around them.
Mongoose was used as the Object Document Mapper(ODM). This enabled us to define schemas with strongly typed data, mapped onto our DB. This provided a large amount of functionality around creating and working with our schemas.
