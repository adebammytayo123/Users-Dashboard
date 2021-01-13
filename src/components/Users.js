import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUsers, faMale, faFemale, faCaretDown, faEnvelope, faPhoneVolume, faArrowRight, faAngleLeft, faAngleRight }
    from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import { filterByGender, getAllUsers } from "../state/actions/users";

import Switch from "react-switch";




const Users = () => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("all-users");
    const [currentPage, setCurrentPage] = useState(1);
    const [input, setInput] = useState("");
    const [userPerPage] = useState(3);
    const [activeButton, setActiveButton] = useState("");


    const { results, single_gender } = useSelector((state) => state.users)


    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])


    const handleBtns = (val) => {
        setActiveTab(val)
        if (val === "male-users") {
            dispatch(filterByGender('male'))
        }
        else if (val === "female-users") {
            dispatch(filterByGender('female'))
        }
    }
    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const totalPages = results.length;

    const allResults = results.slice(indexOfFirstUser, indexOfLastUser)

    const indexOfLastUsers = currentPage * userPerPage;
    const indexOfFirstUsers = indexOfLastUser - userPerPage;

    const genderResults = single_gender.slice(indexOfFirstUsers, indexOfLastUsers)


    const handleNameInput = (e) => {
        setInput(e.target.value)
    }

    // Next Page
    const increment = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Prev Page
    const decrement = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }



    const handleChange = (checked) => {
        setChecked(checked)
    }
    return (
        <UserContainer className="row">
            <div className="first-section col-sm-12 col-lg-5">
                <div className="welcome">
                    <div className="hello d-flex align-items-center">
                        <h1 className="heading1">Hello,</h1>
                        <h1 className="heading2 pl-1"> Emerald </h1>
                    </div>
                    <p>Welcome to your dashboard, kindly sort through the user base</p>
                </div>
                <form className="input-search">
                    <FontAwesomeIcon
                        className="search"
                        icon={faSearch}
                    />
                    <input
                        type="text"
                        value={input}
                        onChange={handleNameInput}
                        placeholder=" Find a user"
                    />

                </form>
                <div className="show-users my-5">
                    <h6 className="users">Show Users</h6>
                    <div className="filter-icons py-3">
                        <div className="wrap">
                            <button
                                className="users"
                                onClick={() =>
                                    handleBtns('all-users')}
                            >
                                <FontAwesomeIcon
                                    icon={faUsers}
                                    style={{ fontSize: "30px" }}
                                />
                            </button>
                            <p className="title">All Users</p>
                        </div>
                        <div className="wrap">
                            <button
                                className="male"
                                onClick={() => handleBtns('male-users')}
                            >
                                <FontAwesomeIcon
                                    icon={faMale}
                                    style={{ fontSize: "40px" }}
                                />
                            </button>
                            <p className="title">Male Users</p>
                        </div>
                        <div className="wrap">
                            <button
                                className="female"
                                onClick={() =>
                                    handleBtns('female-users')}
                            >
                                <FontAwesomeIcon
                                    icon={faFemale}
                                    style={{ fontSize: "40px" }}
                                />
                            </button>
                            <p className="title">Female Users</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-section col-sm-12 col-lg-6">
                <>
                    {" "}
                    {activeTab === "male-users" ? (
                        <h3>Male Users</h3>
                    ) : activeTab === "female-users" ? (
                        <h3>Female Users</h3>
                    ) : (
                                <h3>All Users</h3>
                            )}
                </>
                <div className="reduce mt-3">
                    <p>Filter by</p>
                    <div className="filter-by">
                        <form className=" form">
                            <div className="list-search">
                                <FontAwesomeIcon
                                    className="search"
                                    icon={faSearch}
                                />
                                <input
                                    type="text"
                                    placeholder=" Find in a list"
                                />
                            </div>
                            <div className="country-search">
                                <input
                                    type="text"
                                    placeholder=" country"
                                    className="country"
                                />
                                <FontAwesomeIcon
                                    className="down"
                                    icon={faCaretDown}
                                />
                            </div>
                            <div className="switch">
                                <Switch className="pr-3" onChange={handleChange} checked={checked} />
                                <span>Show Country</span>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="row">
                    {(activeTab === "all-users" ? allResults : activeTab !== "all-users" ? genderResults : null).map(result => (
                        <div className="col-12" key={result.phone}>
                            <div className="card my-3 pl-3 py-3">
                                <div className="minicard">
                                    <img src={result.picture.medium} alt="" />
                                    <div className="info">
                                        <h5>{result.name.first} {result.name.last}</h5>
                                        <p>{result.location.street.number} {result.location.street.name}, {result.location.city}, {result.location.state}</p>
                                        <div className="contact-info">
                                            <div className="contact">
                                                <p className="email">
                                                    <span className="mr-2">
                                                        <FontAwesomeIcon
                                                            className="envelope"
                                                            icon={faEnvelope}
                                                        />
                                                    </span>{result.email}
                                                </p>
                                                <p className="phone">
                                                    <span className="mr-2">
                                                        <FontAwesomeIcon
                                                            className="phone"
                                                            icon={faPhoneVolume}
                                                        />
                                                    </span>{result.phone}
                                                </p>
                                            </div>
                                            <div className="info">
                                                <button>
                                                    <FontAwesomeIcon
                                                        className="right"
                                                        icon={faArrowRight}
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <div className="bottom d-flex justify-content-between">
                    <button>button</button>
                    <div className="prev-next">
                        <button

                            onClick={() => {
                                decrement()
                                setActiveButton("previous")
                            }}
                            className={activeButton === "previous" ? "active" : "prev"}
                        >
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                            />
                        </button>
                        <button

                            onClick={() => {
                                increment()
                                setActiveButton("next-btn")
                            }}
                            className={activeButton === "next-btn" ? "active1" : "next"}
                        >
                            <FontAwesomeIcon
                                icon={faAngleRight}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </UserContainer>
    )
}

const UserContainer = styled.div`
  background: var(--darkPurple);
  width: 100%;
  display: flex;
  justify-content: space-between;
  .first-section {
      padding: 10rem 5rem 2rem 5rem;
      .welcome {
          color: #FFFFFF;
         
          .heading1 {
            font-family: ExtraLight;
            opacity: 1;
          }
          .heading2{
            font-family: PoppinsBold;
            opacity: 1;
         } 
          p {
            font-family: PoppinsLight;
            letter-spacing: 0.23px;
            opacity: 0.66;
            font-size: 10px;
          }
      }
      .input-search {
          position: relative;
          align-items: center;
          background: #3C3F54;
          width: 90%;
          height: 50px;
          border-radius: 15px;
          padding: 0.8rem 1rem;
          margin-top: 2rem;
          input {
            font-family: SemiBold;
            background: none !important;
            outline: none;
            color : #FFFFFF;
            border: none;
            padding-left: 2.5rem;
          }
          .search {
              top: 15px;
              position: absolute;
              color: #FFFFFF;
              font-size: 20px;
          }
        }
      .show-users {
          display: block;
          color: #FFFFFF;
          .users {
            font-family: SemiBold;
            opacity: 0.7;
          }
      }
      .filter-icons {
          display: flex;
          margin-top: 1rem;
          align-items: center;
          .wrap {
            transition: all 1s linear;
          }
          .wrap:hover {
              transform: scale(1.2);
          }
          .users {
              margin-right: 1.5rem;
              background: var(--mainPink);
              color: #FFFFFF;
              border: none;
              border-radius: 20px;
              width: 80px;
              outline: none;
              height: 70px;
              opacity: 1;
          }
          .male {
              margin-right: 1.5rem;
              background: var(--mainGreen);
              color: #FFFFFF;
              border: none;
              border-radius: 20px;
              width: 80px;
              outline: none;
              height: 70px;
              opacity: 1;
          }
          .female {
              margin-right: 1.5rem;
              background: var(--fairPurple);
              color: #FFFFFF;
              border: none;
              border-radius: 20px;
              width: 80px;
              height: 70px;
              outline: none;
              opacity: 1;
          }
          .title {
             font-family: PoppinsMedium;
             opacity: 0.7;
             font-size: 10px;
             margin-top: 1rem;
          }
        }
    }
    .second-section {
        background: var(--mainWhite);
        margin: 1rem;
        padding: 3rem;
        border-radius: 15px;
        width: 55%;
        h3 {
            font-family: PoppinsBold;
            color: var(--darkPurple);
            opacity: 1; 
        }
        p {
            opacity: 0.9; 
            color: var(--darkPurple);
            font-family: PoppinsLight; 
        }
        .filter-by {
            display: flex;
            justify-content: space-between;
            margin-top: -2rem;
        }
        .form {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .list-search {
          position: relative;
          align-items: center;
          background: var(--lighterWhite);
          width: 270px;
          height: 50px;
          border-radius: 30px;
          color: var(--darkPurple) !important;
          margin-top: 2rem;
          margin-right: 1rem;
          input {
            position: absolute;
            top: 15px;
            left: 50px;
            font-family: SemiBold;
            background: none !important;
            outline: none;
            color: var(--darkPurple) !important;
            border: none;
            opacity: 0.52; 
            font-size: 15px;
          }
          .search {
            position: absolute;
            top: 17px;
            left: 15px;
            width: 18px;
            height: 18px;
            opacity: 0.6;
          }
        }
        .country-search {
          position: relative;
          align-items: center;
          background: var(--lighterWhite);
          width: 120px;
          height: 50px;
          border-radius: 30px;
          color: var(--darkPurple) !important;
          margin-top: 2rem;
          margin-right: 1rem;
          input {
            position: absolute;
            top: 12px;
            left: 15px;
            font-family: SemiBold;
            background: none !important;
            outline: none;
            color: var(--darkPurple) !important;
            border: none;
            font-size: 15px;
          }
          .down {
               top: 15px;
              right: 20px;
              position: absolute;
              color: var(--darkPurple);
              font-size: 20px;
          }
          
        }
        .switch {
            display: flex;
            align-items: center;
            margin-top: 2rem;
            span {
                font-family: SemiBold;
                letter-spacing: -0.42px;
                color: #000000;
                opacity: 0.62;
                font-size: 0.8rem;
            }
        }
        .card {
            height: 150px;
            border-radius: 10px;
            border: none;
            .minicard {
            display: flex;
            img {
                width: 90px;
                height: 90px;
                border-radius: 50px;
                border: 5px solid var(--mainGreen);
            }
            .info {
                display: block;
                margin-left: 2rem;
                h5 {
                    color: var(--darkPurple);
                    font-family: PoppinsBold;
                    opacity: 1;
                }
                p {
                    font-family: MediumItalic; 
                    color: var(--darkPurple);
                    opacity: 0.69;
                    font-size: 16px;
                }
            }
            .contact-info {
                display: flex;
                .contact {
                display: flex;
                color: var(--darkPurple);
                font-family: PoppinsLight;
                .email {
                    font-size: 0.8rem;
                    margin-right: 0.5rem
                }
                .phone {
                    font-size: 0.8rem;
                }
            }
               .info {
                   float: right;
                   button {
                    margin-top: -0.5rem;
                    width: 2.5rem;
                    height: 2rem;
                    background: var(--normalGreen) !important;
                    border: none;
                    border-radius: 10px;
                    color: #FFFFFF;
                }
               }
            }
            
        }
        }
        .prev-next {
            display: flex;
            justify-content: space-between;
           
            .prev {
                background: var(--lighterWhite);
                border: none;
                outline: none;
                margin-left: -1rem;
                margin-right: 0.5rem;
                padding: 0.3rem 0.8rem;
                border-radius: 10px;
            }
            .next{
                background: var(--lighterWhite);
                border: none;
                outline: none;
                padding: 0.3rem 0.8rem;
                border-radius: 10px;
            }
            .active {
                background: var(--darkPurple);
                margin-left: -1rem;
                margin-right: 0.5rem;
                padding: 0.3rem 0.8rem;
                border-radius: 10px;
                border: none;
                outline: none;
                color: #FFFFFF;
            }
            .active1 {
                background: var(--darkPurple);
                /* margin-left: -1rem;
                margin-right: 0.5rem; */
                padding: 0.3rem 0.8rem;
                border-radius: 10px;
                border: none;
                outline: none;
                color: #FFFFFF;
            }
        }
    }

`

export default Users;
