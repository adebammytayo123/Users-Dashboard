import styled from 'styled-components';

export const SingleWrapper = styled.div`
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
                    @media (max-width: 760px) {
                       margin-left: -1rem;;
                       font-size: 12px;
                    }
                }
                .email{
                   background: var(--lighterWhite);
                   padding: 0.5rem;
                   border-radius: 30px;
                   opacity: 1; 
                   @media (max-width: 760px) {
                       margin-left: -0.2rem;
                       font-size: 12px;
                       margin-bottom: 2rem;
                    }
                }
                .joined {
                    background: var(--lightPink);
                    border-radius: 30px;
                    padding: 0.8rem;
                    font-size: 12px;
                    font-weight: bolder;
                    margin-right: 7rem;
                    @media (max-width: 760px) {
                       margin-left: -0.2rem;
                       font-size: 10px;
                       padding: 0.5rem;
                       margin-right: 4rem;
                    }
                }
                .phone {
                    font-size: 12px;
                    margin-left: 0.5rem;
                    @media (max-width: 760px) {
                       margin-left: -1rem;
                       margin-bottom: -0.5rem;
                    }
                }
            }
        }
`