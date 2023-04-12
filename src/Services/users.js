import DBService from "./db";

const userService = new DBService("user-db", "users");

export default userService;
