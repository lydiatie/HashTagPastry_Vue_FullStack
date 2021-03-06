const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config.js");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = require("./app/models");
const Role = db.role;

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// // simple route
// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome to Charity Website application."
//     });
// });

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/token.routes')(app);

// Handle production

if (process.env.NODE_ENV === 'production') {
    // Static folder 
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get("/*/", (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "beneficiary"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'beneficiary' to roles collection");
            });

            new Role({
                name: "member"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'member' to roles collection");
            });
        }
    });
}