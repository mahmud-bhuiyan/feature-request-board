# Feature Request Board Documentation

### Author: Md. Mahmudur Rahman Bhuiyan

## Introduction

Welcome to the Feature Request Board Documentation. This guide is designed for users, developers, and stakeholders to understand and participate in the feature request process. The feature request board is a centralized space to collect, evaluate, and prioritize new features or improvements suggested by the community.

## Accessing the Feature Request Board

To access the Feature Request Board, visit [Feature Request Board Live Link](https://feature-request-board.vercel.app/). Follow these instructions:

## For Full Access To Feature Details

1. Create your account / Log in to your account.
2. Navigate to the Feature Request Board section.

## Feature Request Board Section

Unauthenticated users can view the list of feature requests and individual feature details. They can also like/unlike feature requests, but cannot comment. There is sorting, filtering, searching, and pagination option for better experience.

## Submitting a Feature Request

### Steps:

1. Click on the "Create Request" button.
2. Fill out the provided form with a clear and concise title and a detailed description of the proposed feature.
3. Click "Submit" to post your feature request.

## Review Process

Once a feature request is submitted, it goes through a review process:

1. **Initial Review**: The product team will review the request for completeness and clarity.
2. **Discussion**: The request may be opened for discussion within the community or development team to gather additional insights.
3. **Evaluation**: The product team assesses the feasibility, impact, and alignment with the overall product roadmap.
4. **Status Update**: The status of the request is updated, indicating whether it is Under Review, Planned, In Progress, or Pending further evaluation.

## Feature Request Statuses

Understanding the status of a feature request is crucial. Here are the common statuses:

- **Pending**: The request is under consideration and open for discussion.
- **Under Review**: The product team is actively evaluating the request.
- **Planned**: The feature request has been approved and added to the product roadmap.
- **Deleted**: The request is not currently planned for implementation.
- **In Progress**: The feature is being developed.
- **Complete**: The feature has been developed and incorporated into the product.

## Voting on Feature Requests

Users can like/unlike feature requests to express their interest and support. The number of likes helps prioritize features. Unauthenticated users are limited to viewing feature details.

## Commenting on Feature Requests

Authenticated users can comment on feature requests to provide additional insights, feedback, or clarification. Users can also delete and update their own comments. Unauthenticated users are limited to viewing feature details.

## Admin Panel

The admin panel provides additional functionality for administrators:

- **Dashboard:** View current activity of users.
- **Dashboard/Features:** See all feature requests, update their current status and delete requests.
- **Dashboard/Users:** Make users admin and delete users.
- **Dashboard/Settings:** Control full website functionality, modify important data, set default sorting option and change the website logo.

## Profile Page

Every user can view their user information from the profile page. This includes details such as username, email and photo.

## Notifications

Users who submit feature requests will receive notifications on changes to the status of their requests.

## Installation

Follow these steps to set up and run the Feature Request Board locally:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)

### Clone the Frontend Repository

```bash
git clone https://github.com/mahmud-bhuiyan/feature-request-board.git
```

### Install dependencies

```bash
cd feature-request-board
npm install
```

### Start the server

```bash
npm run dev
```

## Environment Variables

Create a `.env` file in the root of your project and configure the following environment variables:

```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
VITE_API_URL=your_api_url
VITE_IMAGE_UPLOAD_TOKEN=your_image_upload_token
```

Access the application in a web browser at `http://localhost:5173/`.

### Clone the Backend Repository

```bash
git clone https://github.com/mahmud-bhuiyan/feature-request-board-server.git
```

### Install dependencies

```bash
cd feature-request-board-server
npm install
```

### Start the server

```bash
npm start
```

## Environment Variables

Create a `.env` file in the root of your project and configure the following environment variables:

```env
MONGO_URL=your_MONGO_URL
JWT_SECRET_KEY=your_JWT_SECRET_KEY
DB_NAME=your_DB_NAME
```

## Libraries Used

### Frontend

- **React**
- **React Router**
- **Tailwind**
- **Daisy UI**

### Server

- **Node**
- **Express**
- **MongoDB**

### Used Packages

- **Axios**
- **React Hook Form**
- **React Icons**

## Conclusion

The Feature Request Board is a collaborative space for users and developers to shape the future of application development.

For any additional questions or support, contact [bh.mahmud@gmail.com].
