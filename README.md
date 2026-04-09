**DESCRIPTION**  
Basic example CRUD (Create, Read, Update, Delete) operations with Node.js, Express and PostgreSQL.

**TECHNOLOGIES**  
• Node.js  
• Express  
• PostgreSQL  
• Environment variables with .env

**INSTALATION**  
1. Enter the directory:  
```bash
cd nodejs-express-crud-api
```

2. Clone repository:  
```bash
git clone https://github.com/cesarleyvaga/nodejs-express-crud-api.git
```

3. Install dependencies:  
```bash
npm install
```

**EXECUTION**  
• Start app:  
```bash
npm run dev
```

• By default in:  
http://localhost:3000

**ENDPOINTS**  
```bash
• GET     "/users"      # get all records  
• GET     "/users/:id"  # get a record by ID  
• POST    "/users"      # create new record  
• PUT     "/users/:id"  # update an existing record  
• DELETE  "/users/:id"  # delete a record by ID
```

**EXAMPLE**  
```bash
curl -X POST http://localhost:3000/api/users \  
-H "Content-Type: application/json" \  
-d '{"name":"User X", "email":"userx@example.com", "password": "password"}'
```

**STRUCTURE**  
```bash
db  
 └ schema.sql              # database schema  
src  
 ├ config  
 │   └ db.js               # connection to the database  
 ├ controllers  
 │   └ userController.js   # CRUD logic for users  
 ├ models  
 │   └ userModel.js        # user model  
 ├ routes  
 │   └ userRoute.js        # user route  
 ├ app.js                  # main configuration of Express  
 └ server.js               # server start  
.env.example               # example of environment variables  
package.json  
package-lock.json  
.gitignore
```
