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
    - changing hook size
    - adding new projects
    - updating counters
    - changing yarn type
- DB/Login - Stores users, projects, counters, hook size, and yarn type in database. Register and login users. Credentials are stored in the database. Can only use once you are authenticated. 
- WebSocket - Makes it possible to access project information from other devices. Can chat with other users to share information about projects/seek advice (ex: hook size, designs, yarn material).
- React - Application ported to use the React web framework. 
### HTML Deliverables
For this deliverable, I built out the structure of my application using HTML.
- HTML Pages - Four HTML pages for login, projects page, add project page, and project details page. 
- Links - Each page links back to Home. Login links to projects pages. Each page has links to home, projects, and add project page. 
- Text - All of the project details are represented by text in the example project page. 
- Image - I couldn't figure out where to include an image so I made it without one. 
- DB - The projects page displays example projects that will be stored in the database. They can be accessed by clicking on the link. While it all links to the same example page in this deliverable, each one would have its own page. The example project page has hook size, yarn type, and three different counters which will also be stored in the database. The first line of both the hook size and yarn type is text, which is the placeholder for the current information, and the box underneath would update the database. The counters have text for the number (placeholder), and the up down button would update the database by either incrementing or decreasing by 1. 
- Websocket - The example project page shows two boxes at the bottom. One has text to show where the live messages will be broadcasted, and the lower empty box is where the user can input text to send their own message. 
