
import React,{useEffect} from 'react';
import {getAllBookReturnReq} from "../actions/Issue_action"
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';

const ReturnBook = () => {

    const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getAllBookReturnReq())
      },[])



    const {returnbooks} = useSelector(state => state.getAllReturnBookReqReducer)
    var filterd;
    const filterOut = ()=>{
        const todayDate = moment(new Date()).format('YYYY-MM-DD');
        //console.log(todayDate)
         filterd = returnbooks && returnbooks.filter(item =>  (item.updatedAt.slice(0,10) == todayDate))
        
    }

    filterOut()
    return (
        <div className="col-md-10 m-auto pt-4">
        {!filterd.length  ? <>
        <div className="bg-success p-2 text-center">
        <h4 style={{textAlign:"center",fontFamily:"sans-serif",color:"white"}}>Yet No booked Issued Today</h4>
        </div>
        
        </> : 
        <>
          <h4 style={{textAlign:"center",fontFamily:"sans-serif"}}>Today Returned Book</h4>
          <table  className='table table-bordered table-responsive-sm'>

<thead className='thead-dark bg-info'>
  <tr>
      <th style={{textAlign:"center"}}>Book</th>
      <th style={{textAlign:"center"}}>Author</th>
      <th style={{textAlign:"center"}}>Publisher</th>
      <th style={{textAlign:"center"}}>Student Name</th>
      <th style={{textAlign:"center"}}>Branch</th>
  </tr>
</thead>
<tbody>
  
{filterd && filterd.map(book=>{

 
 return <tr key={book._id}>
      <td style={{textAlign:"center"}}>{book.title}</td>
      <td style={{textAlign:"center"}}>
          {book.author}
      </td >
      <td style={{textAlign:"center"}}>
          {book.publisher}
      </td>
     
      <td style={{textAlign:"center"}}>
         {book.userName}
      </td>
      <td style={{textAlign:"center"}}>
         {book.userBranch}
      </td>

  </tr>

})}
</tbody>

</table>
    
     </> }
      </div>
    );
};

export default ReturnBook;