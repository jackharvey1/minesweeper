import './Minesweeper.css';
import Cell from './Cell';

const Row = ({ children, padded }) => (
    <div className={`row ${padded ? ' padded' : ''}`}>{children}</div>
);

export default () => (
    <div className='minesweeper'>
        <div className='playArea'>
            <div className='border outsetBorder scoreboard'>
                <div className='container insetBorder'>
                    <Row padded={true}>
                        <div className='numbers insetBorder' />
                        <div className='smiley outsetBorder' />
                        <div className='numbers insetBorder' />
                    </Row>
                </div>
            </div>
            <div className='border outsetBorder'>
                <div className='container insetBorder'>
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
);