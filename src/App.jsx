// Project files
import { useState } from "react";
import { downloadFile, uploadFile } from "./scripts/firebase/cloudStorage";
import readFile from "./scripts/resize-image/readFile";
import resizedImage from "./scripts/resize-image/resizeImage";

export default function App() {
  // Methods
  async function onChange(event) {
    const file = event.target.files[0];
    console.log("file", file);

    const filePath = `new-folder/${Date.now()}_${file.name}`;

    setImageToUpload(file);
  }

  // Impure (1, 4)
  // async function onAddImage(event, item, editItem) {
  //   const file = event.target.files[0];
  //   const uniqueId = new Date().getTime();
  //   const filename = `thumbnail-${uniqueId}.png`;
  //   const image = await readFile(file);
  //   const resizedImage = await resizeImage(image, 88, 88);
  //   const imageURL = await uploadFile(cloudReference, resizedImage, filename);
  //   const clonedItem = { ...item };

  //   clonedItem.imageURL = imageURL;
  //   editItem(clonedItem);
  // }

  return (
    <div className="App">
      <h1>Firebase - Cloud Storage</h1>

      <label>
        Image chooser
        <input
          type="file"
          accept="image/png, image/jpeg, image/webp"
          onChange={(event) => onChange(event)}
        />
      </label>
    </div>
  );
}
