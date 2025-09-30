import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
import { addTodoAction } from "../Redux/todoaction"; 

function Inputmodal({ modal, toggle }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return; 
    dispatch(addTodoAction(title, description));
    setTitle("");
    setDescription("");
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Todo</ModalHeader>
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handlesubmit}>
            Save Todo
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Inputmodal;
