// import React, { useState } from "react";
// import ReactModal from "react-modal";
// import { createNotes } from '../firebase/firestore';
// import "./styles/modal.css"

// function Modal2 ({ openModal, closeModal, user, mood }) {
// //Modal PARA CREAR NOTAS
//  const [title, setTitle] = useState('');
//  const [note, setNote] = useState('');
//  const [open, setOpen] = useState(openModal)
//  const hideModal=()=>{
//      setOpen(false);
//      closeModal();
//  };
 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//      createNotes(title, note, user.email, new Date())
//      .then(() => {
//       console.log('Ya esta en FireStore')
//       hideModal();
//      })
//   };
// // MODAL PARA ACTUALIZAR NOTAS


//   return (
// <ReactModal
// isOpen={open}
// >
// {mood=== 'create'? (
//     <section className="modal">
//      <form className="form-createNote"onSubmit={handleSubmit} >
//      <div className="content-btn-close">
//        <button className="btn-close" onClick={() => closeModal((visible) => !visible)}>x</button>
//      </div>
//        <input onChange={(e) => {setTitle(e.target.value)}}
//        name="title-note" id="title-note" placeholder="Título"/>
//        <textarea onChange={(e) => {setNote(e.target.value)}} rows="15"
//        name="text-note" id="text-note" placeholder="Escribe tu nota">
//        </textarea>
//        <button type="submit" className="btn-add-note">Guardar</button>
//      </form>
//      </section>):
//       (
//         <section className="modal">
//         <form className="form-cre >ateNote"onSubmit={handleSubmit}>
//          <div className="content-btn-close">
//            <button className="btn-close" onClick={() => closeModal((visible) => !visible)}>x</button>
//          </div>
//            <input 
//            name="title-note" id="title-note" placeholder="Título"/>
//            <textarea rows="15"
//            name="text-note" id="text-note" placeholder="Escribe tu nota">
//            </textarea>
//            <button type="submit" className="btn-add-note">Actualizar</button>
//          </form>
//          </section>
//          )

//     }
    
//     </ReactModal>
//   )
  
// };

// export default Modal2;