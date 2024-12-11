Portfolio Website (Interactive)

Message about my design:
As part of this assignment I want relevant interactive components that can still be built on.
I worked with a map API at first, but found it didn't add value to a portfolio besides the ability to show one.
This assignment had many difficulties. One being the amount of changes being made to multiple files.
Keeping track and testing became easier as I pulled each section to a separate file and worked on it independently.
Once I had it working on its own I added it back and tested it with the rest of the project.
Another challenge was adding the first JavaScript code to makes the origin section display only what I wanted when clicked
and when its closed to return to everything back and not bounce around the page. Once I had that worked out it became much easier
to add that same kind of function to the rest of the site.
The feedback form section is probably the most complex and took the longest time to make work correctly, validate and clear after.
I am happy with how its turned out. There is still more clean up and things to add like a JSON or database collection of the feedback.
* Notes all new changes *

Dependancy Links:
-Animate.style (Animate.css)
-Bootstrap V5.3.3
-CSS Stylesheet
-Google Fonts (Playfair)


Nav Bar:
-Active buttons with animations on hover
-Bottons link to parts of the page as well as my profile pages
-Nav bar is pinned to the top of the view port for ease of navigation
-A hamburger button is set to a media tag to display itself and the right side of the nav bar under 965px
* With JavaScript I added the active drop down menu when hamburger button is clicked.*


Logo: Home
Origins: Origin section
Creations: Creation section
*Feedback: Feedback form section*
Linkedin Logo: Linkedin website *Now Linked to my page*
Github Logo: Github profile *Now Linked to my page*
Contact: Contact section


Welcome Section:
-Has an animated bounce in from the left when page is opened
-A responsive message about me
-A responsive profile picture


Origins Section:
(This section is a contrast area of blue for styling change)

-This has the flex flow row wrap to create a reactive feel

Three selected areas about me in card form:
-Software Development with an image of code on a screen
* Now when "Learn more" is clicked it toggles the display of the originbox div and shows the new-content div selected*
-Automotive Technician with an image of well used tools
*Works the same as above*
-Personal page with an image of a hicker
*Works the same as above*


Creations Section:

-A back arrow *toggles the display of the portfolio image and underconstruction image when clicked*
-*Portfolio image and underconstruction image have a link to its github repository*
-A forward arrow *toggles the display of the portfolio image and underconstruction image when clicked*

*Feedback Form Section:*

-This section has a message to prompt users to add feedback.
-The form background is in the same blue as above section.
-The user can input a display name.
-"Add a project" button if clicked displays a single field where the user can add what project they are giving feedback on.
-A message field for the feedback content.
-5 grey stars are defaulted, the user can select a star rating for what they are reviewing.
- Post button that validates the data before adding the data to the "Post" section.

-All the data values are captured and organized into an object (Add to database/JSON later).
-The object is then displayed in the post section with the style/html given.
-The fields are cleared and multiple post can be made but are only locally cached.



Contact Section:
(This section is a contrast area of grey for styling change)

-Has a small message to direct people to form area.
-An Email input area.
-A box area to add message content.
-A submit button *Now validates data has been added to the email field and message area. 
It alerts the user if this is done correctly or more needs to be added.*

Footer Section:
-Text "Created 2024 by Michael Kinnear"