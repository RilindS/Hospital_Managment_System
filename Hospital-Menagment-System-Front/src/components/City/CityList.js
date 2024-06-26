import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { deleteCityById, getAllCities } from '../../services/CityServices'; // Ensure this path is correct

const CityList = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const data = await getAllCities();
      console.log('Fetched cities:', data); // Log the data for debugging
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCityById(id); // Assuming deleteCityById uses cityName to delete
      fetchCities(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting city:', error);
    }
  };

  return (
    <div>
      <h1></h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((cityName, index) => (
            <tr key={index}>
              <td>{cityName}</td>
              <td>
                {/* <Link to={`/admin/city/edit/${cityName}`} className="btn btn-primary btn-sm me-2">Edit</Link> */}
                <Button variant="danger" size="sm" onClick={() => handleDelete(cities.cityId)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CityList;
