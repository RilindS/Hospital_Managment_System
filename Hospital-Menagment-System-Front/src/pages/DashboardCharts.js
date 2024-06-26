import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalNurses, setTotalNurses] = useState(0);
  const [totalDepartments, setTotalDepartments] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [patientsResponse, doctorsResponse, nursesResponse, departmentsResponse] = await Promise.all([
          axios.get('https://localhost:44322/api/Patients/get-total-patients'),
          axios.get('https://localhost:44322/api/Doctor/get-total-doctors'),
          axios.get('https://localhost:44322/api/Nurse/get-total-nurses'),
          axios.get('https://localhost:44322/api/Departments/get-total-departments')
        ]);

        console.log('Patients Data:', patientsResponse.data);
        console.log('Doctors Data:', doctorsResponse.data);
        console.log('Nurses Data:', nursesResponse.data);
        console.log('Departments Data:', departmentsResponse.data);

        setTotalPatients(patientsResponse.data);
        setTotalDoctors(doctorsResponse.data);
        setTotalNurses(nursesResponse.data);
        setTotalDepartments(departmentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const barData = {
    labels: ['Patients', 'Doctors', 'Nurses', 'Departments'],
    datasets: [
      {
        label: 'Total',
        data: [totalPatients, totalDoctors, totalNurses, totalDepartments],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Total Patients, Doctors, Nurses, and Departments',
      },
    },
  };

  return (
    <div className="horizontal-bar-chart">
      <Bar data={barData} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
