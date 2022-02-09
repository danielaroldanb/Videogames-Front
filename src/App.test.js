import React from "react";
import { Link } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Landing from "../src/Components/Landing/Landing";
import { configure, shallow } from "enzyme";


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("It should contain a link to /home",()=>{
// let landingPage=shallow(<LandingPage/>);
// expect(landingPage.find(Link).at(0).prop("to")).toEqual("/home")
// });
