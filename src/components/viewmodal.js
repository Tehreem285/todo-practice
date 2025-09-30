import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Viewmodal = ({ modal, toggle, id }) => {

    const todos = useSelector((state) => state.todos)

  const viewtodo = todos.find((todo) => todo.id === id);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>View Todo</ModalHeader>
        <ModalBody>
          {viewtodo && (
            <Card className="shadow h-100">
              <CardBody>
                <CardTitle tag="h5" className="fw-bold text-dark">
                  {viewtodo.title}
                </CardTitle>
                <CardText className="text-muted">
                  {viewtodo.description}
                </CardText>
                <small className="text-secondary d-block">
                  Created at: {viewtodo.createdAt}
                </small>
                  {viewtodo.updatedAt && (
                  <small className="text-secondary d-block">
                    Updated at: {viewtodo.updatedAt}
                  </small>
                )}
              </CardBody>
            </Card>
          ) }
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Viewmodal;

