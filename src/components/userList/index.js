import React from "react";
import { connect } from "react-redux";
import Avatar from "react-avatar";
import styled from "styled-components";
import Header from "../../shared/Header";

const ListWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: rgb(255, 255, 255);
  max-width: 600px;
  padding: 13px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: rgb(37 117 252 / 20%) 0px 2px 20px 0px;
`;
const Divider = styled.hr`
  border: 2px solid #333;
  margin-top: 10px;
`;

export const UsersList = ({ userObj }) => {
  return (
    <>
      <Header />
      <ListWrap>
        {userObj.map((data) => {
          return (
            <React.Fragment key={data.mobile}>
              <List>
                <div style={{ display: "inline" }}>
                  <Avatar
                    name={data.username}
                    maxInitials={1}
                    round={true}
                    size="60"
                  />
                  <span style={{ marginLeft: "20px", fontWeight: "900" }}>
                    {data.username}
                  </span>
                  <span style={{ marginLeft: "20px", fontWeight: "900" }}>
                    {data.mobile}
                  </span>
                </div>
              </List>
              <Divider />
            </React.Fragment>
          );
        })}
      </ListWrap>
    </>
  );
};

const mapStateToProps = (state) => ({
  userObj: state.userObj,
});

export default connect(mapStateToProps)(UsersList);
