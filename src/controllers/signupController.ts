const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data: any) {
    this.users = data;
  },
};
import fsPromises from "fs/promises";
import path from "path";
import bcrypt from "bcrypt";

const handleNewUser = async (req: any, res: any) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  const duplicate = usersDB.users.find(
    (person: any) => person.username === user
  );
  if (duplicate) return res.sendStatus(409);
  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUser = {
      username: user,
      roles: { User: 2001 },
      password: hashedPwd,
    };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "models", "users.json"),
      JSON.stringify(usersDB.users)
    );
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export { handleNewUser };
