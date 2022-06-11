const Posts = require("../models/Posts");
const User = require("../models/Users");

//--------------------------------------------Create------------------------------------

//--------------------------------------------Update------------------------------------

//--------------------------------------------Delete------------------------------------

exports.createPost = async (req, res) => {
  try {
    let note = new Posts({
      username: req.body.username,
      imageLink: req.body.imageLink,
      videoLink: req.body.videoLink,
      title: req.body.title,
      description: req.body.description,
    });

    await note.save();
    res.send(note);
  } catch (err) {
    console.log(err);
  }
};

exports.readPosts = async (req, res) => {
  try {
    Posts.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      // console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    if ((await Posts.findById(req.params.id)) === null) {
      res.send("Post Not Found");
    } else {
      await Posts.findByIdAndRemove(req.params.id).exec();
      res.send("Deleted Post");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

// note handling

// app.get("/readNote", async (req, res) => {
//   NoteModel.find({}, (err, result) => {
//     if (err) {
//       res.json({ app: err });
//     }
//     console.log(result);
//     res.send(result);
//   });
// });

// app.delete("/delete/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     await NoteModel.findByIdAndRemove(id).exec();
//   } catch (err) {
//     console.log(err);
//     res.send(err);
//   }
// });
