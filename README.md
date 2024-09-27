# Crochet Tracker
## Specification Deliverable
### Elevator Pitch
Have you ever been frustrated when you lose progress while crocheting? Or when you go back to a project and you can't remember what hook size or yarn you've been using? Crochet Tracker will help you store this information so you never lose it again! 
### Design
![Alt text](<Webpage Idea 2.jpg>)
![Alt text](<Webpage Idea.jpg>)
### Key Features
- Login through HTTPS
- Each project can have 3 parts/pieces
- Each part/piece has a counter
- Can store hook size and yarn style for a new project
- Results are stored and can be accessed again upon login 
### Technologies 
I will use the following technologies as described.
- HTML - Uses correct HTML structure for application. Four HTML pages for login, projects page, add project page, and project details page. 
- CSS - Application styling that looks good on different screen sizes, cute and cozy color choice and good contrast. 
- JavaScript - Has login, project display, counter display, hooksize/yarn display, and save function.
- Service - Backend service with endpoints for: 
    - login
    - changing hook size
    - adding project names
    - changing part counter
    - changing yarn type
    - save
- DB/Login - Stores users, projects, counters, hook size, and yarn type in database. Register and login users. Credentials are stored in the database. Can only use once you are authenticated. 
- WebSocket - Makes it possible to access project information from other devices. Can chat with other users to share information about projects/seek advice (ex: hook size, designs, yarn material).
- React - Application ported to use the React web framework. 
### HTML Deliverables
For this deliverable, I built out the structure of my application using HTML.
- HTML Pages - Four HTML pages for login, projects page, add project page, and project details page. 
- Links - Each page links back to Home. Login links to projects pages, 
