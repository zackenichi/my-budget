import React from 'react'
import {TiEdit} from "react-icons/ti";

const peso = "₱";

const ViewBudget = ({budget,handleEditClick}) => {
    return (
        <div>
        
            <span>Budget: {peso}{budget}</span>
           
            {/* <button type="button" className="btn btn-primary" onClick={handleEditClick}>Edit</button> */}
            <TiEdit size="1.5rem" onClick={handleEditClick} className="edit" />
            
        </div>
    )
}

export default ViewBudget;
