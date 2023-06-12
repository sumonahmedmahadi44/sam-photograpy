import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../components/SectionTitle";
import UseSelectedClass from "../../Hooks/UseSelectedClass";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
    const [selectedClass]= UseSelectedClass();
    const total = selectedClass.reduce((sum, cls) => sum + cls.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;