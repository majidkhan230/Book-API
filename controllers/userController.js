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
