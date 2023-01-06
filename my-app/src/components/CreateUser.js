import React from "react";

const CreateUser = ({ onChangeForm, createUser, user }) => {
  return (
    <div
      className="container pb-4"
      style={{ border: "1px solid lightgrey", borderRadius: 5 }}
    >
      <div className="row">
        <div className="col-md-7 mt-2 mb-3">
          <h4>Add New User</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createUser();
            }}
          >
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  onChange={onChangeForm}
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                  required
                  value={user.firstName || ""}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input
                  onChange={onChangeForm}
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  value={user.lastName || ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  onChange={onChangeForm}
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                  value={user.email || ""}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
