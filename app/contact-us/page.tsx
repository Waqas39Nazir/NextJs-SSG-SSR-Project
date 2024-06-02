"use client";
import React, { useState } from "react";
import Input from "@/components/Shared/Input";
import Button from "@/components/Button";
import TextArea from "@/components/Shared/TextArea";

const ContatcUs = () => {
  const [contactUsData, setContactUsData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (event: any) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setContactUsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-6">
      <h1 className=" text-center text-3xl">Contact Us</h1>

      <form
        method="POST"
        className="flex flex-col gap-3 p-8 rounded border shadow-md"
      >
        <Input
          label="First Name"
          placeholder="First Name"
          name="firstName"
          value={contactUsData.firstName}
          onChange={onChangeHandler}
        />

        <Input
          label="Last Name"
          placeholder="Last Name"
          name="lastName"
          value={contactUsData.lastName}
          onChange={onChangeHandler}
        />

        <Input
          label="Subject"
          placeholder="Subject"
          name="subject"
          value={contactUsData.subject}
          onChange={onChangeHandler}
        />

        <TextArea
          label="Message"
          placeholder="Message"
          name="message"
          value={contactUsData.message}
          onChange={onChangeHandler}
        />

        <Button type="submit" title="Submit" />
      </form>
    </div>
  );
};

export default ContatcUs;
