import path from "path";
import { Request, Response } from "express";
import yaml from "yaml";

import { dirName } from "../helper/dirname.js";
import { dropdownItems, contentData } from "../constants/constants.js";

export const headerComponent = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "header.ejs"));
};

export const inputHeaderComponent = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "inputHeader.ejs"));
};

export const getOutputHeaderComponent = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "outputHeader.ejs"));
};

export const getOtherToolsComponent = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "otherToolsWrapper.ejs"));
};

export const getContentWrapperComponent = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "contentWrapper.ejs"), {
    contentData,
  });
};

export const getFooter = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "footer.ejs"));
};

export const getMenuItems = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "menu.ejs"), {
    items: dropdownItems,
  });
};

export const getOtherToolsItems = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "otherTools.ejs"), {
    items: dropdownItems,
  });
};

// Alternative method by sending json
// export const runCode = (req: Request, res: Response) => {
//   const { code } = req.body;

//   try {
//     let jsonObject = JSON.parse(code);
//     let yamlCode = yaml.stringify(jsonObject);

//     res.status(200).json({ success: true, msg: yamlCode });
//   } catch (error) {
//     res.status(400).json({ msg: error.message, success: false });
//   }
// };

export const getCopyToast = (req: Request, res: Response) => {
  res.send(`<div class="toast">Copied to Clipboard
  </div>`);
};

// Alternative method by sending json
// export const readTheUploadedFile = (req: Request, res: Response) => {
//   const uploadedFile = req.file;

//   const parts = uploadedFile.originalname.split(".");
//   const extension = parts[parts.length - 1];

//   if (!uploadedFile) {
//     return res.status(400).send("No file uploaded.");
//   }

//   if (extension.toLowerCase() === "json") {
//     const fileContent = uploadedFile.buffer.toString("utf8");
//     res.status(200).send({ msg: fileContent });
//   } else {
//     res.status(400).send({ msg: "Please upload a json file" });
//   }
// };

export const runCode = (req: Request, res: Response) => {
  const { code } = req.body;
  try {
    let jsonObject = JSON.parse(code);
    let yamlCode = yaml.stringify(jsonObject);

    res.render(path.join(dirName(), "src/views", "outputEditor.ejs"), {
      code: yamlCode,
    });
  } catch (error) {
    res.render(path.join(dirName(), "src/views", "outputEditor.ejs"), {
      code: error.message,
    });
  }
};

export const readTheUploadedFile = (req: Request, res: Response) => {
  const uploadedFile = req.file;

  const parts = uploadedFile.originalname.split(".");
  const extension = parts[parts.length - 1];

  if (!uploadedFile) {
    return res.status(400).send("No file uploaded.");
  }

  if (extension.toLowerCase() === "json") {
    let fileContent = uploadedFile.buffer.toString("utf8");
    console.log("file content", fileContent);
    fileContent = JSON.parse(fileContent);
    res.render(path.join(dirName(), "src/views", "inputEditor.ejs"), {
      code: fileContent,
    });
  } else {
    res.render(path.join(dirName(), "src/views", "inputEditor.ejs"), {
      code: "Please upload json file",
    });
  }
};

export const toggleButton = (req: Request, res: Response) => {
  res.render(path.join(dirName(), "src/views", "toggleButton.ejs"));
};
