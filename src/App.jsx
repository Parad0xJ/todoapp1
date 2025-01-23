import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { nanoid } from "nanoid";
import Items from "./Items";
import Footer from "./Footer";

function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(4), content: "Tache 1" },
    { id: nanoid(4), content: "Tache 2" },
    { id: nanoid(4), content: "Tache 3" },
  ]);
  const [todo, setTodo] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  function deleteTodo(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      setShowValidation(true);
      return;
    }
    setTodoList([...todoList, { id: nanoid(4), content: todo }]);
    setTodo("");
    setShowValidation(false);
  }
  return (
    <>
      <NavBar />
      <ul className="list-group mt-3">
        {todoList.length > 0 &&
          todoList.map((item) => (
            <Items key={item.id} itemData={item} deleteTodo={deleteTodo} />
          ))}
      </ul>
      {showValidation && (
        <p className="mt-3">Vous devez rentrer une tache...!</p>
      )}
      <form onSubmit={handleSubmit} className="input-group mb-3 mt-5">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Entrez votre Tache ici"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button className="btn btn-outline-success">Ajouter</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
