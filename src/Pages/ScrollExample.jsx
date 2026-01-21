
import { useRef } from "react";

const MultiCanvas = () => {
  const canvas1 = useRef(null);
  const canvas2 = useRef(null);

  const draw = () => {
    const ctx1 = canvas1.current.getContext("2d");
    ctx1.fillRect(10, 10, 50, 50);

    const ctx2 = canvas2.current.getContext("2d");
    ctx2.fillRect(20, 20, 50, 50);
  };

  return (
    <>
      <canvas ref={canvas1} width="100" height="100" />
      <canvas ref={canvas2} width="100" height="100" />
      <button onClick={draw}>Draw</button>
    </>
  );
};

export default MultiCanvas;





// import { useEffect, useRef, useState } from "react";

// const PreviousValues = () => {
//   const [form, setForm] = useState({ name: "", amount: "" });
//   const prevForm = useRef({});

//   useEffect(() => {
//     prevForm.current = form;
//   }, [form]);

//   return (
//     <div>
//       <input
//         placeholder="Name"
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         placeholder="Amount"
//         onChange={(e) => setForm({ ...form, amount: e.target.value })}
//       />

//       <p>Previous Name: {prevForm.current.name}</p>
//       <p>Previous Amount: {prevForm.current.amount}</p>
//     </div>
//   );
// };

// export default PreviousValues;




// import { useRef } from "react";

// const MultiModal = () => {
//   const addModal = useRef();
//   const deleteModal = useRef();

//   const openAdd = () => addModal.current.showModal();
//   const openDelete = () => deleteModal.current.showModal();

//   return (
//     <>
//       <button onClick={openAdd}>Add</button>
//       <button onClick={openDelete}>Delete</button>

//       <dialog ref={addModal}>Add Modal</dialog>
//       <dialog ref={deleteModal}>Delete Modal</dialog>
//     </>
//   );
// };

// export default MultiModal;





// import { useRef } from "react";

// const OtpInput = () => {
//   const inputRefs = useRef([]);

//   const handleChange = (e, index) => {
//     if (e.target.value && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   return (
//     <div>
//       {[0, 1, 2, 3].map((_, i) => (
//         <input
//           key={i}
//           ref={(el) => (inputRefs.current[i] = el)}
//           maxLength={1}
//           onChange={(e) => handleChange(e, i)}
//         />
//       ))}
//     </div>
//   );
// };

// export default OtpInput;




// import { useRef } from "react";

// const ScrollExample = () => {
//   const section1 = useRef(null);
//   const section2 = useRef(null);

//   return (
//     <div>
//       <button onClick={() => section1.current.scrollIntoView()}>
//         Go to Section 1
//       </button>
//       <button onClick={() => section2.current.scrollIntoView()}>
//         Go to Section 2
//       </button>

//       <div style={{ height: "100vh" }} />
//       <h2 ref={section1}>Section 1</h2>
//       <div style={{ height: "100vh" }} />
//       <h2 ref={section2}>Section 2</h2>
//     </div>
//   );
// };

// export default ScrollExample;
