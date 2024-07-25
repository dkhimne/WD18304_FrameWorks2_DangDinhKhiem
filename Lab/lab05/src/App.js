import './App.css';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUnit, updateUnit, deleteUnit } from './actions/unitActions';
import axios from 'axios';

function App() {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [items, setItems] = useState([]);
    const [editingUnit, setEditingUnit] = useState(null); 
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (editingUnit) {
            dispatch(updateUnit(editingUnit.id, data))
                .then(() => {
                    setEditingUnit(null); 
                    reset();
                    alert("Unit updated successfully!");
                    fetchItems(); 
                })
                .catch(error => {
                    alert("Failed to update unit. Please try again.");
                    console.error(error);
                });
        } else {
            dispatch(createUnit(data))
                .then(() => {
                    reset();
                    alert("Unit created successfully!");
                    fetchItems(); 
                })
                .catch(error => {
                    alert("Failed to create unit. Please try again.");
                    console.error(error);
                });
        }
    };

    const fetchItems = () => {
        axios.get('https://knowledgehub.demopolyct.online/api/unit')
            .then(res => {
                setItems(res.data.data);
            })
            .catch(error => {
                console.error("Failed to fetch units:", error);
            });
    };

    const handleEdit = (unit) => {
        setEditingUnit(unit);
        setValue("name", unit.name);
        setValue("address", unit.address);
        setValue("description", unit.description);
    };

    const handleDelete = (unitId) => {
        if (window.confirm("Are you sure you want to delete this unit?")) {
            dispatch(deleteUnit(unitId))
                .then(() => {
                    alert("Unit deleted successfully!");
                    fetchItems();
                })
                .catch(error => {
                    alert("Failed to delete unit. Please try again.");
                    console.error(error);
                });
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="App">
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='form-label'>Username</label>
                        <input className='form-control' {...register('name', { required: true, minLength: 3, maxLength: 20 })} />
                        {errors.name && errors.name.type === 'required' && <span className='text-warning'>Name is required</span>}
                        {errors.name && errors.name.type === 'minLength' && <span className='text-warning'>Name must be at least 3 characters long</span>}
                        {errors.name && errors.name.type === 'maxLength' && <span className='text-warning'>Name must be less than 20 characters long</span>}
                    </div>
                    <div>
                        <label className='form-label'>Address</label>
                        <input className='form-control' {...register('address', { required: true, minLength: 5, maxLength: 50 })} />
                        {errors.address && errors.address.type === 'required' && <span className='text-danger'>Address is required</span>}
                        {errors.address && errors.address.type === 'minLength' && <span className='text-danger'>Address must be at least 5 characters long</span>}
                        {errors.address && errors.address.type === 'maxLength' && <span className='text-danger'>Address must be less than 50 characters long</span>}
                    </div>
                    <div>
                        <label className='form-label'>Description</label>
                        <input className='form-control' {...register('description', { required: true, minLength: 10, maxLength: 200 })} />
                        {errors.description && errors.description.type === 'required' && <span className='text-success'>Description is required</span>}
                        {errors.description && errors.description.type === 'minLength' && <span className='text-success'>Description must be at least 10 characters long</span>}
                        {errors.description && errors.description.type === 'maxLength' && <span className='text-success'>Description must be less than 200 characters long</span>}
                    </div>
                    <div className='mt-3'>
                        <button className='text-dark btn btn-outline-info'>{editingUnit ? "Update" : "Add"}</button>
                    </div>
                </form>
                <div className='mt-5'>
                    <h3>List of Units</h3>
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.description}</td>
                                    <td className='d-flex'>
                                        <button className='btn btn-outline-warning mr-2' onClick={() => handleEdit(item)}>Edit</button>
                                        <button className='btn btn-outline-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;
