# jnv-core


How to start the application?

to start the application first u need to set up mongo db resources
`mongod --dbpath './resources'`
 
 run:`npm run start`
 the server will run on port `3000`
 for debuging you can run the following 
 
 debug:`npm run debug`
 the debug:`5858`
 
 Run Migrations
 
 `migrate-mongo status`
  
 `migrate-mongo up`
 
 `migrate-mongo create migration_name`
 
 Migrations: https://www.npmjs.com/package/migrate-mongo
 
 End Points
 
 `/login`
 `/attendance/MMYYYY`
 `/attendance_by_year/YYYY`
 
 
 
 



