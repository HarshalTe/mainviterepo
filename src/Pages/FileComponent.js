import { useState } from "react";

const FileComponent = () => {
  const [files, setFiles] = useState([]);   // multiple files
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files); // FileList → Array
    setFiles(selectedFiles);
  };

  const handleCreate = () => {
    if (files.length === 0) {
      alert("At least ek file select karo");
      return;
    }

    setData([...data, ...files]); // append all files
    setFiles([]);
  };

  return (
    <div>
      <h3>Multiple File Upload Example</h3>

      <input
        type="file"
        multiple
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleCreate}>Create</button>

      <hr />

      {data.map((file, index) => (
        <div key={index}>
          {index + 1}. {file.name}
        </div>
      ))}
    </div>
  );
};

export default FileComponent;
