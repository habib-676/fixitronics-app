const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://fixitronics-app.web.app"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// jwt middlewares :
const verifyJWT = (req, res, next) => {
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized access !" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
    if (error) {
      console.log(error);
      return res.status(401).send({ message: "Unauthorized Access !" });
    }
    req.tokenEmail = decoded.email;
  });
  next();
};

async function run() {
  try {
    const database = client.db("fixitronicsDB");
    const serviceCollection = database.collection("services");
    const ordersCollection = database.collection("orders");

    //generate jwt
    app.post("/jwt", (req, res) => {
      const user = { email: req.body.email };

      // token generation
      const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ message: "JWT created successfully" });
    });

    // destroy token
    app.post("/logout", (req, res) => {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      res.send({ message: "Logged out successfully" });
    });

    // service related api
    app.post("/addService", verifyJWT, async (req, res) => {
      const decodedEmail = req.tokenEmail;
      const userEmail = req.query.email;

      if (decodedEmail !== userEmail) {
        return res.status(403).send({ message: "Forbidden access" });
      }

      const newService = req.body;
      const result = await serviceCollection.insertOne(newService);
      res.send(result);
    });

    app.get("/allServices-public", async (req, res) => {
      const result = await serviceCollection.find().toArray();
      res.send(result);
    });

    app.get("/allServices", verifyJWT, async (req, res) => {
      const decodedEmail = req.tokenEmail;
      const userEmail = req.query.email;

      if (decodedEmail !== userEmail) {
        return res.status(403).send({ message: "Forbidden access" });
      }

      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }

      const result = await serviceCollection.find(query).toArray();
      res.send(result);
    });

    // single service

    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    // update :
    app.put("/services/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedService = req.body;
      const updatedDoc = {
        $set: updatedService,
      };
      const result = await serviceCollection.updateOne(
        filter,
        updatedDoc,
        options
      );

      res.send(result);
    });

    app.delete("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/allServices/popular", async (req, res) => {
      const result = await serviceCollection.find().limit(6).toArray();

      res.send(result);
    });

    // orders
    app.post("/orders", async (req, res) => {
      const query = req.body;
      const result = await ordersCollection.insertOne(query);

      res.send(result);
    });

    app.get("/orders", verifyJWT, async (req, res) => {
      const decodedEmail = req.tokenEmail;
      const userEmail = req.query.email;

      if (decodedEmail !== userEmail) {
        return res.status(403).send({ message: "Forbidden access" });
      }

      const query = {};
      if (userEmail) {
        query.customerEmail = userEmail;
      }
      const result = await ordersCollection.find(query).toArray();
      res.send(result);
    });

    app.patch("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const { status } = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          serviceStatus: status,
        },
      };
      const result = await ordersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.get("/orders-provider", verifyJWT, async (req, res) => {
      const decodedEmail = req.tokenEmail;
      const userEmail = req.query.email;

      if (decodedEmail !== userEmail) {
        return res.status(403).send({ message: "Forbidden access" });
      }

      const query = {};
      if (userEmail) {
        query.providerEmail = userEmail;
      }
      const result = await ordersCollection.find(query).toArray();
      res.send(result);
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Fixitronics server is Running....");
});

app.listen(port, () => {
  console.log(`Fixitronics server is running on port : ${port}`);
});
