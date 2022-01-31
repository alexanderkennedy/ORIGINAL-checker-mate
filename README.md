# CHECKER-MATE

CHECKER-MATE is an intereactive checklist of educational material that allows the user to record the progress of how many list-items they have read or watched... Their progress
is written on a JSON file and it is reflected in a Tally that shows up on the same page.  In Phase 2, there will be an option for a specific user (A list-creator) to make a list
for mutliple users (List-receivers) to use.  For the list-creator, there will be a database showing the progress of each list-reciever user. 

FEATURES:

--When the checklist is fresh and no items have not been clicked. The only items that are visable are MANDATORY educational material.
--When the MANDATORY items have been clicked. The Mandatory list collapses and stacks on top of the other categories. 
--Tally records number of items read, an image of a tree to the side of it grows as tally number increases. 
--Notifications appear at the top of the page at different stages of the tally. 
--Checkmark is actually an animation involving a shovel. 

INSTALLATION:

## Installation

1) Clone the repo
2) Back-end

New Terminal 
cd server
npm i
npm run start

New Terminal
cd client
npm i
npm run dev

#Next Steps:

--Build out a User Sign-Up page, which gives eah new User a UserName and ID. 
--Build out "Daily List" page that generates a small list of 1 random item from each category for the List-receiving user to go over. With the list refreshed every day.
--Build out a "Employee progress" page which tracks the progress of each employee.
