import React from "react";
import {render, screen} from '@testing-library/react'
import Login from "./Login";

describe("Test login form", function () {
  let wrapper;

  it("Email was created successfully", function () {
    wrapper = render(<Login />);
    /*wrapper.find('input[type="text"]').simulate("change", {
      target: { id: "email", value: "test@gmail.com" },
    });
    expect(wrapper.state("username")).toEqual("test@gmail.com");*/
    expect(wrapper.getByRole('form')).toHaveFormValues({
      email: 'test@gmail.com',
      password: '12345',
    })
  });

  /*it("Password was created successfully", function () {
    wrapper = mount(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { id: "password", value: "12345" },
    });
    expect(wrapper.state("password")).toEqual("12345");
  });

  it("login check with right data", () => {
    wrapper = mount(<Login />);
    wrapper
      .find('input[type="text"]')
      .simulate("change", { target: { id: "email", value: "test@gmail.com" } });
    wrapper
      .find('input[type="password"]')
      .simulate("change", { target: { id: "password", value: "12345" } });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("loggedIn")).toBe(true);
  });*/
});
