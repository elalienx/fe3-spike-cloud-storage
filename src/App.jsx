// Project files
import { useState } from "react";
import { downloadFile, uploadFile } from "./scripts/firebase/cloudStorage";
import readFile from "./scripts/resize-image/readFile";
import resizeImage from "./scripts/resize-image/resizeImage";

export default function App() {
  // Methods
  async function onChange(event) {
    const file = event.target.files[0];
    const filePath = `spike-image/${Date.now()}_${file.name}`;
    const imageFromFile = await readFile(file);
    const resizedImage = await resizeImage(imageFromFile, 240, 180);

    await uploadFile(resizedImage, filePath);
    console.log(await downloadFile(filePath));
  }

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
