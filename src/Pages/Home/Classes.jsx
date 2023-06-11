import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Container from '../Shared/Container/Container';


const Classes = () => {
    const {data:classes=[]} = useQuery({
        queryKey:['classes'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/approved');
            return res.json();
            
        }
    })
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center my-10'>
            {
            classes.map(cls=><div className="card w-96 bg-teal-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img  src={cls.image} alt="Shoes" className="rounded-xl h-96 " />
            </figure>
            <div className="card-body  items-center text-center">
              <h2 className="card-title">ClassName: {cls.className}</h2>
              <p>Instuctor Name: {cls.displayName}</p>
              <p>Available Seat :{cls.AvailableSeat}</p>
              <p>Price : {cls.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>)}
        </div>
            
        </Container>
    );
};

export default Classes;