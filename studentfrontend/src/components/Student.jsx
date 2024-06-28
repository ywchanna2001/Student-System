import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [students, setStudents] = React.useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log(student);

        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student added to database.");
            // Optionally refresh the students list after adding a new one
            fetchStudents();
        });
    };

    const fetchStudents = () => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then((result) => {
                setStudents(result);
            });
    };

    React.useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: 'blue' }}><u>Add Student</u></h1>
                <form noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Student Name"
                        variant="standard"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="standard-address"
                        label="Student Address"
                        variant="standard"
                        fullWidth
                        margin="normal"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleClick}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>

            <Paper elevation={3} style={paperStyle}>
                {students.map(student => (
                    <Paper
                        elevation={6}
                        style={{ margin: '10px', padding: '15px', textAlign: "left" }}
                        key={student.id}
                    >
                        <div>Id: {student.id}</div>
                        <div>Name: {student.name}</div>
                        <div>Address: {student.address}</div>
                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}
