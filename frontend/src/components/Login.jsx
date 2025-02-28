import { useState } from "react";
import { Link } from "react-router-dom";
import image from '../../../../MyProject/src/assets/icon.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
    <div style={{display:"flex",alignItems:"center",gap:"10px",margin:'100px 10px 10px 50px'}}>
        <img src={image} style={{borderRadius:"50%",height:"70px",width:"70px"}}></img>
        <header style={{fontSize:"50px",fontWeight:"bolder"}}> Notebook</header>
    </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f3f3f3",
        }}
      >
        <div
          style={{
            width: "350px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="email"
                style={{ display: "block", fontWeight: "bold" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "90%",
                  padding: "8px",
                  marginTop: "4px",
                  marginBottom: "5px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "90%",
                  padding: "8px",
                  marginTop: "4px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "90%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                margin: "10px 10px 15px 15px",
              }}
            >
              Login
            </button>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  display: "block",
                  marginLeft: "15px",
                  fontWeight: "bold",
                }}
              >
                I don't have an Account?
              </label>
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  fontFamily: "monospace",
                  fontSize: "15px",
                  color: "darkblue",
                }}
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
