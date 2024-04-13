# Cooper Johnston's CS260 Startup
Allowing you to find something worthwhile to read, and appreciate what your friends think.

## The Pitch
We live in an age full of connection online, but not much of it is _positive._ Additionally, sites such as lettrboxd allow for users to share opinions on film and televsion. \Finally, Comic Books are larger than ever due to the massive mainstream success of Marvel Studios.
This startup will create a platform for users to review and recommend books they have read, creating positive and enlightening discourse, and encouraging reading and understanding.

## The Concept
<img width="889" alt="Website Mockup" src="https://github.com/CooperJohnston/startup/assets/144291294/61a0eba5-15c2-42b0-8108-51680892ffbd">
A possible design for the website, allowing users to collect and review products.

## The Applications
- **Authentiaction:** Each user has his or her own profile that contains their information about what books they have read and reviewed, as well as their friends and history on the site.
- **Database:** This website would store information about different books and series, as well as their aggregate reviews.
- **WebSocket Data:** Traffic on the website would consist of reviews being published and the items being added to the database. As well as information regarding customer's friends.

## HTML DELIVERABLE
- **HTML Pages** - For the structure of this page I have created four html pages. The top of each page will contain links that allow for ease of access. These pages represent the login, the database containing user information, as well as contact information on the user information page.
- **Images** - Embedded in the table containing user books, from the database,are images that represent the books the user has reviewed.
- **Login** - The index page is gets input of a username and password
- **Websocket** - The popular page ranks the most popular user reviewed book and displays it for others to access and view.
- **Text** - User information, suggested information, and contact information come in text information in the user information section.

## CSS DELIVERABLE
- **PREREQUISITES** - Simon CSS successfully added, and 10+ commits occurred. Github accessible.
- **RESIZING** - The application properly resizes in all windows
- **Images** - Proper imagery was added for the table. Purposely, the have stayed rectangles to maintain the comic book feel.
- **Proper Header, Footer and Main formatting**
- **App Elements** - Design for table and buttons is formatted
- **Text** - UTF-8 font added to all elements/

## JAVASSCRIPT DELIVERABLE
- **PREQUISITES** - Simon Java deployed, 10+ commits occured.
- **WEBSOCKET** - The user information is stored in local storage, simulating a database using the users information and websocket data. When more users are added, the popular tab will display the most popular reviews of the day from all users.
- **DATABASE** - Using a JSON structure, a list of all the scores and their respective books is stored on local storage in the system. It is updated when a user writes their new score. The website autotamtically formats itself as more books are added. This would simulate a server full of book information.
- **JAVASCRIPT INTERACTIONS** - Users can leave simple reviews of books and view popular books as they appear from other users. They can log in and interact with books. The website automatically updates their scores and review total.

## SERVICE DELIVERABLE
- **PREQUISITES** - Simon service deployed, 10 + commits occured
- **Node.js/Express HTTP service** - Created using node and express through EXPRESS in index
- **Static middleware for frontend** - Added an async function to the reviews class so that a JSON file can be updated by the server.
- **Calls to third party endpoints** - A fetch call is made on the UNSERINFO.JS page, a 3rd party fetch is made to the random qoute API. I have found an API that has super hero information but I am waiting on authroization with my API key, so the random qoute is a placeholder to make it clear that the technology works.
- **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for reviews. The index.js takes the reviews data and it is stored in a JSON object ("/update-reviews")
- **Frontend calls service endpoints** - in index.js accesses the JSON object where reviews are stored on the frontend using a get ("/get-reviews")

## SERVICE ENDPOINTS
- **PREQUISITIES** - SIMON LOGIN AND 10 commits
- **NEW USER** - Database.js has a code to add a new user
- **USER AUTHENTICATION** - using a cookie parser and an ID, as well as a nested router, users are  authenticted
- **USER AUTHENTICATION** - yup
- **MONGODB** - data and credentials are stored in mongodb
- **RESTRICTION** - If you aren't allowed, an error message have been given
## WEBSCOKET
- **PREQUISITIES** - SIMON WEBSOCKET AND 10 commits
- Live messaging occurs that updates users on book reviews that are made! See what everyone is doing.
- **BACKEND LISTENS FOR THE CONNECTION** - The peerProxy.js file listens for websocket data and is used by the index.js file
- **FRONTEND MAKES CONNECTION** - in the reviews.js frontend file, a websocket connection is made to display scores
- **DATA IS SENT** - user information and scores is sent to the user.
- **DATA IS DISPLAYED ON THE APPLICATION** - The newest information is sent to the server and displayed by websocket
## REACT
- **PREQUEISITES** - SIMON REACT and 10+ commits
- **VITE BUNDLING** - the application is now set up using vite and configured in the vite.config
- **REACT COMPONENTS** - each page of the website is bundled using react.
- **HOOKS** - The login uses the use state hook,and the user information uses the useEffect hook
- **ROUTER** - THe app is now rendered in a react router