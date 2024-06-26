import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInventory as addInventoryService } from '../../services/InventoryServices';

const AddInventory = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState({
    artikulli: '',
    pershkrimi: '',
    sasia: 0,
    pagesa: false,
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInventory((prevInventory) => ({
      ...prevInventory,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addInventoryService(inventory);
      console.log('Inventory added:', response);
      setSuccess(true);
      toast.success('Inventory successfully added!');
      setTimeout(() => {
        navigate('/doctor');
        window.location.reload();
      }, 1000); 
    } catch (error) {
      console.error('Error adding inventory:', error);
      toast.error('Failed to add inventory.');
    }
  };

  return (
    <Container>
      <ToastContainer />
      {/* <h2>Add Inventory</h2> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formArtikulli">
          <Form.Label column sm={2}>Artikulli:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="artikulli"
              value={inventory.artikulli}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPershkrimi">
          <Form.Label column sm={2}>Përshkrimi:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="pershkrimi"
              value={inventory.pershkrimi}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formSasia">
          <Form.Label column sm={2}>Sasia:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="sasia"
              value={inventory.sasia}
              onChange={handleChange}
              required
            />
          </Col>
        </Form.Group>
        {/* <Form.Group as={Row} className="mb-3" controlId="formPagesa">
          <Form.Label column sm={2}>Pagesa:</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              name="pagesa"
              checked={inventory.pagesa}
              onChange={handleChange}
            />
          </Col>
        </Form.Group> */}
        <Button type="submit" variant="primary">Add Inventory</Button>
      </Form>
    </Container>
  );
};

export default AddInventory;
