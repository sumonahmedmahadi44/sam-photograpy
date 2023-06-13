import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle';
import Container from '../../Shared/Container/Container';


const PopularInstructor = () => {
    const {
        data: instructor = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ["instructor"],
        queryFn: async () => {
          const res = await fetch(
            "https://sam-photgrapy-server-sumonahmedmahadi44.vercel.app/instructor"
          );
          return res.json();
        },
      });
      
    return (
        <Container>
           <SectionTitle
        heading="Most Popular  Instructor"
        subHeading="Welcome to Sam Photography"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center my-10">
      {instructor.map((ins) => (
          <div key={ins._id} className="card w-96 bg-teal-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={ins.image} alt="Shoes" className="rounded-xl h-96 " />
            </figure>
            <div className="card-body  items-center text-center">
              <h2 className="card-title">ClassName: {ins.className}</h2>
              <p>Instructor Name: {ins.displayName}</p>
              <p>Available Seat :{ins.AvailableSeat}</p>
              <p>Enroll Students : {ins.enroll}</p>
              <p>Price : {ins.price}</p>
              
            </div>
          </div>
        ))}
      </div>
        </Container>
    );
};

export default PopularInstructor;