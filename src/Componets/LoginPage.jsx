import React from "react";

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: "url('/Images/bgLower.jpg')",
        backgroundSize: "cover", // This ensures the image fully covers the background
        backgroundPosition: "center", // Center the background image
        backgroundAttachment: "fixed", // Fix the background image in place
        height: "100%", // Make sure it covers the full viewport height
        width: "100%", // Ensure it covers the full viewport width
        position: "absolute", // Allow the background to be absolute for full coverage
        backgroundRepeat: "no-repeat",
        flexDirection: "row",
        justifyContent: "space-between",
        top: 0,
        left: 0,
      }}
    >
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          position: "relative", // Ensure the content stays on top of the background
          zIndex: 1, // Keep content above the background
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "90%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(2.5px)",
            borderRadius: "24px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "32%", textAlign: "center", marginBottom: "-304px", marginLeft: "-65%" }}
          >
            <img
              src="/Images/medicaps.png" // Corrected the image source path
              alt="medicaps image"
              width={293}
              height={100}
              style={{ marginBottom: "-53px" , marginTop: "22%" , marginLeft: "33%"}}
            />
            <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "700" , marginTop: "16%" , marginLeft: "19%" , marginRight: "-19%"}}>
              Mentor-Mentee <br />
              Portal
            </h1>
          </div>
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <form
              style={{
                backgroundColor: "white",
                // borderRadius: "24px",
                padding: "88px",
                width: "120%",
                borderRadius: "18px",
                marginTop: "-102px",
                marginLeft: "82%",
                lineHeight: "200%"
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#A01212",
                  marginBottom: "8px",
                }}
              >
                Login
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "gray",
                  marginBottom: "16px",
                }}
              >
                Welcome to Mentor-Mentee Portal
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  style={{
                    padding: "12px",
                    border: "2px solid #9b182a",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                  }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  style={{
                    padding: "12px",
                    border: "2px solid #9b182a",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                  }}
                />
              </div>
              <div style={{ textAlign: "right", marginTop: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: "#A01212",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  marginTop: "24px",
                  padding: "12px",
                  backgroundColor: "#9b182a",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "16px",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#900")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#9b182a")}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;