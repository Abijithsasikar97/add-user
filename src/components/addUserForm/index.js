import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser } from "../../redux/action/addUser";
import {
  ContainerWrap,
  Container,
  Input,
  Textarea,
  Label,
  SuccessMessage,
  Row,
  Button,
} from "../styles";

export const AddUserForm = ({ addUser }) => {
  let history = useHistory();
  const intialValues = { username: "", mobile: "", address: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showRoute, setShowRoute] = useState(false);

  const submitted = () => {
    console.log(formValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onAdd = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitted(true);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.username) {
      errors.username = "User Name cannot be blank";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile cannot be blank";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Enter valid mobile number";
    }
    if (!values.address) {
      errors.address = "Address cannot be blank";
    }
    if (
      values.username &&
      values.mobile &&
      values.mobile.length == 10 &&
      values.address
    ) {
      addUser(values);
      setFormValues(intialValues);
      setShowRoute(true);
    }
    return errors;
  };

  const goToUserlist = () => {
    history.push("/userlist");
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      submitted();
    }
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    }
  }, [formErrors]);

  return (
    <ContainerWrap>
      <Container>
        {showRoute && <h4 onClick={() => goToUserlist()}>{`<-- user List`}</h4>}
        <h1>Add User to List</h1>
        {Object.keys(formErrors).length === 0 && isSubmitted && (
          <SuccessMessage>Users Added successfully</SuccessMessage>
        )}
        <form onSubmit={onAdd} noValidate>
          <Row>
            <Label htmlFor="username">User Name</Label>
            <Input
              type="text"
              name="username"
              id="username"
              value={formValues.username}
              onChange={handleInputChange}
              className={formErrors.username && "input-error"}
            />
            {formErrors.username && (
              <span className="error">{formErrors.username}</span>
            )}
          </Row>
          <Row>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              type="number"
              name="mobile"
              id="mobile"
              value={formValues.mobile}
              onChange={handleInputChange}
              className={formErrors.mobile && "input-error"}
            />
            {formErrors.mobile && (
              <span className="error">{formErrors.mobile}</span>
            )}
          </Row>
          <Row>
            <Label htmlFor="address">Address</Label>
            <Textarea
              type="text"
              name="address"
              id="address"
              value={formValues.address}
              onChange={handleInputChange}
              className={formErrors.address && "input-error"}
            />
            {formErrors.address && (
              <span className="error">{formErrors.address}</span>
            )}
          </Row>
          <Button type="submit">Add User</Button>
        </form>
      </Container>
    </ContainerWrap>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (userObj) => dispatch(addUser(userObj)),
});

export default connect(null, mapDispatchToProps)(AddUserForm);
