import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [items, setItems] = useState([]);

    const onSubmit = (data) => {
        console.log(data)
        axios.post('https://knowledgehub.demopolyct.online/api/unit', data).then(res => {
            console.log(res);
            fetchItems();
        })
    };

    const fetchItems = () => {
        axios.get('https://knowledgehub.demopolyct.online/api/unit').then(res => {
            setItems(res.data.data);
        })
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
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
                    <input className='form-control' {...register('description', { required: true, minLength: 10, maxLength: 100 })} />
                    {errors.description && errors.description.type === 'required' && <span className='text-success'>Description is required</span>}
                    {errors.description && errors.description.type === 'minLength' && <span className='text-success'>Description must be at least 10 characters long</span>}
                    {errors.description && errors.description.type === 'maxLength' && <span className='text-success'>Description must be less than 200 characters long</span>}
                </div>
                <div className='mt-3'>
                    <button className='text-light btn btn-info'>Add</button>
                </div>
            </form>
            <div className='mt-5'>
                <h3>List of API</h3>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                  <td>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SignupForm;
