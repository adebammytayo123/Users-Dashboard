import React from 'react';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faArrowLeft, faEnvelope, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import { SingleWrapper } from './style';

const SingleUser = ({ setShow, setActiveTab }) => {


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
                                    icon={faPhoneVolume}
                                />
                            </span>{details.phone}
                        </p>
                        <p className="phone">
                            <span className="mr-2">
                                <FontAwesomeIcon
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

export default SingleUser;
