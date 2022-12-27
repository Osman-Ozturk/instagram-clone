import User from "../models/User.js";
import bcrypt from "bcryptjs";
const updateUser = async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).send(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

const deleteUser = async (req, res) => {
  if ((req.body.userId = req.params.id || req.body.isAdmin)) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
const getUser = async (req, res) => {
  const username = req.params.name;
  try {
    const user = await User.findOne({ userName: username });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(201).json("User has been followed");
      } else {
        res.status(403).send("You are not following this user!");
      }
    } catch (error) {
      res.status(500).send("");
    }
  } else {
    res.status(403).send("You can not follow yourself");
  }
};

const unfollowUser = async (req,res)=>{
        if (req.body.userId !== req.params.id) {
                try {
                       const user =await User.findById(req.params.id);
                       const currentUser = await User.findById(req.body.userId)
                       if (user.followers.includes(req.body.userId)) {
                        await user.updateOne({$pull : {followers:req.body.userId}})
                        await currentUser.updateOne({$pull : {followings:req.params.id}})
                        res.status(201).json("User has been unfollowed");
                       } else{
                        res.status(403).send("You are not unfollowing this user!");
                       }
                } catch (error) {
                      res.status(500).send(error)  
                }
        }else{
                res.status(403).send("You can not unfollow yourself");
        }
}

export { updateUser, deleteUser, getUser, getAllUsers, followUser,unfollowUser };
