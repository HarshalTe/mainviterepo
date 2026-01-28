import { useState } from "react";

const FileComponent = () => {
  const [documents, setDocuments] = useState([
    { id: "doc1", files: [] },
    { id: "doc2", files: [] },
    { id: "doc3", files: [] },
    { id: "doc4", files: [] },
    { id: "doc5", files: [] },
    { id: "doc6", files: [] },
  ]);

  const [data, setData] = useState([]); // store all files after Create

  const handleChange = (e, index) => {
    const selectedFiles = Array.from(e.target.files);

    const newDocuments = [...documents];
    newDocuments[index].files = selectedFiles;
    setDocuments(newDocuments);
  };

  const handleCreate = () => {
    // Combine all files from documents into a single array
    const allFiles = [];
    for (let i = 0; i < documents.length; i++) {
      allFiles.push(...documents[i].files);
    }
    setData(allFiles);
  };

  return (
    <div>
      <h3>6 File Upload Example</h3>

      <div>
        <label>
          Doc1: <input type="file" multiple onChange={(e) => handleChange(e, 0)} />
        </label>
      </div>

      <div>
        <label>
          Doc2: <input type="file" multiple onChange={(e) => handleChange(e, 1)} />
        </label>
      </div>

      <div>
        <label>
          Doc3: <input type="file" multiple onChange={(e) => handleChange(e, 2)} />
        </label>
      </div>

      <div>
        <label>
          Doc4: <input type="file" multiple onChange={(e) => handleChange(e, 3)} />
        </label>
      </div>

      <div>
        <label>
          Doc5: <input type="file" multiple onChange={(e) => handleChange(e, 4)} />
        </label>
      </div>

      <div>
        <label>
          Doc6: <input type="file" multiple onChange={(e) => handleChange(e, 5)} />
        </label>
      </div>

      <br />
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



// import { useState } from "react";

// const FileComponent = () => {
//   const [files, setFiles] = useState([]);   // multiple files
//   const [data, setData] = useState([]);


//   const handleChange = (e) => {
  
//     const selectedFiles = Array.from(e.target.files); // FileList → Array

//     setFiles(selectedFiles);
//   };

//   const handleCreate = () => {
//     if (files.length === 0) {
//       alert("At least ek file select karo");
//       return;
//     }

//     setData([...data, ...files]); // append all files
//     setFiles([]);
//   };

//   return (
//     <div>
//       <h3>Multiple File Upload Example </h3>

//       <input
//         type="file"
//         multiple
//         onChange={handleChange}
//       />

//       <br /><br />

//       <button onClick={handleCreate}>Create</button>

//       <hr />

//       {data.map((file, index) => (
//         <div key={index}>
//           {index + 1}. {file.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FileComponent;
