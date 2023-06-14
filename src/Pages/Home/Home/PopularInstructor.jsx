import SectionTitle from '../../../components/SectionTitle';
import Container from '../../Shared/Container/Container';
import UsePopularInstructor from '../../../Hooks/UsePopularInstructor';
import logo from '../../../../public/logo.jpg'


const PopularInstructor = () => {
  const [instructor, ,refetch]= UsePopularInstructor();

  return (
      <Container>
           <SectionTitle
      heading="All Instructor"
      subHeading="Welcome to Sam Photography"
      image={logo}
    ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center my-10">
        {instructor.slice(0,6).map((ins) => (
          <div key={ins._id} className="card w-96 bg-gradient-to-r from-purple-500 to-pink-500200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={ins.image} alt="Shoes" className="rounded-xl h-96 " />
            </figure>
            <div className="card-body  items-center text-center">
              <h2 className="card-title font-bold">Instructor Name : {ins.name}</h2>
              <p className='font-bold'>Instructor Email : {ins.email}</p>
              
              
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularInstructor;