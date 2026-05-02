import "dotenv/config";
import app from "./src/app.js";
import db from "./src/config/db.js";

const PORT = 2002;

app.listen(PORT, async () => {
  try {
    await db.getConnection();
    console.log("DB connected..");
    console.log(`running ar ${PORT} ...`);
  } catch (err) {
    console.error(`DB connection failed!`, err);
    process.exit(1);
  }
});
