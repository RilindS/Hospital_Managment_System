import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getInventoryById, updateInventoryById } from '../../services/InventoryServices';

const EditInventory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inventory, setInventory] = useState({
    artikulli: '',
    pershkrimi: '',
    sasia: 0,
    pagesa: false,
  });

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const data = await getInventoryById(id);
        setInventory(data);
      } catch (error) {
        console.error('Error fetching Inventory:', error);
      }
    };

    fetchInventory();
  }, [id]);

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
      await updateInventoryById(id, inventory);
      navigate('/admin/inventory'); // Redirect to inventory list after updating
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Inventory</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formInventoryName">
          <Form.Label column sm={2}>Inventory:</Form.Label>
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
        <Form.Group as={Row} className="mb-3" controlId="formDescription">
          <Form.Label column sm={2}>Pershkrimi:</Form.Label>
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
        <Form.Group as={Row} className="mb-3" controlId="formQuantity">
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
        <Form.Group as={Row} className="mb-3" controlId="formPayment">
          <Form.Label column sm={2}>Pagesa:</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              name="pagesa"
              checked={inventory.pagesa}
              onChange={handleChange}
              label="Pagesa"
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Update Inventory</Button>
      </Form>
    </Container>
  );
};

export default EditInventory;
