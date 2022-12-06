import "./Tetris.css";
import Board from "./board.js";

import { useBoard } from "../business/Board";

const Tetris = ({ rows, columns, setGameOver }) => {
    const [board, setBoard] = useBoard({rows, columns});

    return <Board board={board}/>
};

export default Tetris;

