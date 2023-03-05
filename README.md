# Express GraphQL (Backend Application)

This application was created using NodeJS, ExpressJS, MongoDB, and GraphQL. This is only a sample application built with this technology that shows how they work together. This is only CRUD application for creating, updating, getting, and deleting users from the Mongo Database.

### Technologies

-   **_[NodeJS](https://nodejs.org/en/)_**
-   **_[ExpressJS](https://expressjs.com/)_**
-   **_[GraphQL](https://graphql.org/)_**
-   **_[MongoDB](https://www.mongodb.com/atlas/database)_**
-   **_[Postman](https://www.postman.com/)_**
-   **_[MongoDBCompass](https://www.mongodb.com/products/compass)_**

## Getting Started

-   You should have at least the stable version of **_[NodeJS](https://nodejs.org/en/)_**.
-   You should have installed **_[MongoDB](https://www.mongodb.com/atlas/database)_** on your computer.
-   You can install **_[MongoDBCompass](https://www.mongodb.com/products/compass)_** to view all the schemas you have.
-   Clone this **_[repository](https://github.com/dwrdvncntcvs/backend-with-graphql.git)_** to your computer.

    ```bash
        git clone https://github.com/dwrdvncntcvs/backend-with-graphql.git
    ```

-   Open the repository and install the dependencies.

    ```bash
        #Using Yarn
        yarn

        #Using Npm
        npm install
    ```

-   To run the application, run this command on your preferred terminal.

    ```bash
        #Using Yarn
        yarn start

        #Using Npm
        npm run start
    ```

-   To test the application, you can use **_[Postman](https://www.postman.com/)_** or just run the application **_[http://localhost:5000/graphql](http://localhost:5000/graphql)_** after starting the application.

## Queries

### GraphQL Types

-   These are the type, mutation, and input that I created on the GraphQL Schema of the application

```graphql
type Query {
    users: [User]
    user(id: String): User
}

type Mutation {
    createUser(user: CreateUser): User
    updateUser(id: String, user: UpdateUser): User
    deleteUser(id: String): DeleteUser
}

type User {
    id: String
    username: String
    created_at: String
    updated_at: String
}

input CreateUser {
    username: String
}

input UpdateUser {
    username: String
}

type DeleteUser {
    message: String
}
```

### User model Fragment

-   This is the user fragment that can reuse to all the queries that you will create.

```graphql
fragment UserModel on User {
    id
    username
    created_at
    updated_at
}
```

### Query All Users

-   This will query all the users that were saved on the application's database.

```graphql
query users {
    users {
        ...UserModel
    }
}
```

### Query User By ID

-   This will query the user by their "id".

```graphql
query user($id: String) {
    user(id: $id) {
        ...UserModel
    }
}
```

-   This JSON will act as the input for the fields that user method requires

```json
{
    "id": "user-id"
}
```

### Creating User

-   This will take one parameter which is "user"
-   "user" has a type of CreateUser which you can reference on the **_GraphQL Type_** I mentioned above.

```graphql
mutation createUser($user: CreateUser) {
    createUser(user: $user) {
        ...UserModel
    }
}
```

-   This JSON will act as the "user" value.
-   The value inside the user on JSON object will be created and saved on the database

```JSON
{
    "user": {
        "username":"johnDoe"
    }
}
```

### Updating User

-   This mutation will take two parameters which are "id" and "user"
-   "id" has a type of String and "user" has a type of UpdateUser

```graphql
mutation updateUser($id: String, $user: UpdateUser) {
    updateUser(id: $id, user: $user) {
        ...UserModel
    }
}
```

-   This JSON will act as the "user" and "id" value.
-   The value of "id" will be used as a reference of the user data that you want to update and the value/s of "user" will replace be the update value.

```JSON
{
    "id":"user-id",
    "user": {
        "username":"sampleUsername"
    }
}
```

### Deleting User

-   This mutation will take "id" parameter
-   "id" has a type of String

```graphql
mutation deleteUser($id: String) {
    deleteUser(id: $id) {
        message
    }
}
```

-   This JSON will act as the "id" value.

```JSON
{
    "id":"user-id"
}
```
