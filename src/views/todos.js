import { useState , useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import Inputmodal from "../components/inputmodal";
import Editmodal from "../components/editmodal";
import Viewmodal from "../components/viewmodal";

function Todos() {
  const [todos, settodos] = useState([]);
  const [id, setId] = useState();

  const [inputmodal, setInputmodal] = useState(false);
  const inputtoggle = () => setInputmodal(!inputmodal);

  const [viewmodal, setViewmodal] = useState(false);
  const viewtoggle = () => setViewmodal(!viewmodal);

  const [editmodal, setEditmodal] = useState(false);
  const edittoggle = () => setEditmodal(!editmodal);

  const deletetodo = (id) => {
    const updatedtodos = todos.filter((todo) => todo.id !== id);
    settodos(updatedtodos);
  };

   useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      settodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <Navbar color="dark" dark expand="md" className="py-3 shadow">
        <Container className="d-flex justify-content-center">
          <NavbarBrand className="fw-bold text-uppercase fs-4">
            MY Todos App
          </NavbarBrand>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-secondary bg-opacity-25 min-vh-100 py-5">
        <Container>
          <Row className="g-4">
            {todos.map((todo) => (
              <Col md="4" key={todo.id}>
                <Card className="shadow h-100">
                  <CardBody>
                    <CardTitle tag="h5" className="fw-bold text-dark">
                      {todo.title}
                    </CardTitle>
                    <CardText className="text-muted">
                      {todo.description}
                    </CardText>
                    <small className="text-secondary">
                      Created at: {todo.createdAt}
                    </small>
                    {todo.updatedAt && (
                      <small className="text-secondary d-block">
                        Updated at: {todo.updatedAt}
                      </small>
                    )}
                  </CardBody>
                  <div className="d-flex justify-content-center mb-3">
                    <Button
                      className="mx-1"
                      color="secondary"
                      size="sm"
                      onClick={() => {
                        setId(todo.id);
                        viewtoggle();
                      }}
                    >
                      View
                    </Button>
                    <Button
                      className="mx-1"
                      color="success"
                      size="sm"
                      onClick={() => {
                        setId(todo.id);
                        edittoggle();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="mx-1"
                      color="danger"
                      size="sm"
                      onClick={() => deletetodo(todo.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}

            {/* Add Todo Button */}
            <Col md="4">
              <Button
                color="light"
                onClick={inputtoggle}
                className="w-100 h-100 border border-2 border-secondary shadow d-flex flex-column align-items-center justify-content-center"
                style={{ minHeight: "200px" }}
              >
                <h1 className="display-4 fw-bold text-dark">+</h1>
                <p className="text-muted mb-0">Add New Todo</p>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Inputmodal
        modal={inputmodal}
        toggle={inputtoggle}
        todos={todos}
        settodos={settodos}
      />
      <Viewmodal modal={viewmodal} toggle={viewtoggle} todos={todos} id={id} />
      <Editmodal
        modal={editmodal}
        toggle={edittoggle}
        todos={todos}
        settodos={settodos}
        editId={id}
      />
    </div>
  );
}

export default Todos;
