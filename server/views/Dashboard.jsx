import React from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';


const Dashboard = () => {
  const [bloodPressureData, setBloodPressureData] = useState([]);
  const [systolic, setSystolic] = useState(0);
  const [diastolic, setDiastolic] = useState(0);
  const [severity, setSeverity] = useState('');
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  




    
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    // create new date object
    const date = new Date();
    // set date to current date minus i days
    date.setDate(date.getDate() - i);
    // return date object
    return date;
}).map(date => {
    // map over date objects and create an option element for each date
    return <option key={date} value={date}>{date.toLocaleDateString()}</option>;
});





  
const fetchData = async () => {
  try {
    // Fetch data from the server
    const res = await axios.get('/api/symptom-history')
    // Update the component's state with the fetched data
    setBloodPressureData(res.data.bloodPressureData)
    setSeverity(res.data.severity)
  } catch (err) {
    // If there is an error, set the error message in the component's state
    setError(err.response.data.message)
  }
}

// Call the useEffect function and pass in the callback function and an empty array as dependencies
useEffect(() => {
    fetchData()
  }, [])

  
const handleSubmit = async (e) => {
        e.preventDefault();
        const date = new Date();
        try {
            const res = await axios.post('/api/symptom-history', { systolic, diastolic, date });
            setBloodPressureData([...bloodPressureData, res.data.bloodPressureData]);
            setSeverity(res.data.severity);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const filteredData = bloodPressureData.filter(data => {
    return data.date.getTime() === selectedDate.getTime() || (data.date >= selectedDays[0] && data.date <= selectedDays[1]);
});

  const bloodPressureDataForGraph = {
    labels: bloodPressureData.map((data) => data.date),
    datasets: [
      {
        label: 'Systolic',
        data: bloodPressureData.map((data) => data.systolic),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
         bordercolor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Diastolic',
        data: bloodPressureData.map((data) => data.diastolic),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };



  return (
    
   <>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}

           <label>Select date:</label>
            <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
                {dateOptions}
            </select>
            

        <label>
          Systolic:
          <input type="number" value={systolic} onChange={(e) => setSystolic(e.target.value)} />
        </label>
        <label>
          Diastolic:
          <input type="number" value={diastolic} onChange={(e) => setDiastolic(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Line data={bloodPressureDataForGraph} />
      <p>Current symptom severity: {severity}</p>
    </>
  );
};

export default Dashboard;