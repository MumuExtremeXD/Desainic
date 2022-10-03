import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html {
    scroll-behavior: smooth;
  }

  html, body, #root {
    font-family: "Poppins", sans-serif;
    background:#fff;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-appearance: none;
  }

  * {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}



/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 14px;
}

*::-webkit-scrollbar-track {
  background:  #eee;
}

*::-webkit-scrollbar-thumb {
  background-color:  #aaa;
  border-radius: 10px;
  border: 2px solid #eee;
}

  :root {
    --primary:#7f2ff2;
    --secondary:#FFF;
    --third:#7f2ff2;
    --fourth:#f46c0f;
    --five:#e8315c;
    --blue: #008ffc;
    --black:#222222;
    --gray:#444;
  }
`;
