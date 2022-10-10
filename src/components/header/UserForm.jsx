import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

const UserForm = () => {
  const { user, setUser, setFormVisible } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    setUser({ ...data });
    formClose();
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ ...user }));
  }, [user]);

  const formClose = () => {
    setFormVisible(false);
  };

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  //
  //   if (!user?.email?.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       email: "Please, type valid email",
  //     }));
  //   } else {
  //     setError((prevState) => ({ ...prevState, email: "" }));
  //   }
  //   if (user.name?.length <= 2) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       name: "Please, type valid name",
  //     }));
  //   } else if (!user.name?.length) {
  //     setError((prevState) => ({ ...prevState, name: "Required" }));
  //   } else {
  //     setError((prevState) => ({ ...prevState, name: "" }));
  //   }
  // };

  return (
    <motion.div
      className="blur active"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        className="user-form"
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, scale: 0, rotate: 360, x: "-50%", y: "-50%" }}
        animate={{
          opacity: 1,
          scale: [0.3, 0.7, 0.3, 0.7, 0.3, 1],
          rotate: [10, 30, -100, 360, 0],
          x: ["-100%", "-50%", "100%", "-50%", "-100%", "-50%"],
        }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <input
          type="text"
          placeholder={"E-mail"}
          defaultValue=""
          {...register("email", {
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            required: true,
          })}
        />
        <div>
          {errors.email && (
            <AnimatePresence>
              <motion.div
                initial={{ x: 40, opacity: 0, color: "red" }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
              >
                Wrong e-mail
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        <input
          type="text"
          placeholder={"Name"}
          defaultValue=""
          {...register("name", { minLength: 2, required: true })}
        />
        <div>
          <AnimatePresence>
            {errors.name && (
              <motion.div
                initial={{ x: 40, opacity: 0, color: "red" }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
              >
                Required
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button className="button">Sign Up</button>
        <div className="form-close" onClick={formClose}></div>
      </motion.form>
    </motion.div>
  );
};

export default UserForm;
