const fullDesc = {
  url: `URL Shortener
A secure URL shortener application built with Node.js, Express.js, and MongoDB. Users can register, log in, and create shortened URLs with individual histories.

Features
- User registration and authentication 
- Shorten long URLs to unique short codes
- Track how many times each URL was used
- View personal history of shortened URLs
- Admin privilege to view all users' URLs
- Clean frontend using HTML, CSS, JavaScript, and EJS templates

Technologies Used
- Node.js
- Express.js
- MongoDB
- Session-based authentication
- EJS templating
- HTML, CSS, JavaScript

 Usage
- Register a new account or log in.
- Create short URLs and track usage.
- Access your personal URL history.
- Admins can view all shortened URLs across users.



`,
  blog: `Description:
A secure and dynamic blogging platform built with Node.js, Express.js, MongoDB,Multer and EJS templates. The application enables users to create, read, update, and delete blog posts, interact with content through comments and likes, and manage their accounts with robust authentication mechanisms.

Key Features:
✅ User Authentication:

Register and log in using a secure system combining JWT tokens, HTTP-only cookies.

Passwords are hashed and salted using SHA-256 to protect user credentials.

✅ Blog Management:

Create new blog posts with titles, content, and metadata.

Update or delete your own posts (users cannot edit others’ content).

View all published blogs on the platform.

✅ User Interaction:

Comment on blog posts to engage in discussions.

Like blog posts to show appreciation.

✅ Token Handling:
Persistent user sessions with secure cookies and JWT.
Session IDs used to manage user states across requests.
✅ Responsive Frontend:
Clean, user-friendly interface built with HTML, CSS, JavaScript, and EJS templates.
Dynamic rendering of content based on user actions and authentication state.
Technologies Used:
Backend: Node.js, Express.js
Database: MongoDB
Templating: EJS

Authentication: JWT tokens, cookies, SHA-256 password hashing
Frontend: HTML, CSS, JavaScript
`,
  meme: `
Meme Generator

A web application to browse, edit, and create memes using a public API. Built with React.

Features
- Fetches meme templates from an external API
- Displays meme names and images
- Allows users to add multiple draggable text elements on memes
- Double-click to edit text inline
- React Router for navigation between meme list and editor
- Download the final meme image

Technologies Used
- React
- JavaScript
- React Router
- react-draggable
- HTML & CSS

Usage
- Browse available memes on the main page.
- Click **Edit** to open the meme editor.
- Add text, drag it to desired positions, and edit it by double-clicking.
- Save your meme when finished.
`,
  leetMetric: `An interactive web tool that displays LeetCode user statistics in a visually engaging format. LeetMetric fetches real-time problem-solving data via the LeetCode API and renders intuitive charts to help users track their coding progress across different difficulty levels.

Key Features:
✅ Live Data Fetching:

Retrieves user statistics by entering a LeetCode username.

Shows total problems solved by category: Easy, Medium, Hard.`,
};
export default fullDesc