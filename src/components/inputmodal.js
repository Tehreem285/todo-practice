import React, { useState } from "react";
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

function Inputmodal({modal , toggle , todos , settodos}) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const newtodo = {
      id : Date.now(),
      title , 
      description,
      createdAt : new Date().toLocaleString(),
    };

    settodos([...todos, newtodo]);
    setTitle('');
    setDescription('');
    toggle();
  }

  return (
    <div>
     
      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Todo</ModalHeader>
        <ModalBody>
          <Form>
            {/* Title Field */}
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

            {/* Description Field */}
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
