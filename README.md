# Welcome, Jenzabar, to our HTTP Request/React Demo!

This repository showcases how React handles HTTP requests leveraging the Fetch API.

## Quick Start

1. Clone the repository.
2. Run the following commands to launch the app:

```
npm i && npm start
```

3. Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Features

- **Homepage**: Displays a list of posts retrieved via a `GET` request from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts). Click on any post to dive deeper or create a fresh post.

- **Single Post Page**: Fetches a post based on its ID from the URL. From this view, you can either delete the post or proceed to edit it.

- **Post Form Page**: If there's an ID in the URL, the form fetches the respective post using `GET`. Otherwise, it's set to create a new post with a `POST` request. If editing, the request changes to a `PUT`.

## Heads Up!

Please note: [http://jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com) doesn't permit actual database mutations. However, this app has the built-in logic for such operations.
