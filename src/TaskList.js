import React from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faListUl,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const TaskList = ({ tasks, onEdit, onDelete, onNewTask }) => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">
          <FontAwesomeIcon icon={faListUl} className="me-2" />
          Tasks
        </h2>
        <Button variant="primary" onClick={onNewTask}>
          <i className="bi bi-plus-circle me-2"></i>
          <FontAwesomeIcon icon={faPlus} className="me-2" /> New Task
        </Button>
      </div>

      <Table
        striped
        bordered
        hover
        responsive="md"
        className="bg-white shadow-sm rounded"
      >
        <thead className="table-primary">
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="text-dark">{task.assignedTo}</td>
              <td>
                <span
                  className={`badge ${
                    task.status === "Completed"
                      ? "bg-success"
                      : task.status === "In Progress"
                      ? "bg-warning text-dark"
                      : "bg-secondary"
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="text-dark">{task.dueDate}</td>
              <td>
                <span
                  className={`badge ${
                    task.priority === "High"
                      ? "bg-danger"
                      : task.priority === "Normal"
                      ? "bg-info text-dark"
                      : "bg-light text-dark"
                  }`}
                >
                  {task.priority}
                </span>
              </td>
              <td className="text-muted">{task.comments}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    <i className="bi bi-three-dots-vertical"></i> Actions
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onEdit(task)}>
                      <i className="bi bi-pencil-square me-2"></i>
                      <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => onDelete(task.id)}>
                      <i className="bi bi-trash me-2"></i>
                      <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList;
