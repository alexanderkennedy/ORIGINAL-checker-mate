
import React, { useState } from 'react';
import {Link} from "react-router-dom";

import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";

import "./DisplayWarehouses.scss";
import Modal from '../DeleteWarehouseModal/DeleteWarehouseModal';


const DisplayWarehouseItem = ({warehouse}) => {

    const warehouseView = "/warehouses/" + warehouse.id;
    const warehouseEdit = "/warehouses/" + warehouse.id + "/edit";
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };


    return (
        <article className="warehouse-item list-item">
            <div className="list-item__left-col">
                <h2 className="list-item__heading">Warehouse</h2>
                <Link to={warehouseView} className="warehouse-item__name list-item__link list-item__link--chevron">{warehouse.name}</Link>
                <h2 className="list-item__heading">Address</h2>
                <p className="warehouse-item__address list-item__text">{warehouse.address}, {warehouse.city}, {warehouse.county}, {warehouse.country}</p>
            </div>
            <div className="list-item__right-col">
                <h2 className="list-item__heading">Contact Name</h2>
                <p className="warehouse-item__contact list-item__text">{warehouse.contact.name}</p>
                <h2 className="list-item__heading">Contact Information</h2>
                <p className="warehouse-item__contact-info list-item__text">{warehouse.contact.phone}<br />{warehouse.contact.email}</p>
            </div>  
            <div className="list-item__actions">
                <Link to="" className="list-item__actions--delete" onClick={openModal}><img src={deleteIcon} alt="Delete Warehouse" /></Link>
                <Link to={warehouseEdit} className="list-item__actions--edit"><img src={editIcon} alt="Edit Warehouse" /></Link>
                <Modal showModal={showModal} setShowModal={setShowModal} warehouse={warehouse} />
            </div>                      
        </article>
    );
}

export default DisplayWarehouseItem;