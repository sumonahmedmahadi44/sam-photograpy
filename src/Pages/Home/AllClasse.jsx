import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAdmin from "../../Hooks/UseAdmin";
import UseInstructor from "../../Hooks/UseInstructor";
import logo from '../../../public/logo.jpg'

const AllClasse = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin]=UseAdmin();
    const [isInstructor]=UseInstructor();

    const navigate = useNavigate();
    const location = useLocation();


    const {
        data: classes = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
          const res = await fetch(
            "https://sam-photgrapy-server-sumonahmedmahadi44.vercel.app/approved"
          );
          return res.json();
        },
      });

    return (
        <div>
            
        </div>
    );
};

export default AllClasse;