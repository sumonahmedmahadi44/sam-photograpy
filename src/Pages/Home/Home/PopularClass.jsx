import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle";
import Container from "../../Shared/Container/Container";
import logo from "../../../../public/logo.jpg";

const PopularClass = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://sam-photgrapy-server-sumonahmedmahadi44.vercel.app/homeClass"
      );
      return res.json();
    },
  });
  return (
    <Container>
      <SectionTitle
        heading="Most Popular  Classes"
        subHeading="Welcome to Sam Photography"
        image={logo}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center my-10">
        {classes.slice(0, 6).map((cls) => (
          
          <div
          
            key={cls._id}
            className="card w-96 bg-gradient-to-r from-purple-500 to-pink-500200 shadow-xl hover:animate-bounce"
          >
            
            <figure className="px-10 pt-10">
              <img src={cls.image} alt="Shoes" className="rounded-xl h-96 " />
            </figure>
            <div className="card-body  items-center text-center">
              <h2 className="card-title">ClassName: {cls.className}</h2>
              <p className="font-bold">Instructor Name : {cls.displayName}</p>
              <p className="font-bold">Available Seat : {cls.AvailableSeat}</p>
              <p className="font-bold">Enroll Students : {cls.enroll}</p>
              <p className="font-bold">Price : ${cls.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularClass;
