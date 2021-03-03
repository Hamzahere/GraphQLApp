import React from 'react';
import { useQuery, gql ,useMutation} from '@apollo/client';

const GET_EMPLOYEES = gql`
  query GetAllEmployees {
    employees {
      id,
      name,
      email,
      age
    }
  }
`
  const ADD_EMPLOYEE = gql`
  mutation AddEmployee($id: Int!, $name:String!, $email:String,$age:Int!,$salary:Int!) {
    addEmployee(
        input:{id:$id,name:$name,email:$email,age:$age,salary:$salary}
    ) {
      id
      name
    }
  }
`;

function Employees() {
    const { loading, error, data } = useQuery(GET_EMPLOYEES);

    
        const [addEmpl] = useMutation(ADD_EMPLOYEE);
      

    if (loading)
        return <h1>Loading ...</h1>

    if (error)
        return <h1>Error</h1>

    const { employees } = data;

    return (
        <div>
            <h1>Employees List</h1>
            <table border="2" width="500">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(std => {
                            return (<tr key={std.id}>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.email}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>

            <button onClick={()=>
                addEmpl({ variables: { id: 1,name:"fayez",email:"fayez@gmail.com",age:21,salary:4000 } })
            }>Add Employee</button>
        </div>
    );
}

export default Employees;
