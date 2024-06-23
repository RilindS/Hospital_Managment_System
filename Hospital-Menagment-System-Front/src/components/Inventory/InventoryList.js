import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteInventoryById, getAllInventorys } from '../../services/InventoryServices';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventorys();
  }, []);

  const fetchInventorys = async () => {
    try {
      const data = await getAllInventorys();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inevntory:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteInventoryById(id);
      fetchInventorys(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting inventory:', error);
    }
  };

  return (
    <div>
      <h1></h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>artikulli</th>
            <th>Pershkrimi</th>
            <th>Sasia</th>
            <th>Pagesa</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {inventory.map((inventory) => (
            <tr key={inventory.inventoryId}>
              <td>{inventory.artikulli}</td>
              <td>{inventory.pershkrimi}</td>
              <td>{inventory.sasia}</td>
              <td>{inventory.pagesa}</td>

              <td>
                <Link to={`/doctor/inventory/edit/${inventory.inventoryId}`} className="btn btn-primary btn-sm me-2">
                  Edit
                </Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(inventory.inventoryId)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InventoryList;
