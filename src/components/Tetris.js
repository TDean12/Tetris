import "./tetris.css";

import Board from "./board.jss";

import { useBoard } from "/src/hooks/useBoard";

const Tetris = ({ rows, columns, setGameOver }) => {
    const [board, setBoard] = setBoard();

    return <Board board={board}/>
};

export default Tetris;

