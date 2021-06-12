 
import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: #1d3557;
  position: fixed;
  width: 100%;
  z-index: 100;
  color: #fff;
  height: 50px;
  h4 {
      margin-top: 20px;
      margin-left: 20px;
      text-transform: uppercase;
  }
`;

const header = (props) => {
  return (
    <>
      <Header>
          <h4>User List</h4>
      </Header>
    </>
  );
};

export default header;