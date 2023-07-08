import React from "react";
import style from "./Homepage.module.css";
import Header from "./Header";

const Homepage = () => {
  return (
    <div className={style.container1}>
      <Header />
      <div
        style={{
          display: "flex",
          height: "50vw",
          marginTop: "10%",
          marginLeft: "4%",
          marginRight: "6%",
        }}
      >
        <div style={{ width: "50%", height: "50vh" }}>
          <h5 className={style.heading4}>New Arrival</h5>
          <h1 className={style.Main_headings}>
            Crafting From Our Hand To Your
          </h1>
          <p className={style.para}>
            Naveens makes it easy to send the perfect gift.
            <br />
            All you need is a phone number or email address
          </p>
          <button
            type="button"
            className="btn btn btn-lg"
            style={{
              backgroundColor: "#df5789",
              color: "#F9F5F6",
              marginTop: "5%",
              padding: "3%",
            }}
          >
            Send a Gift{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="23"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 10 18"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </div>
        <div
          style={{
            marginTop: "-1rem",
            width: "50%",
            height: "34vw",
            display: "grid",
            gridTemplateRows: "50% 50%",
            gridTemplateColumns: "60% 40%",
            gap: "5%",
          }}
        >
          <div
            style={{
              gridRow: "span 2",
              borderRadius: "8rem",
              backgroundColor: "#FDCEDF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <img style={{borderRadius: "8rem",width:'100%',height:'100%' ,mixBlendMode:'multiply'}} src="https://images.pexels.com/photos/4939929/pexels-photo-4939929.jpeg?auto=compress&cs=tinysrgb&w=400"  />{" "}
          </div>
          <div
            style={{
              borderTopRightRadius: "50%",
              borderTopLeftRadius: "50%",
              backgroundColor: "#FFD6A5",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                mixBlendMode: "inherit",
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
              src="https://images.pexels.com/photos/7488475/pexels-photo-7488475.jpeg?auto=compress&cs=tinysrgb&w=400"
            ></img>
          </div>
          <div
            style={{
              borderRadius: "100%",
              backgroundColor: "#FF9B9B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <img
              src="https://images.pexels.com/photos/7764402/pexels-photo-7764402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                width: "100%",
                height: "100%",
                mixBlendMode: "inherit",
                borderRadius: "100%",
              }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
