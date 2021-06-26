# Rough draft of the core API (needs refining)
 - Images can have any number of tags or galleries associated with them
 - READ can refine results by date, #tags, @gallery or generic search term
 - \* are optional, will auto-generate if not supplied

## AUTH
````
// authenticate with the backend
--> Password
<- Token
````

## CREATE
````
// upload a photo
--> Auth token
--> File
--> URL*
--> Title*
--> Description*
--> Location*
--> Tags*
--> Galleries*
<- Result
````

## READ
````
// get a photo or multiple photos
--> From
--> To
--> Galleries*
--> Tags*
--> Search*
<- Image(s) URL
````

## UPDATE
````
// update a photo
--> Auth token
--> ID
--> Duplicate CREATE api
<- Result
````

## DELETE
````
// delete a photo
--> Auth token
--> ID
<- Result
````