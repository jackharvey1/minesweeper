import './SevenSegmentDisplay.css';

const SevenSegmentDisplay = () => (
    <div className="sevenSegmentDisplay">
		<div className="segment outerSegment top" />
		<div className="segment outerSegment topLeft" />
		<div className="segment outerSegment topRight" />
		<div className="segment middleSegment" />
		<div className="segment outerSegment bottomLeft" />
		<div className="segment outerSegment bottomRight" />
		<div className="segment outerSegment bottom" />
	</div>
);

export default SevenSegmentDisplay;