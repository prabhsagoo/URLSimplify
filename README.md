# URLSimplyfy

## Overview
URLSimplyfy is a URL shortening service designed to convert long URLs into shorter, more manageable links. These shortened URLs are convenient to share and have an expiration period of 24 hours for security purposes.

## Features
- **URL Shortening**: Easily converts long URLs into shortened versions.
- **Clipboard Functionality**: Allows users to quickly copy the shortened URL with a single click.
- **Input Validation**: Alerts users if the URL field is empty, ensuring a URL is provided before processing.

## Installation
To install URLSimplyfy, clone the repository and install the necessary dependencies:
```bash
git clone https://github.com/prabhsagoo/URLSimplify.git
npm install
```
## Environment Setup
Create a `.env` file in your project root with the following keys:
- `VITE_API_BASE_URL`: Your frontend's API base URL.
- `PORT`: The port your backend will run on.
- `MONGO_URL`: Your MongoDB connection string.

## Running the Application
- **Frontend**:
  ```bash
  npm run dev
  ```

- **Backend**:
  ```bash
  node index.js
  ```
## Technologies
URLSimplyfy is built using:
- **Frontend**: React, SweetAlert2
- **Backend**: Express.js, Mongoose, CORS
- **Database**: MongoDB

## Contributing
Contributions to URLSimplyfy are welcome! Fork the repository and submit pull requests for any improvements or bug fixes.
