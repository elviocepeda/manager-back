import multer from "multer";

const getExtension = (file) => {
  const { originalname } = file;
  const extension = originalname.split(".").pop();
  return extension;
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const { fieldname } = file;
    callback(null, `./src/database/uploads/${fieldname}`);
  },
  filename: (req, file, callback) => {
    const { uuid } = req.params;
    const extension = getExtension(file);
    callback(null, `${uuid}.${extension}`);
  },
});

const multerUploadSettings = (filetypes, errorMessage, type) => {
  const uploadSettings = multer({
    storage,
    limits: {
      fieldSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, callback) => {
      verifyFileType(file, callback, filetypes, errorMessage);
    },
  }).single(type);

  const verifyFileType = (file, callback, filetypes, errorMessage) => {
    const extension = getExtension(file);
    const isValid = filetypes.test(extension);

    if (isValid) {
      return callback(null, true);
    } else {
      callback(errorMessage);
    }
  };
  return uploadSettings;
};

export { multerUploadSettings };
