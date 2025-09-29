import React from 'react'
import Todos from './views/todos'

const App = () => {
  return (
    <div>
      <Todos/>
    </div>
  )
}

export default App












// import React, { useState } from "react";
// // import { getDatabase, ref, set , remove } from "firebase/database";
// // import { app } from "./firebase";
// import Input from "./input";
// import Todos from "./todos";
// import Heading from "./heading";
// import "./index.css";


// // const db = getDatabase(app)

// const App = () => {
//   const [listTodo, setListTodo] = useState([]); 
//   const [todoId, setTodoId] = useState(1); 


//   const addinlist = (input, description) => {
//     const newTodo = { id: todoId, input, description };
//     //  const newTodoRef = ref(db, `todos/${todoId}`);
//     // set(newTodoRef, newTodo); 

    
//     setListTodo([...listTodo, newTodo]);
//     setTodoId(todoId + 1);
//   };

//   const deleteListItem = (id) => {
//     // const todoRef = ref(db, `todos/${id}`);
//     // remove(todoRef);  
    
   
//     setListTodo(listTodo.filter((todo) => todo.id !== id));
//   };
//   return (
//     <>
//       <Heading />
//       <Input onAddtodo={addinlist} />
//       <div className="listof-todos">
//         {listTodo.map((todo) => (
//           <Todos
//             key={todo.id} 
//             item={todo}
//             deleteItem={() => deleteListItem(todo.id)}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;




// const App = () => {
//   const [listTodo, setListTodo] = useState([]); // State to hold todos

//   // Fetch todos from Firebase on component mount
//   useEffect(() => {
//     const todoRef = ref(db, "todos"); // Reference to todos node in Firebase
//     const unsubscribe = onValue(todoRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const fetchedTodos = Object.keys(data).map((key) => ({
//           key,
//           ...data[key], // Spread the todo object
//         }));
//         setListTodo(fetchedTodos); // Update local state with todos from Firebase
//       } else {
//         setListTodo([]); // If no data, clear the local state
//       }
//     });

//     return () => unsubscribe(); // Cleanup listener on unmount
//   }, []);

//   // Add a new todo to Firebase
//   const addinlist = (input, description) => {
//     const newTodo = { input, description }; // Define the new todo structure
//     const todoRef = ref(db, "todos"); // Reference to todos node in Firebase
//     const newTodoRef = push(todoRef); // Generate a unique key and reference
//     set(newTodoRef, newTodo); // Save the new todo to Firebase
//   };

//   // Delete a todo from Firebase
//   const deleteListItem = (key) => {
//     const todoRef = ref(db, `todos/${key}`); // Reference to the todo by its key
//     remove(todoRef) // Remove the todo from Firebase
//       .then(() => {
//         console.log(`Deleted todo with key: ${key}`);
//       })
//       .catch((error) => {
//         console.error("Error deleting todo:", error);
//       });
//   };

  
//   // const deleteListItem = (key) => {
//   //   const todoRef = ref(db, `todos/${key}`); // Reference to the todo by its key
//   //   remove(todoRef); // Use remove to delete the todo from Firebase
  
//   //   // Update the local state to reflect the deleted todo
//   //   const updatedList = listTodo.filter((todo) => todo.key !== key); // Remove the todo from the list
//   //   setListTodo(updatedList); // Set the updated list of todos
//   // };

//   return (
//     <>
//       <Heading />
//       <div>
//         <Input onAddtodo={addinlist} />
//       </div>
//       <div className="listof-todos">
//         {listTodo.map((todo) => (
//           <Todos key={todo.key} item={todo} deleteItem={deleteListItem} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;





// import React, {useState} from 'react';
//  import Input from './input.js';
// import "./index.css"
// import Todos from "./todos.js";
// import Heading from './heading.js';

// const App = () => {
//   const [listTodo , setListTodo] = useState([]);
//   const addinlist = (input, description) =>{
//     const todos = {input , description}
//     setListTodo([...listTodo,todos]);
//   }
  
//   const deleteListItem = (key)=>{
//     let newListTodo = listTodo.filter((item,index) => index !== key)
//     setListTodo(newListTodo);
//   }

//   return (
//     <>
//     <Heading/>
//     <div>
//       <Input onAddtodo={addinlist} />
//     </div>
//       <div className='listof-todos'>
//         {listTodo.map((listTodo , i) => {
//          return(
//          <Todos item={listTodo} key={i} index={i} deleteItem={deleteListItem}/>
//         )})}
//       </div>
//     </>
//   )
// }

// export default App


// import React from 'react';
// import Input from './input.js';
// import Todos from './todos.js';
// import './index.css';
// import { deleteTodo } from './slice.js';
// import { useSelector, useDispatch } from 'react-redux';

// const App = () => {
//   const listTodo = useSelector((state) => state.todos.todos); 
//   const dispatch = useDispatch();


//   const deleteListItem = (index) => {
//     dispatch(deleteTodo(index)); 
//   };

//   return (
//     <>
//       <h1 className="heading">Todos List</h1>
//       <div>
//         <Input />
//       </div>
//       <div className="listof-todos">
//         {listTodo.map((listTodo, i) => (
//           <Todos item={listTodo} key={i} index={i} deleteItem={deleteListItem} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;






