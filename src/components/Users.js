import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch, faUsers,
    faMale, faFemale, faCaretDown,
    faEnvelope, faPhoneVolume,
    faArrowRight, faAngleLeft,
    faAngleRight, faCloudDownloadAlt,
}
    from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';
import { filterByGender, getAllUsers, filterByName, setDetails } from "../state/actions/users";

import Switch from "react-switch";
import SingleUser from "./SingleUser";




const Users = () => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [activeTab, setActiveTab] = useState("all-users");
    const [currentPage, setCurrentPage] = useState(1);
    const [input, setInput] = useState("");
    const [activeButton, setActiveButton] = useState("");
    const [show, setShow] = useState(false);



    const { results, single_gender, users_by_name } = useSelector((state) => state.users)
    const userPerPage = 3

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

    const totalPages = Math.ceil(results.length / userPerPage);

    const indexOfLastUsers = currentPage * userPerPage;
    const indexOfFirstUsers = indexOfLastUser - userPerPage;

    const handleNameInput = (e) => {
        setInput(e.target.value)
        dispatch(filterByName(e.target.value))
    }

    // Next Page
    const increment = () => {

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    console.log('current', currentPage, 'totalPages', totalPages)

    // Previous Page
    const decrement = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const handleDetails = (id) => {
        const detail = results.find(result => result.phone === id)
        dispatch(setDetails(detail))
        setShow(!show)
    };



    const handleChange = (checked) => {
        setChecked(checked)
    };

    const exportToCvs = () => {
        var cvsRow = [];
        var A = [["id", ["first name"]],]
        var re = results;

        for (var item = 0; item < results.length; item++) {
            A.push([item, re[item].name.first])
        }
        for (var i = 0; i < A.length; ++i) {
            cvsRow.push(A[i].join(","))
        }
        var cvsString = cvsRow.join("%0A");

        var a = document.createElement("a")
        a.href = 'data:attachment/csv' + cvsString;
        a.target = "_Blank"
        a.download = "testfile.csv";
        document.body.appendChild(a)
        a.click();
        console.log(cvsString)
    }
    return (
        <UserContainer className="row">
            <div className="first-section col-sm-12 col-lg-5">
                <div className="welcome">
                    <div className="hello d-flex align-items-center">
                        <h1 className="heading1">Hello,</h1>
                        <h1 className="heading2 pl-1"> Emerald </h1>
                    </div>
                    <p data-testid="welcome-message">Welcome to your dashboard, kindly sort through the user base</p>
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
                                data-testid='users'
                                onClick={() =>
                                    handleBtns('all-users')}
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
                            <button
                                className="male"
                                onClick={() => handleBtns('male-users')}
                            >
                                <FontAwesomeIcon
                                    className="male-icon"
                                    icon={faMale}
                                    style={{ fontSize: "40px" }}
                                />
                            </button>
                            <p className="title">Male Users</p>
                        </section>
                        <section className={activeTab === "female-users" ? "activeTab" : ""}>
                            <button
                                className="female"
                                onClick={() =>
                                    handleBtns('female-users')}
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
                                    disabled
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
                {!show ? (
                    <div className="row">
                        {(activeTab === "all-users" && input.length === 0 ? results : activeTab !== "all-users" && input.length === 0 ? single_gender : input.length > 0 ? users_by_name : null).slice(indexOfFirstUsers, indexOfLastUsers).map(result => (
                            <div className="col-12" key={result.phone}>
                                <div className="card my-4 pl-3 py-4">
                                    <div className="minicard">
                                        <img src={result.picture.medium} alt="" />
                                        <div className="info">
                                            <h5> {result.name.first} {result.name.last}</h5>
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
                                                    <button
                                                        onClick={() =>
                                                            handleDetails(result.phone)
                                                        }
                                                    >
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
                ) : (<SingleUser setShow={setShow} />)}


                <div className="bottom d-flex justify-content-between my-5">
                    <button
                        className="download"
                        onClick={() =>
                            exportToCvs()
                        }
                    >
                        <FontAwesomeIcon
                            style={{ marginRight: "0.5rem" }}
                            icon={faCloudDownloadAlt}
                        />
                        Download results
                        </button>
                    {!show && <div className="prev-next">
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
                    </div>}
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
  overflow: hidden;
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
          @media (max-width: 1300px) {
              width: 100%;
          }
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
          width: 70%;
          justify-content: space-between;
          margin-top: 1rem;
          align-items: center;
          @media (max-width: 1300px) {
              width: 100%;
          }
          section {
            transition: all 1s linear;
            &.activeTab {
                transform: scale(1.2);
            }
          }
          .users {
              background: var(--mainPink);
              color: #FFFFFF;
              border: none;
              border-radius: 20px;
              width: 80px;
              outline: none;
              height: 70px;
              opacity: 1;
              @media (max-width: 400px) {
              width: 50px;
              height: 50px;
              }
              @media (max-width: 500px) {
              width: 50px;
              height: 50px;
              }
              .all-icon {
                @media (max-width: 400px) {
              font-size: 20px;
              }
              @media (max-width: 500px) {
                font-size: 20px;
              }
              }
            }
          .male {
              background: var(--mainGreen);
              color: #FFFFFF;
              border: none;
              border-radius: 20px;
              width: 80px;
              outline: none;
              height: 70px;
              opacity: 1;
              @media (max-width: 400px) {
              width: 50px;
              height: 50px;
              }
              @media (max-width: 500px) {
              width: 50px;
              height: 50px;
              }
              .male-icon {
                @media (max-width: 400px) {
              font-size: 20px;
              }
              @media (max-width: 500px) {
                font-size: 20px;
              }
              }
          }
          .female {
              background: var(--fairPurple);
              color: #FFFFFF;
              border: none;
              border-radius: 20px;
              width: 80px;
              height: 70px;
              outline: none;
              opacity: 1;
              @media (max-width: 400px) {
              width: 50px;
              height: 50px;
              }
              @media (max-width: 500px) {
              width: 50px;
              height: 50px;
              }
              .female-icon {
                @media (max-width: 400px) {
              font-size: 20px;
              }
              @media (max-width: 500px) {
                font-size: 20px;
              }
              }
          }
          .title {
             font-family: PoppinsMedium;
             opacity: 0.7;
             font-size: 10px;
             margin-top: 1rem;
             text-align: center;
             @media (max-width: 400px) {
              font-size: 10px;
              }
              @media (max-width: 500px) {
                font-size: 10px;
              }
          }
        }
    }
    .second-section {
        background: var(--mainWhite);
        margin: 1rem;
        padding: 3rem;
        border-radius: 15px;
        width: 55%;
        @media(max-width: 1200px) {
            width: 70%;
            padding: 0;
        }
        @media(max-width: 400px) {
            width: 100%;
            padding: 0;
        }
        @media(max-width: 500px) {
            width: 100%;
            padding: 0;
        }
        h3 {
            font-family: PoppinsBold;
            color: var(--darkPurple);
            opacity: 1; 
            @media (max-width: 400px) {
                margin-left: 1.5rem;
                margin-top: 1rem;
            }
            @media (max-width: 500px) {
                margin-left: 1.5rem;
                margin-top: 1rem;
            }
        }
        p {
            opacity: 0.9; 
            color: var(--darkPurple);
            font-family: PoppinsLight; 
            @media (max-width: 400px) {
                margin-left: 1.5rem;
            }
            @media (max-width: 500px) {
                margin-left: 1.5rem;
            }
        }
        .filter-by {
            display: flex;
            justify-content: space-between;
            margin-top: -2rem;
            @media(max-width: 400px) {
              display: block;
              margin-left: 1.5rem;
            }
            @media(max-width: 500px) {
              display: block;
              margin-left: 1.5rem;
            }
        }
        .form {
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media(max-width: 400px) {
              display: block;
            }
            @media(max-width: 500px) {
              display: block;
            }
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
          @media(max-width: 400px) {
              margin-top: 3rem;
            }
            @media(max-width: 500px) {
                margin-top: 3rem;
            }
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
            @media (max-width: 400px) {
                width: 340px;
                height: 250px;
                margin-left: 0.5rem;
            }
            @media (max-width: 500px) {
                width: 340px;
                height: 250px;
                margin-left: 0.5rem;
            }
            .minicard {
            display: flex;
            @media (max-width: 400px) {
                justify-content: space-between;
            }
            @media (max-width: 500px) {
                justify-content: space-between;
            }
            img {
                width: 90px;
                height: 90px;
                border-radius: 50px;
                border: 5px solid var(--mainGreen);
            }
            .info {
                display: block;
                margin-left: 2rem;
                @media (max-width: 400px) {
                    margin-left: 1rem;
                }
                @media (max-width: 500px) {
                    margin-left: 1rem;
                }
                h5 {
                    color: var(--darkPurple);
                    font-family: PoppinsBold;
                    opacity: 1;
                    @media (max-width: 400px) {
                        font-size: 14px;
                    }
                    @media (max-width: 500px) {
                        font-size: 14px;
                    }
                }
                p {
                    font-family: MediumItalic; 
                    color: var(--darkPurple);
                    opacity: 0.69;
                    font-size: 16px;
                    @media (max-width: 400px) {
                        font-size: 14px;
                    }
                    @media (max-width: 500px) {
                        font-size: 14px;
                    }
                }
            }
            .contact-info {
                display: flex;
                @media (max-width: 400px) {
                        display: block;
                    }
                    @media (max-width: 500px) {
                        display: block;
                    }
                .contact {
                display: flex;
                @media (max-width: 400px) {
                        display: block;
                    }
                    @media (max-width: 500px) {
                        display: block;
                    }
                color: var(--darkPurple);
                font-family: PoppinsLight;
                .email {
                    font-size: 0.8rem;
                    margin-right: 0.5rem;
                    @media (max-width: 400px) {
                        margin-right: 0;
                    }
                    @media (max-width: 500px) {
                        margin-right: 0;
                    }
                }
                .phone {
                    font-size: 0.8rem;
                }
            }
               .info {
                   button {
                    margin-top: -0.5rem;
                    width: 2.5rem;
                    height: 2rem;
                    background: var(--normalGreen) !important;
                    border: none;
                    border-radius: 10px;
                    color: #FFFFFF;
                    @media (max-width: 400px) {
                        margin-top: 0;
                    }
                    @media (max-width: 500px) {
                        margin-top: 0;
                    }
                }
               }
            }
            
        }
        }
        .bottom {
            @media (max-width: 400px) {
                display: block;
                margin-left: 1.5rem;
                margin-right: 1.5rem;
            }
            @media (max-width: 500px) {
                display: block;
                margin-left: 1.5rem;
                margin-right: 1.5rem;
            }
        }
        .download {
            border:none;
            background: var(--fairPurple);
            border-radius: 30px;
            width: 30%;
            height: 45px;
            outline: none;
            color: #ffffff;
            font-size: 14px;
            @media (max-width: 400px) {
                width: 60%;
                margin-left: 1.5rem;
            }
            @media (max-width: 500px) {
                width: 60%;
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
