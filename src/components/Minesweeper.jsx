import './Minesweeper.css';
import Cell from './Cell';

const Row = ({ children }) => (
    <div className="row">{children}</div>
)

export default () => (
    <div className="minesweeper">
        <div className="playArea">
            <div className="outerBorder">
                <div className="outerHighlight" />
                <div className="outerShadow" />
                <div className="border">
                    <div className="innerBorder">
                        <div className="innerHighlight" />
                        <div className="innerShadow" />
                        <div className="cells">
                            {Array(9).fill().map((_, i) => 
                                <Row>
                                    {Array(9).fill().map((_, j) => 
                                        <Cell key={`${i}-${j}`}/>
                                    )}
                                </Row>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);