import { User } from "../model/user.model.js";

const users = [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@example.com',
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alicesmith@example.com',
    },
  ];





export const getAllUsers = (req, res) => {
  try {
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
};


export const createUser = async (req,res)=>{
  const userData = req.body
  try {
    await User.create(userData)
    res.status(201).json({
      message:"sucessfully created",
      user:userData
    })
  } catch (error) {
    res.status(404).send({message:"something went wrong",error:error.message})
  }
}