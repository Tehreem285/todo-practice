import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function Editmodal({ modal, toggle, todos, settodos, editId }) {
  const [updatedtodo, setupdatedtodo] = useState({
    title: "",
    description: ""
  });

  // 👉 Prefill when modal opens
  useEffect(() => {
    if (editId) {
      const singletodo = todos.find((todo) => todo.id === editId);
      if (singletodo) {
        setupdatedtodo({
          title: singletodo.title,
          description: singletodo.description
        });
      }
    }
  }, [editId, todos]);

  // 👉 Handle form submit
  const handlesubmit = (e) => {
    e.preventDefault();

    const updatedTodos = todos.map((todo) =>
      todo.id === editId
        ? {
            ...todo,
            title: updatedtodo.title,
            description: updatedtodo.description,
            updatedAt: new Date().toLocaleString()
          }
        : todo
    );

    settodos(updatedTodos);
    toggle(); // close modal
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Todo</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="todoTitle">Title</Label>
              <Input
                required
                id="todoTitle"
                name="title"
                type="text"
                placeholder="Enter todo title"
                value={updatedtodo.title}
                onChange={(e) =>
                  setupdatedtodo({ ...updatedtodo, title: e.target.value })
                }
              />
            </FormGroup>

            <FormGroup>
              <Label for="todoDescription">Description</Label>
              <Input
                required
                id="todoDescription"
                name="description"
                type="textarea"
                placeholder="Enter todo description"
                value={updatedtodo.description}
                onChange={(e) =>
                  setupdatedtodo({ ...updatedtodo, description: e.target.value })
                }
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handlesubmit}>
            Save Edit
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Editmodal;


