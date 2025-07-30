body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", sans-serif;
  background: linear-gradient(to right, #141e30, #243b55);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
}

.game-container {
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  backdrop-filter: blur(10px);
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 10px;
  margin: 20px auto;
}

.cell {
  width: 100px;
  height: 100px;
  background: #f0f0f0;
  color: #333;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: 0.3s ease;
  cursor: pointer;
}

.cell:hover {
  background: #dcdcdc;
  transform: scale(1.05);
}

.cell.win {
  background: #32cd32;
  color: white;
  animation: pulse 0.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1.0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1.0); }
}

.info {
  margin-top: 20px;
}

#reset {
  padding: 10px 20px;
  font-size: 1rem;
  background: #00bcd4;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

#reset:hover {
  background: #0097a7;
}
