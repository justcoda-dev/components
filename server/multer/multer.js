import fs from "fs";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("WOOOOOOOOOOOOOOOOOOOOOOOORKS");
    const { uuid } = req.query;
    console.log(` sorage works ${uuid}`);
    const path = `static/images/${uuid}`;
    fs.mkdirSync(path, { recursive: true });
    req.imagePath = path;
    return callback(null, path);
  },
  filename: (req, file, callback) => {
    callback(
      null,
      `${Date.now().toString()}${file.mimetype.split("image/").join(".")}`
    );
    console.log("set name");
    req.name = `${Date.now().toString()}${file.mimetype
      .split("image/")
      .join(".")}`;
    console.log("set name", req.name);
  },
});

export const upload = multer({
  storage,
});
