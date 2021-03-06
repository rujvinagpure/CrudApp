import { getUsers } from "../Service/api";
import { useEffect,useState } from 'react';
import { TableBody,Button, TableCell,Table,TableRow, TableHead,makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    table:{
width: '90%',
margin : '50px 0 0 50px'
    },
    thead:{
        '& > *':{
            background: '#000000',
            color: '#ffffff',
            fontSize: '20px'
        },
        row:{
        '& > *':{
fontSize: 20
        }
    }}
})
const AllUsers = () => {
const [users, setUsers] =useState([]);
const classes= useStyle();
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers =async() =>{
      const response=   await getUsers();
      console.log(response.data);
      setUsers(response.data);
    }
return (

<Table className ={classes.table}>
    <TableHead>
        <TableRow className={classes.thead}>
             <TableCell>Id</TableCell>
             <TableCell>Name</TableCell>
             <TableCell>Username</TableCell>
             <TableCell>Email</TableCell>
             <TableCell>Phone</TableCell>
             <TableCell></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
      {  users.map(user =>(

<TableRow className={classes.row}>
    <TableCell>{user.id}</TableCell>
    <TableCell>{user.name}</TableCell>
    <TableCell>{user.username}</TableCell>
    <TableCell>{user.email}</TableCell>
    <TableCell>{user.phone}</TableCell>
    <TableCell>
        <Button variant="contained" color="primary" style={{marginRight:10}}>Edit</Button>
        <Button variant="contained" color="secondary">Delete</Button>
    </TableCell>
</TableRow>
        ))
     }
    </TableBody>
</Table>
)
}

export default AllUsers;