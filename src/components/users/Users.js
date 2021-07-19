import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faMale,
  faFemale,
  faEnvelope,
  faPhoneVolume,
  faArrowRight,
  faAngleLeft,
  faAngleRight,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  filterByGender,
  getAllUsers,
  filterByName,
  setDetails,
  filterByCountry,
} from "../../state/actions/users";

import Switch from "react-switch";
import { CountryDropdown } from "react-country-region-selector";
import SingleUser from "../singleUser/SingleUser";

import { UserContainer } from './style';
const Users = () => {

  // stores
  const dispatch = useDispatch();

  const {
    results,
    single_gender,
    users_by_name,
    users_by_country,
    loading,
  } = useSelector((state) => state.users);

  // states
  const [checked, setChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("all-users");
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(3);
  const [input, setInput] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  // handle filter by gender
  const handleBtns = (val) => {
    setCountry("");
    setInput("");
    setActiveTab(val);
    if (val === "male-users") {
      dispatch(filterByGender("male"));
    } else if (val === "female-users") {
      dispatch(filterByGender("female"));
    }
  };

  // total number of pages
  const totalPages = Math.ceil(results.length / userPerPage);

  const indexOfLastUsers = currentPage * userPerPage;
  const indexOfFirstUsers = indexOfLastUsers - userPerPage;

  // handle filter by name
  const handleNameInput = (e) => {
    setInput(e.target.value);
    dispatch(filterByName(e.target.value));
  };

  // Next Page
  const increment = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage)
    }
  };

  // Previous Page
  const decrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePerPage = (event) => {
    setUserPerPage(parseInt(event.target.value))
  }

  // handle each user details
  const handleDetails = (id) => {
    const detail = results.find((result) => result.phone === id);
    dispatch(setDetails(detail));
    setShow(!show);
  };

  // handle country check
  const handleChange = (checked) => {
    setChecked(checked);
  };

  const exportToCvs = () => {
    var cvsRow = [];
    var A = [["id", ["first name"]]];
    var re = results;

    for (var item = 0; item < results.length; item++) {
      A.push([item, re[item].name.first]);
    }
    for (var i = 0; i < A.length; ++i) {
      cvsRow.push(A[i].join(","));
    }
    var cvsString = cvsRow.join("%0A");

    var a = document.createElement("a");
    a.href = "data:attachment/csv" + cvsString;
    a.target = "_Blank";
    a.download = "testfile.csv";
    document.body.appendChild(a);
    a.click();
  };

  return (
    <UserContainer className="container-fluid">
      <div className="row">
        <div className="first-section col-12 col-md-6">
          <div className="welcome">
            <div className="hello d-flex align-items-center">
              <h1 className="heading1">Hello,</h1>
              <h1 className="heading2 pl-1"> Emerald </h1>
            </div>
            <p data-testid="welcome-message">
              Welcome to your dashboard, kindly sort through the user base
          </p>
          </div>
          <form className="input-search">
            <FontAwesomeIcon className="search" icon={faSearch} />
            <input
              type="text"
              value={input}
              onChange={handleNameInput}
              data-testid="filter-input"
              placeholder=" Find a user"
            />
          </form>
          <div className="show-users my-5">
            <h6 className="users">Show Users</h6>
            <div className="filter-icons py-3">
              <section className={activeTab === "all-users" ? "activeTab" : ""}>
                <button
                  className="users"
                  data-testid="users"
                  onClick={() => handleBtns("all-users")}
                >
                  <FontAwesomeIcon
                    className="all-icon"
                    icon={faUsers}
                    style={{ fontSize: "30px" }}
                  />
                </button>
                <p className="title">All Users</p>
              </section>
              <section className={activeTab === "male-users" ? "activeTab" : ""}>
                <button className="male" onClick={() => handleBtns("male-users")}>
                  <FontAwesomeIcon
                    className="male-icon"
                    icon={faMale}
                    style={{ fontSize: "40px" }}
                  />
                </button>
                <p className="title">Male Users</p>
              </section>
              <section
                className={activeTab === "female-users" ? "activeTab" : ""}
              >
                <button
                  className="female"
                  onClick={() => handleBtns("female-users")}
                >
                  <FontAwesomeIcon
                    className="female-icon"
                    icon={faFemale}
                    style={{ fontSize: "40px" }}
                  />
                </button>
                <p className="title">Female Users</p>
              </section>
            </div>
          </div>
        </div>
        <div className="second-section col-12 col-md-6">
          <>
            {" "}
            {activeTab === "male-users" ? (
              <h3>Male Users</h3>
            ) : activeTab === "female-users" ? (
              <h3>Female Users</h3>
            ) : activeTab === "user-info" ? (
              <h3> User List</h3>
            ) : (
              <h3>All Users</h3>
            )}
          </>
          <div className="reduce mt-3">
            <p>Filter by :</p>
            <div className="filter-by">
              <form className=" form">
                <div className="list-search">
                  <p>Users Per Page</p>
                  <select
                    value={userPerPage}
                    onChange={handlePerPage}
                  >
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={7}>7</option>
                  </select>
                </div>
                <div className="country-search">
                  <CountryDropdown
                    style={{
                      width: "200px",
                      height: "50px",
                      border: "none",
                      background: "none",
                      outline: "none",
                      borderRadius: "30px",
                      fontSize: "14px",
                      fontFamily: "MontserratItalic",
                    }}
                    name="country"
                    id="country"
                    className="country"
                    valueType="full"
                    value={country}
                    onChange={(_, e) => {
                      setCountry(e.target.value.toLowerCase());
                      dispatch(filterByCountry(e.target.value));
                      setActiveTab("");
                    }}
                  />
                </div>
                <div className="switch">
                  <Switch
                    className="pr-3"
                    onChange={handleChange}
                    checked={checked}
                  />
                  <span>Show Country</span>
                </div>
              </form>
            </div>
          </div>
          {!show ? (
            <div className="row">
              {
                (activeTab === "all-users" && input.length === 0 && country.length === 0
                  ? results
                  : activeTab !== "all-users" &&
                    input.length === 0 &&
                    country.length === 0
                    ? single_gender
                    : input.length > 0
                      ? users_by_name
                      : activeTab.length === 0 && country.length > 0
                        ? users_by_country
                        : results
                )
                  .slice(indexOfFirstUsers, indexOfLastUsers)
                  .map((result) => (
                    <div className="col-12" key={result.phone}>
                      <div className="card my-4 pl-3 py-4">
                        <div className="minicard">
                          <img src={result.picture.large} alt="" />
                          <div className="info">
                            <h5>
                              {" "}
                              {result.name.first} {result.name.last}
                            </h5>
                            <p>
                              {result.location.street.number}{" "}
                              {result.location.street.name}, {result.location.city},{" "}
                              {result.location.state}, {result.location.country}
                            </p>
                            <div className="contact-info">
                              <div className="contact">
                                <p className="email">
                                  <span className="mr-2">
                                    <FontAwesomeIcon
                                      className="envelope"
                                      icon={faEnvelope}
                                    />
                                  </span>
                                  {result.email}
                                </p>
                                <p className="phone">
                                  <span className="mr-2">
                                    <FontAwesomeIcon
                                      className="phone"
                                      icon={faPhoneVolume}
                                    />
                                  </span>
                                  {result.phone}
                                </p>
                              </div>
                              <div className="info">

                                <button
                                  className={activeTab === "all-users" ? "details" : activeTab === "male-users" ? "male" : "female"}
                                  onClick={() => {
                                    setActiveTab("user-info");
                                    handleDetails(result.phone);
                                  }}
                                >
                                  <FontAwesomeIcon
                                    className="right"
                                    icon={faArrowRight}
                                  />
                                </button>
                              </div>
                            </div>
                            { }
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              {!loading &&
                activeTab === "all-users" &&
                input.length === 0 &&
                results.length === 0 && (
                  <h3 className="mx-auto my-5 font-italic">No results found!</h3>
                )}
              {activeTab !== "all-users" &&
                input.length === 0 &&
                country.length === 0 &&
                single_gender.length === 0 && (
                  <h3 className="mx-auto my-5 font-italic">No results found!</h3>
                )}
              {input.length > 0 && users_by_name.length === 0 && (
                <h3 className="mx-auto my-5 font-italic">No results found!</h3>
              )}
              {country.length > 0 && users_by_country.length === 0 && (
                <h3 className="mx-auto my-5 font-italic">No results found!</h3>
              )}
              {loading && (
                <h3 className="mx-auto my-5 font-italic">Loading users...</h3>
              )}
            </div>
          ) : (
            <SingleUser setShow={setShow} setActiveTab={setActiveTab} />
          )}

          <div className="bottom d-flex justify-content-between my-5">
            <button className="download" onClick={() => exportToCvs()}>
              <FontAwesomeIcon
                style={{ marginRight: "0.5rem" }}
                icon={faCloudDownloadAlt}
              />
            Download results
          </button>
            {!show && (
              <div className="prev-next">
                <button
                  onClick={() => {
                    decrement();
                    setActiveButton("previous");
                  }}
                  className={activeButton === "previous" ? "active" : "prev"}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button
                  onClick={() => {
                    increment();
                    setActiveButton("next-btn");
                  }}
                  className={activeButton === "next-btn" ? "active1" : "next"}
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </UserContainer>
  );
};


export default Users;
