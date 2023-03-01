// Project files
import { useState } from "react";
import { downloadFile, uploadFile } from "./scripts/cloudStorage";

export default function App() {
  const [imageToUpload, setImageToUpload] = useState("");
  // Methods
  async function onChange(event) {
    const file = event.target.files[0];
    const filePath = `new-folder/${Date.now()}_${file.name}`;

    setImageToUpload(file);
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
      <label>
        File chooser
        <input type="file" onChange={(event) => onChange(event)} />
      </label>
    </div>
  );
}
