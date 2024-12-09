# blog application
### This blog application created by Abdallah Elmancy
This demo for blog app have 8 pages
1. home Page
2. single post page
3. blog page
4. about page not include yet
5. contact page not include yet
6. write page
7. login page
8. not found page

this dome have 12 components
1. navbar
2. footer
3. card
4. carlist
5. auth
6. themetoggle
7. pagination
8. menuitem
9. menu
10. comments
11. categorylist
12. allCategory

also two provider
1. auth
2. theme

also interfaces 
1. post for posts/singlepot
2. comment
3. category

addtional to api by using prisma this not our field as Frontend developer and i try to store img to firebase but need pay 

you need this to project work with you for local host
npm i
npm prisma generate

env file

| env | desc |
|-----:|-----------|
|  AUTH_SECRET | fro api you can get it from auth.js |
|  AUTH_GOOGLE_ID | for google provider you can get it from goole cloud    |
|  NEXTAUTH_URL | url require for api auth   |
|  NEXTAUTH_SECRET | this key secret require for api auth |
|  NODE_ENV | development - production  |
|  DATABASE_URL | for connect with databse prisma  |
|  BASE_URL | url depend on local or globel  |




