import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteInventoryById, getAllInventorys, getPaidInventories, getUnpaidInventories } from '../../services/InventoryServices';

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

  const fetchPaidInventories = async () => {
    try {
      const data = await getPaidInventories();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching paid inventories:', error);
    }
  };

  const fetchUnpaidInventories = async () => {
    try {
      const data = await getUnpaidInventories();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching unpaid inventories:', error);
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
              <td>{item.pagesa ? 'paguar' : 'Pa paguar'}</td>
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
      <div className="d-flex justify-content-between mt-3">
        <Button variant="success" onClick={fetchPaidInventories}>
          Show Paid Inventories
        </Button>
        <Button variant="warning" onClick={fetchUnpaidInventories}>
          Show Unpaid Inventories
        </Button>
        <Button variant="primary" onClick={fetchInventorys}>
          Show All Inventories
        </Button>
      </div>
    </div>
  );
};

export default InventoryListA;
