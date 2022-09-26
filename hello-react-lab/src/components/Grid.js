import ImgOne from "../images/img3.png";
import ImgTwo from "../images/img4.png";
import ImgThree from "../images/img5.png";
import ImgFour from "../images/img6.png";

function Grid () {
    return (
        <div className="container">
            
            <div>
                <img src={ImgOne} alt="declarative"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p>
            </div>

            <div>
                <img src={ImgTwo} alt="components"/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>

            <div>
                <img src={ImgThree} alt="single-way"/>
                <h3>Single-Way</h3>
                <p>A set of immutable values is passed to the components.</p>
            </div>

            <div>
                <img src={ImgFour} alt="jsx"/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run modern browsers.</p>
            </div>

        </div>
    );
}

export default Grid;