# Crochet Tracker
## Specification Deliverable
### Elevator Pitch
Have you ever been frustrated when you lose progress while crocheting? Or when you go back to a project and you can't remember what hook size or yarn you've been using? Crochet Tracker will help you store this information so you never lose it again! 
### Design
![Alt text](<Webpage Idea 2.jpg>)
![Alt text](<Webpage Idea.jpg>)
### Key Features
- Login through HTTPS
- Each project has 3 counters
- Can store hook size and yarn style for a new project
- Results are stored and can be accessed again upon login 
### Technologies 
I will use the following technologies as described.
- HTML - Uses correct HTML structure for application. Four HTML pages for login, projects page, add project page, and project details page. 
- CSS - Application styling that looks good on different screen sizes, cute and cozy color choice and good contrast. 
- JavaScript - Has login, project display, counter display, hooksize/yarn display, and save function.
- Service - Backend service with endpoints for: 
    - login
    - adding new projects
    - updating counters
- DB/Login - Stores users, projects, counters, hook size, and yarn type in database. Register and login users. Credentials are stored in the database. Can only use once you are authenticated. All projects from users are visible, but you can only edit the projects that you added.
- WebSocket - Is announced on Add Project page when a new user adds a project.
- React - Application ported to use the React web framework. 
### HTML Deliverables
For this deliverable, I built out the structure of my application using HTML.
- HTML Pages - Four HTML pages for login, projects page, add project page, and project details page. 
- Links - Each page links back to Home. Login links to projects pages. Each page has links to home, projects, and add project page. 
- Text - All of the project details are represented by text in the example project page. 
- Image - An image of yarn and a hook is included on the home page.
- Third-party - A share button is available; it allows you to send an email to yourself with project details. 
- DB - The projects page displays example projects that will be stored in the database. They can be accessed by clicking on the link. While it all links to the same example page in this deliverable, each one would have its own page. The example project page has hook size, yarn type, and three different counters which will also be stored in the database. The counters have text for the number (placeholder), and the up down button would update the database by either incrementing or decreasing by 1. 
- Websocket - The example project page shows two boxes at the bottom. One has text to show where the live messages will be broadcasted, and the lower empty box is where the user can input text to send their own message. 
### CSS Deliverable
For the deliverable, I properly styled the application into its final appearance.
- Header, footer, and main content body
- Navigation elements - I dropped underlines and added colors/shadows to help them stand out against the background. On the projects page, I included a highlight when you cover over a link. 
- Responsive to window sizing - My app looks great on my computer, phone, and ipad. Looks good on all different window sizes/devices. 
- Application elements - I added a peach background and used blue as it's complimentary color for contrast. 
- Application text content - I used consistent cursive fonts. 
- Application images - inlcuded an image on the front page to show what the website is about. 
### React Deliverable
For the deliverable, I used React and JS to make the application work for a single user. I also added placeholders for future technology. 
- Bundled and transpiled - done!
- Components - Login and texting on the project page are both components with mocks for login and Websocket 
    - Login - When you login, you gain access to the projects/add project pages 
    - Database - Projects are currently stored locally, but will be replaced with a database later. 
    - Projects - Once you add a project, it is displayed in the Projects page. Clicking on it leads to the example page. Local storage was used to demonstrate what it will look like when the database is properly implemented.
    - Example Project (any project that has been added) - All buttons are functional, but it does not pull data from localstorage. These are just placeholders for when the database is added, so all inputs are either empty/zero. When you add text and press submit, it will display the information on the page (database update to be implemented later), and the counter clicks up and down as many times as you want. 
    - Messaging Chat (Websocket) - In the page where Project information will be displayed, I have a placeholder button that sends a message (renders on the screen) - it will be replaced by Websocket later.  
- Router - Routing between login and projects/add project page, and routing between projects and home/add project/example projects.
- Hooks - Used useEffect hooks creating new projects and displaying project information (ex: a counter that updates everytime you click the button)
### Service Deliverable
For this deliverable, I added backend points that receive project information and will return project information (once the database is implemented). 
- Node.js/Express HTTP service - done!
- Static middleware for frontend - done!
- Calls to third party endpoints - I have my site pull random facts that they displayed on project information pages whenever you load into/refresh the page. 
- Backend service endpoints - Placeholders for login that stores the current user on the server. Endpoints for stored projects. Projects are listed on the project page.
- Front calls service endpoints - I did this using the fetch function. 
### Database/Login Deliverable
For this deliverable, I stored both users and projects in the database, and users cannot access projects until they have logged in. I turned this in late, so I deployed websocket over this one.
- MongoDB Atlas Database created - done!
- Stores data in MongoDB - done!
- User Registration - creates a new account in the database
- Existing User - can log in with a registered account to see projects and supports logout (saves project info)
- Storing data - stores project information in the database (please note that you need to click the button slowly for the counters, otherwise it can't keep up and misses information. When you're crocheting, you should only be clicking a counter once every 10-15 minutes or so anyways.)
- Storing credentials - stores user info in the database
- Restrictions - cannot add/access projects unless you are logged in
### Websocket Deliverable
For this deliverable, I implemented a live chat system. Note - I deployed websocket before login was graded due to time constraints. 
- Backend listens for WebSocket connection - done!
- Frontend makes WebSocket connection - done!
- Data sent over WebSocket connection - done! 
- WebSocket data displayed in the application interface - On the add projects page, it is displayed in real time when another project is added that you can view. 
- All functionality - note: you can only change counters on the projects that you added. However, you can view other projects to see what other users are using for their projects. 