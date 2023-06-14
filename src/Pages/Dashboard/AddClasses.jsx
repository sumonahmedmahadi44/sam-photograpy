import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxios from "../../Hooks/UseAxios";
import SectionTitle from "../../components/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from '../../../public/logo.jpg'

const img_hosting_token = import.meta.env.VITE_IMAGE_KEY;

const AddClasses = () => {
  const [axiosSecure] = UseAxios();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { className, price, AvailableSeat,email,displayName } = data;

          const newClass = {
            className: className,
            price: parseFloat(price),
            AvailableSeat: parseFloat(AvailableSeat),
            status: "pending",
            enroll:0,
            image: imgURL,
            email:email,
            displayName:displayName,
          };

          console.log(newClass);

          axiosSecure.post("/classes", newClass).then((data) => {
            console.log("after posting new class item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle subHeading="Welcome" heading="Add a class" image={logo}></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">class Name*</span>
          </label>
          <input
            type="text"
            placeholder="class Name"
            {...register("className", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
          Value={user?.displayName}
          readOnly
            
            {...register("displayName", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="text"
            Value={user?.email}
            readOnly
            
            {...register("email", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>

        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="price"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Available Seat*</span>
          </label>
          <input
            type="number"
            {...register("AvailableSeat", { required: true })}
            placeholder="Available Seat"
            className="input input-bordered w-full "
          />
        </div>

        <input
          className="btn btn-sm mt-4 bg-gradient-to-r from-purple-500 to-pink-500200"
          type="submit"
          value="Add class"
        />
      </form>
    </div>
  );
};

export default AddClasses;
