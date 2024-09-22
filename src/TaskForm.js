import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const TaskForm = ({ show, onClose, onSave, taskToEdit }) => {
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("Not Started");
  const [priority, setPriority] = useState("Normal");
  const [dueDate, setDueDate] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setAssignedTo(taskToEdit.assignedTo);
      setStatus(taskToEdit.status);
      setPriority(taskToEdit.priority);
      setDueDate(taskToEdit.dueDate);
      setComments(taskToEdit.comments);
    } else {
      setAssignedTo("");
      setStatus("Not Started");
      setPriority("Normal");
      setDueDate("");
      setComments("");
    }
  }, [taskToEdit]);

  const handleSave = () => {
    const newTask = {
      assignedTo,
      status,
      priority,
      dueDate,
      comments,
    };
    if (taskToEdit) {
      newTask.id = taskToEdit.id;
    }
    onSave(newTask);
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>{taskToEdit ? "Edit Task" : "New Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <Form>
          <Form.Group controlId="assignedTo" className="mb-3">
            <Form.Label className="text-dark">Assigned To</Form.Label>
            <Form.Control
              type="text"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              placeholder="Enter the name of the assignee"
              className="border-primary"
            />
          </Form.Group>

          <Form.Group controlId="status" className="mb-3">
            <Form.Label className="text-dark">Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border-primary"
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="dueDate" className="mb-3">
            <Form.Label className="text-dark">Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border-primary"
            />
          </Form.Group>

          <Form.Group controlId="priority" className="mb-3">
            <Form.Label className="text-dark">Priority</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border-primary"
            >
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="comments" className="mb-3">
            <Form.Label className="text-dark">Comments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Add any additional comments here"
              className="border-primary"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-light">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          <i className="bi bi-save me-2"></i> Save Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskForm;
