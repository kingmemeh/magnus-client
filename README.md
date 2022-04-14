WD Diploma - Capstone Project
Project Title:	Magnus 
Author:		Kingsley Memeh
Cohort: 		Winter 2022
 

Project Overview

1.1 Description
Magnus is a prototype on-demand streaming platform. For this version, the platform will use The Movie Database to populate the app with movie/tv information. Ultimately the platform will be THE place to consume African film and television. 

1.2 Problem.
While there is no inherent problem with the current streaming space. I felt that there was no platform indigenous to the African film industry that was catered towards promoting the aura of African content. 

1.3 User Profile
The user will be any one interested in on-demand streaming, most importantly African film and television. 

1.4 Requirements: Use Cases and Features

Magnus should effectively do the following in version 1:
1.	Allow users the ability to view and interact with a curating list of films and television

1.5 Tech Stack and APIs
Version 1:
•	React 
•	SAAS
•	AXIOS

      Version 2:
•	All technology utilized above
•	Node.js
•	Passport.js
•	MongoDB 
•	Firebase

2. Client-Side Implementation
Site Map
magnus/src/assets/images/magnus_map.jpg
 
Screen Details
magnus/src/assets/images/magnus1.png
magnus/src/assets/images/magnus2.png
magnus/src/assets/images/magnus3.png

3. Server-Side Implementation
3.1 End-Point Descriptions

End-point	Response Format
HTTP GET - /movie/<movie.id>/reviews	{ reviews : [ { author : ‘STRING’, content : ‘STRING’, ID : NUMBER, date_created: ‘STRING’ } … ] }
HTTP GET - /movie/<movie.id>        { results : [ { title : ‘STRING’, description : ‘STRING’, ID : NUMBER, date_added: ‘STRING’, year: ‘STRING’ , cast;[{name: STRING, character: STRING, profile_image: STRING}]} … ] }
	

3.2 External APIs that will be consumed 
•	TMDB

