import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteInventoryById, getAllInventorys } from '../../services/InventoryServices';

const InventoryListA = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventorys();
  }, []);

  const fetchInventorys = async () => {
    try {
      const data = await getAllInventorys();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
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
      <h1>Inventory List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Artikulli</th>
            <th>Përshkrimi</th>
            <th>Sasia</th>
            <th>Pagesa</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.inventoryId}>
              <td>{item.artikulli}</td>
              <td>{item.pershkrimi}</td>
              <td>{item.sasia}</td>
              <td>{item.pagesa ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/admin/inventory/edit/${item.inventoryId}`} className="btn btn-primary btn-sm me-2">
                  Edit
                </Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(item.inventoryId)}>
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

export default InventoryListA;
