const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
// req body - usko lene ke liye ek lib. ko middle m add karna jruri hai 
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
const AuthRouter = require('./Routes/AuthRouter');
app.use(express.json());
const http = require("http");
const { Server } = require("socket.io");
const { signup, login } = require('./Controllers/AuthController');
const authenticateToken = require('./Middlewares/AutthValidation');

// if we want to automatically update server then use nodemon and write the line on the package.json in scripts "start" :"nodemon index.js"
const userData = require('./Models/db');
const Post = require("./Models/Post");
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // if you're sending cookies or auth headers
}));



mongoose.connect('mongodb://127.0.0.1:27017/Colab-CP')
  // mongoose ek promise hai iisliye .then lagaye hai
  // uper test databse ka name hai 
  .then(() => console.log('DB connected'))
  .catch(() => { console.log('DB not connected !') })


app.get('/myPosts/:id', async (req, res) => {
  try {
    // Fetch posts created by the logged-in user
    const id = req.params.id;
    // const id = localStorage.getItem(id) ;
    console.log(id);
    const post_s= await Post.find({owner:id}).populate('owner');
    // populate is like the foriegn key here simple in the post table we add id of the owner of the post ..
    // Now find the those post whose owner id is logged user ....and get details of those user by using the populate function 
    res.json(post_s);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});


// app.get('/myposts', async (req, res) => {
//   const id = localStorage.getItem(id) ;
//   const user = req.params.id;
//   console.log(user)
//   try {
//     const posts = await Post.find( user ).populate('userID');
//     res.json(posts);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching posts' });
//   }
// });


app.get('/test', (req, res) => {
  res.send("OK !");
})

app.use(bodyParser.json());
app.use(cors());
//  cors is for using another ports site in the backend like React work on 3000 and backend work on 5050 so connect karne ke liye cors use kanra padta hai 
app.use('/auth', AuthRouter);

// app.post("/api/posts", async (req, res) => {
//     try {
//       const { title, author, content, imageUrl } = req.body;
//       const newPost = new Post({ title, author, content, imageUrl });
//       await newPost.save();
//       res.status(201).json({ message: "Post created successfully", post: newPost });
//     } catch (error) {
//       res.status(500).json({ message: "Error creating post", error });
//     }
//   });

//   Get All Posts API
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
});
app.get("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
});


app.post("/api/posts", async (req, res) => {
  try {
    console.log("🔹 Incoming Data:", req.body); // Log received data

    const { id,title, author, content, imageUrl } = req.body;

    if (!title || !author || !content) {
      console.log("Missing required fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Post({ title, author, content, imageUrl , owner:id });
    await newPost.save();
    

    console.log("Post saved successfully:", newPost);
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error saving post:", error);
    res.status(500).json({ message: "Error creating post", error });
  }
});


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("send_message", (data) => {
    io.emit("receive_message", data); // Send to all clients
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});




const PORT = 5050;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})