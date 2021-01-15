import React from 'react';
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faArrowLeft, faEnvelope, faPhoneVolume, }
    from "@fortawesome/free-solid-svg-icons";

const SingleUser = ({ setShow,setActiveTab }) => {

    const { details } = useSelector((state) => state.users)


    const backToResults = () => {
        setShow(false);
        setActiveTab('all-users')
    }
    return (
        <SingleWrapper className="row py-5">
            <div className="col-12">
                <button
                    onClick={
                        backToResults
                    }
                    className="back">
                    <FontAwesomeIcon
                        className="left"
                        icon={faArrowLeft}
                    />
                                    RESULTS
                                </button>
                <div className="box d-flex py-5">
                    <img src={details?.picture?.large} alt="" />
                    <div className="info my-3">
                        <h4> {details?.name?.title} {details?.name?.first}, {details?.name?.last}, <span>{details?.dob?.age}</span></h4>
                        <p className="address">{details?.location?.street?.number} {details?.location?.street?.name} {details?.location?.city} {details?.location?.state}</p>
                        <p className="email pl-3 mr-5">
                            <span className="mr-2">
                                <FontAwesomeIcon
                                    className="envelope"
                                    icon={faEnvelope}
                                />
                            </span>{details.email}
                        </p>
                        <p className="joined pl-3">JOINED: {details?.registered?.date}</p>
                        <p className="phone">
                            <span className="mr-2">
                                <FontAwesomeIcon
                                    className="phone"
                                    icon={faPhoneVolume}
                                />
                            </span>{details.phone}
                        </p>
                        <p className="phone">
                            <span className="mr-2">
                                <FontAwesomeIcon
                                    className="phone"
                                    icon={faMobileAlt}
                                />
                            </span>{details.phone}
                        </p>
                    </div>
                </div>
            </div>
        </SingleWrapper>
    )
}
const SingleWrapper = styled.div`
@media (max-width: 400px) {
    margin-left: 0.5rem;
}
@media (max-width: 500px) {
    margin-left: 0.5rem;
}
.back {
            background: none;
            border: none;
            outline: none;
            opacity: 1;
            font-size: 14px;
            color: var(--lightDark) !important;
            .left {
                color: var(--mainGreen);
                margin-right: 0.6rem;
                font-size: 1.2rem;
                padding-top: 2px;
            }
        }
        .box {
            img {
                width: 160px;
                height: 170px;
                border-radius: 50%;
                border: 5px solid var(--mainGreen);
                @media (max-width: 400px) {
                    width: 80px;
                    height: 100px;
                }
                @media (max-width: 500px) {
                    width: 80px;
                    height: 100px;
                }
            }
            .info{
                margin-left: 2rem;
                @media (max-width: 400px) {
                    margin-left: 1rem;
                }
                @media (max-width: 500px) {
                    margin-left: 1rem;
                }
                h4 {
                    color: var(--darkPurple);
                    font-family: PoppinsBold;
                    opacity: 1;
                    @media (max-width: 400px) {
                       font-size: 16px;
                    }
                    @media (max-width: 500px) {
                        font-size: 16px;
                    }
                    span {
                        opacity: 0.4;
                        font-weight: lighter;
                    }
                }
                .address {
                    @media (max-width: 400px) {
                       margin-left: -0.2rem;
                       font-size: 12px;
                    }
                    @media (max-width: 500px) {
                        margin-left: -0.2rem;
                        font-size: 12px;
                    }
                }
                .email{
                   background: var(--lighterWhite);
                   padding: 0.5rem;
                   border-radius: 30px;
                   opacity: 1; 
                   @media (max-width: 400px) {
                       margin-left: -0.2rem;
                       font-size: 12px;
                    }
                    @media (max-width: 500px) {
                        margin-left: -0.2rem;
                        font-size: 12px;
                    }
                }
                .joined {
                    background: var(--lightPink);
                    border-radius: 30px;
                    padding: 0.8rem;
                    font-size: 12px;
                    font-weight: bolder;
                    margin-right: 7rem;
                    @media (max-width: 400px) {
                       margin-left: -0.2rem;
                       font-size: 10px;
                       padding: 0.5rem;
                       margin-right: 4rem;
                    }
                    @media (max-width: 500px) {
                        margin-left: -0.2rem;
                        margin-right: 4rem;
                        font-size: 10px;
                        padding: 0.5rem;
                    }
                }
                .phone {
                    font-size: 12px;
                }
            }
        }
`

export default SingleUser;
