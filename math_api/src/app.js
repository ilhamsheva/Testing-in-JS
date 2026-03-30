import FigureCalculator from "./figureCalculator.js";
import MathBasic from "./MathBasic.js";
import createServer from "./API/createServer.js";

const start = () => {
  const figureCalculator = new FigureCalculator(MathBasic);
  const app = createServer({
    mathBasic: MathBasic,
    figureCalculator: figureCalculator,
  });

  const PORT = 3000;
  const HOST = "localhost";

  const connectServer = app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });

  return connectServer;
};

start();
