* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  background: #f5f5f5;
  color: #222;
}

/* Canvas Background */
#bgCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.18; /* transparency so text is readable */
}

/* Content */
.content {
  max-width: 900px;
  margin: auto;
  padding: 80px 20px;
}

section {
  margin-bottom: 80px;
}

.hero {
  text-align: center;
  margin-bottom: 100px;
}

.hero h1 {
  font-size: 3.2rem;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  border-left: 5px solid #c59a6d;
  padding-left: 15px;
}

p, li {
  font-size: 1.05rem;
  line-height: 1.8;
}

ul {
  padding-left: 20px;
}
