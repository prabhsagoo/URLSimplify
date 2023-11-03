import "./App.css";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [url, setUrl] = useState("");

  const submitUrl = (e) => {
    e.preventDefault();

    if (url === "") {
      return Swal.fire({
        icon: "error",
        title: "URL Required",
        text: "Please enter the URL to proceed.",
        buttonsStyling: false, // Disable the default styling
        customClass: {
          confirmButton: "my-confirm-button-class",
          title: "my-title-class",
          popup: "my-content-class",
        },
      });
    }

    fetch("http://localhost:5150", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ URL: url }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById("copyUrl").value = data.message;
      });
  };

  return (
    <div className="Main">
      <h1>URLSimplyfy </h1>
      <label>Paste Your URL Here:</label>
      <input
        type="text"
        className="text"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <input type="submit" value="Submit" className="btn" onClick={submitUrl} />
      <label>Click ↓ to Copy</label>
      <div className="getUrl">
        <input
          type="button"
          className="text"
          style={{ backgroundColor: "#180925", color: "white" }}
          id="copyUrl"
          onClick={() => {
            navigator.clipboard.writeText(
              document.getElementById("copyUrl").value
            );
            document.querySelector(".copy").style.display = "flex";
          }}
        />
        <span className="copy">Copied!</span>
      </div>
    </div>
  );
}

export default App;
