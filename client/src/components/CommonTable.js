import React,{useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Modal from './modal'

import ShareIcon from '@mui/icons-material/Share';
const CommonTable=() =>{
  const [openPopup,setopenPopup]=useState(false)
 
  const pages = [10 ]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()
  const handleChangePage = (event, newPage) => {
    
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (event) => {
  //   console.log("rowperpage",page)
  //   setRowsPerPage(parseInt(event.target.value, 10))
  //   setPage(0);
  // };
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

  return (
    <>
    <div className='overflow-x-scroll mt-8 p-2 w-full'>
       <TableContainer component={Paper}  >
      <Table size="small" aria-label="simple table" className="w-full ">
        <TableHead>
          <TableRow  className="font-bold  bg-light2" >
          
            <TableCell  style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}}> Hospital ID </TableCell>
            <TableCell align="center" style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}}> Hospital Name </TableCell>
            <TableCell align="center" style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}}> Doctor ID </TableCell>
            <TableCell align="center" style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}} >Date</TableCell>
            <TableCell align="center" style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}}>Viewed By</TableCell>
            <TableCell align="center" style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}}>Action</TableCell>
        
            {/* <TableCell align="center">Main</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody >

        <TableRow  className="font-bold  " >
          
          <TableCell  >#123</TableCell>
          <TableCell align="center" className="text-slate-100" > AIIMS </TableCell>
          {/* <TableCell align="center"  className="text-slate-100" > 
          <select
              name="category"
              className="border-1 border-gray-400 outline-none p-1 rounded"
            >
              <option value="reports" defaultValue>
                Reports
              </option>
              <option value="soap_notes">SOAP Notes</option>
              <option value="prescription">Prescription</option>
              <option value="certificate">Certificate</option>
              <option value="referral">Referral</option>
            </select>
          
          </TableCell> */}
          <TableCell  align="center" >#12AMIT</TableCell>
          <TableCell  align="center" >1/2/23</TableCell>
          <TableCell  align="center"  onClick={()=>setopenPopup(true)}>View</TableCell>
          <TableCell  align="center" >

            <ShareIcon style={{fontSize:"22px"}}/>
          </TableCell>
    
          </TableRow>
   
         </TableBody>
         </Table>
         </TableContainer>
      <TablePagination
         component="div"
         className="bg-light2 overflow-x-scroll"
         page={page}
         rowsPerPage={rowsPerPage}
         rowsPerPageOptions={pages}
        count={4}
        onPageChange={handleChangePage}
        // onChangeRowsPerPage={handleChangeRowsPerPage}
        
      />
         </div>
         <Modal  openPopup={openPopup} setopenPopup={setopenPopup} headershow={false}>
          <p>Ehr</p>
      </Modal>
    </>
  );
}

export default CommonTable;