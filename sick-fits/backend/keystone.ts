import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { User } from "./schemas/User";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365, // how long should they stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: process.env.DATABASE_URL,
  },
  lists: createSchema({
    // schema items
    User,
  }),
  ui: {
    isAccessAllowed: () => true,
  },
});
