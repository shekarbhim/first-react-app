import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import { useNavigate  } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UploadDocs from './uploaddocs';
import "./welcome.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
    id,
  name,
  status,
  claimStatus,
  registeredOn,
) {
  return { id,name, status, claimStatus, registeredOn };
}

const NAME = 'Shekar Reddy. B';
const MY_POLICIES = [
     {id:'1',registeredOn:'28-09-2022',status:'active',claimStatus:'ACCEPTED',name: 'Bajaj Allianz General Insurance Co.'}
    ,{id:'2',registeredOn:'28-09-2022',status:'active',claimStatus:'REJECTED',name: 'Bharti AXA General Insurance Co.'}
    ,{id:'3',registeredOn:'28-09-2022',status:'active',claimStatus:'',name: 'Cholamandalam MS General Insurance Co.'}
    ,{id:'4',registeredOn:'28-09-2022',status:'active',claimStatus:'',name: 'Future Generali India Insurance Co.'}
    ,{id:'5',registeredOn:'28-09-2022',status:'active',claimStatus:'',name: 'HDFC ERGO General Insurance Co.'}
    ,{id:'6',registeredOn:'28-09-2022',status:'active',claimStatus:'',name: 'ICICI Lombard General Insurance Co.'}
];


const rows = MY_POLICIES.map(item => createData(item.id, item.name, item.status, item.claimStatus, item.registeredOn));

export const Welcome = (props) => {

  const [openUpload, setOpenUpload] = React.useState(false);
  const handleRequestClaim = () => {
    setOpenUpload(true);
  }

  let navigate = useNavigate(); 
  const handleLogout = () => {
    // props.history.push('/login');
    navigate('/login');
  }
  return (
    <div className="home-container">
      <div className="welcome">
        <div className="welcome">Welcome Mr. {NAME}</div>
        <Button color="secondary" onClick={handleLogout}>Logout</Button>
        </div>
<div className='table-container'>
  <div className='heading'>My Policies</div>
        <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Policy Name</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Claim Status</StyledTableCell>
            <StyledTableCell align="left">Registered On</StyledTableCell>

            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
              <StyledTableCell align="left">{row.claimStatus}</StyledTableCell>
              <StyledTableCell align="left">{row.registeredOn}</StyledTableCell>

              <StyledTableCell align="left">{row.claimStatus === '' && <Button variant="outlined" onClick={handleRequestClaim}>Request Claim</Button>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
    {openUpload && <UploadDocs openUpload ={openUpload} setOpenUpload={setOpenUpload}/>}
    </div>
  );
}

export default Welcome;
