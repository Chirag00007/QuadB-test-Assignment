
# QuadB-Test-Assignment

A full-stack e-commerce application featuring user authentication, product listing, and a shopping cart. Built with Node.js, Express, MongoDB, and React, this application demonstrates proficiency in both frontend and backend development.

# How to setup this Project in your localhost 







## first setup cloning of project

open your terminal and press command : git clone https://github.com/Chirag00007/QuadB-test-Assignment.git

## After Cloning install dependencies in backend and frontend folder

### first : cd frontend : npm install
### second : cd backend : npm install

## Now its time to setup our environment variables

### you can put your environment variables too but for easy flow I am putting my own credentials because all the products data is uploaded on mongodb and CLOUDINARY

PORT=5000
MONGO_URI=mongodb+srv://quadb-assignment:quadb-test@quadb-cluster.ks5xjfc.mongodb.net/

JWT_SECRET=fightclub

CLOUDINARY_CLOUD_NAME=di1b7xy7e
CLOUDINARY_API_KEY=366367967911245
CLOUDINARY_API_SECRET=kn2i1dJNE95sxMahG3vyV7xyNE4


# Project is successfully setup 

## now its time to run first we can also make it build folder for more efficient and optimised frontend by typing command


cd frontend,
npm run build 

## then

cd backend,
node index.js 

## otherwise 

cd frontend,
npm run dev

## then 

cd backend,
node index.js







