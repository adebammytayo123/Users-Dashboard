import styled from 'styled-components';

export const UserContainer = styled.div`
  background: var(--darkPurple);
  .first-section {
    padding: 20rem 5rem 2rem 5rem;
      @media (max-width: 760px) {
        padding: 5rem 2rem 2rem 2rem;
      }
    .welcome {
      color: #ffffff;

      .heading1 {
        font-family: ExtraLight;
        opacity: 1;
      }
      .heading2 {
        font-family: PoppinsBold;
        opacity: 1;
      }
      p {
        font-family: PoppinsLight;
        letter-spacing: 0.23px;
        opacity: 0.66;
        font-size: 16px;
      }
    }
    .input-search {
      position: relative;
      align-items: center;
      background: #3c3f54;
      width: 90%;
      height: 50px;
      border-radius: 15px;
      padding: 0.8rem 1rem;
      margin-top: 2rem;
      input {
        font-family: SemiBold;
        background: none !important;
        outline: none;
        color: #ffffff;
        border: none;
        padding-left: 2.5rem;
      }
      .search {
        top: 15px;
        position: absolute;
        color: #ffffff;
        font-size: 20px;
      }
    }
    .show-users {
      display: block;
      color: #ffffff;
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
      section {
        transition: all 1s linear;
        &.activeTab {
          transform: scale(1.2);
        }
      }
      .users {
        background: var(--mainPink);
        color: #ffffff;
        border: none;
        border-radius: 20px;
        width: 80px;
        outline: none;
        height: 70px;
        opacity: 1;
        @media (max-width: 760px) {
          width: 50px;
          height: 50px;
        }
        .all-icon {
          @media (max-width: 760px) {
            font-size: 20px;
          }
        }
      }
      .male {
        background: var(--mainGreen);
        color: #ffffff;
        border: none;
        border-radius: 20px;
        width: 80px;
        outline: none;
        height: 70px;
        opacity: 1;
        @media (max-width: 760px) {
          width: 50px;
          height: 50px;
        }
        .male-icon {
          @media (max-width: 760px) {
            font-size: 20px;
          }
        }
      }
      .female {
        background: var(--fairPurple);
        color: #ffffff;
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
    border-radius: 15px;
    padding: 1rem ;
    @media (max-width: 760px) {
        padding: 0;
      }
    h3 {
      font-family: PoppinsBold;
      color: var(--darkPurple);
      opacity: 1;
      @media (max-width: 760px) {
        padding: 1rem;
      }
    }
    p {
      opacity: 0.9;
      color: var(--darkPurple);
      font-family: PoppinsLight;
      @media (max-width: 760px) {
        font-size: 1rem;
        margin-top: -1rem;
        padding: 1rem;
      }
    }
    .filter-by {
      display: block;
      justify-content: space-between;
      margin-top: -2rem;
      @media (max-width: 760px) {
        display: block !important;
      }
    }
    .form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 760px) {
        display: block !important;
        padding: 1rem;
      }
    }
    .list-search {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-right: 1rem;
      margin-top: 2rem;
      @media (max-width: 760px) {
          margin-top: -1rem;
      }
      p {
        margin-top: 1rem;
        margin-right: 0.5rem;
        @media (max-width: 760px) {
          margin-left: -1rem;
      }
      }
      select {
        width: 80px;
        height: 35px;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background: var(--lighterWhite) !important;
        outline: none;
        cursor: pointer;
      }
    }
    .country-search {
      background: var(--lighterWhite);
      border-radius: 30px;
      color: var(--darkPurple) !important;
      margin-top: 2rem;
      @media (max-width: 760px) {
        width: 65%;
        margin-top: 0;
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
      min-height: 150px;
      border-radius: 10px;
      border: none;
      .minicard {
        display: flex;
        align-items: center;
        @media (max-width: 760px) {
         display: block;
        }
        img {
          width: 170px;
          border-radius: 50%;
          border: 5px solid var(--mainGreen);
          @media (max-width: 760px) {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
          }
        }
        .info {
          display: block;
          margin-top: 3rem;
          margin-left: 2rem;
          @media (max-width: 760px) {
            margin-left: 1rem;
            margin-top: 3rem;
          }
          h5 {
            color: var(--darkPurple);
            font-family: PoppinsBold;
            opacity: 1;
            @media (max-width: 760px) {
              font-size: 14px;
            }
          }
          p {
            font-family: MediumItalic;
            color: var(--darkPurple);
            opacity: 0.69;
            font-size: 16px;
            @media (max-width: 760px) {
              margin-left: -1rem;
              font-size: 12px;
            }
          }
        }
        .contact-info {
          padding-right: 2rem;
          display: block;
          @media (max-width: 760px) {
            display: block;
            margin-top: -2.5rem;
          }
          .contact {
            display: block;
            @media (max-width: 760px) {
              display: block;
            }
            color: var(--darkPurple);
            font-family: PoppinsLight;
            .email {
              font-size: 0.8rem;
              margin-right: 0.5rem;
              @media (max-width: 760px) {
                margin-right: 0;
              }
            }
            .phone {
              font-size: 0.8rem;
              @media (max-width: 760px) {
                margin-top: -2rem;
              }
            }
          }
          .info {
            margin-top: 1rem;
            margin-left: 0;
            .details {
              width: 2.5rem;
              height: 2.5rem;
              background: var(--mainPink) !important;
              border: none;
              border-radius: 10px;
              color: #ffffff;
              outline: none;
            }
            .male {
              width: 2.5rem;
              height: 2.5rem;
              background: var(--darkGreen) !important;
              border: none;
              border-radius: 10px;
              color: #ffffff;
              outline: none;
            }
            .female {
              width: 2.5rem;
              height: 2.5rem;
              background: var(--fairPurple) !important;
              border: none;
              border-radius: 10px;
              color: #ffffff;
              outline: none;
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
      border: none;
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
      .next {
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
        color: #ffffff;
      }
      .active1 {
        background: var(--darkPurple);
        /* margin-left: -1rem;
                margin-right: 0.5rem; */
        padding: 0.3rem 0.8rem;
        border-radius: 10px;
        border: none;
        outline: none;
        color: #ffffff;
      }
    }
  }
`;