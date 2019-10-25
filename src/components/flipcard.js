import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './flipcard.css';
import './dimension.css';

class Flipcard extends Component {

	componentDidMount(){

		var main = document.querySelector('.container');
		var element = document.querySelector('.container__sub');

		if(this.props.rotation == "vertical"){

			if(this.props.eventAction == "hover"){

				main.addEventListener('mouseover', function () {

          element.classList.add('flip__vertical');
          main.children[0].children[1].style.transform = "rotateX(180deg)";

        });
        
				main.addEventListener('mouseout', function () {
          
          element.classList.remove('flip__vertical');
          main.children[0].children[1].style.transform = "rotateX(0deg)";

				});

			} else if(this.props.eventAction == "click"){

				main.addEventListener('click', function () {
          
          if(!element.classList.contains("flip__vertical")){

            element.classList.add('flip__vertical');
            main.children[0].children[1].style.transform = "rotateX(-180deg)";

          } else {

            element.classList.remove('flip__vertical');
            main.children[0].children[1].style.transform = "rotateX(0deg)";

          }

				});

			}

		} else if (this.props.rotation == "horizontal"){

			if(this.props.eventAction == "hover"){

				main.addEventListener('mouseover', function () {

          element.classList.add('flip__horizontal');
          main.children[0].children[1].style.transform = "rotateY(-180deg)";

        });
        
				main.addEventListener('mouseout', function () {
          
          element.classList.remove('flip__horizontal');
          main.children[0].children[1].style.transform = "rotateY(0deg)";

				});

			} else if(this.props.eventAction == "click"){

				main.addEventListener('click', function () {

          if(!element.classList.contains("flip__horizontal")){

            element.classList.add('flip__horizontal');
            main.children[0].children[1].style.transform = "rotateY(-180deg)";

          } else {

            element.classList.remove('flip__horizontal');
            main.children[0].children[1].style.transform = "rotateY(0deg)";

          }

				});

			}

		}

  }

  render() {

    const container = {
      width: this.props.width + "px",
      height: this.props.height + "px",
    };

    const container__sub__face__frontside = {
      background: this.props.frontbgcolor || "#fff",
      color: this.props.frontcolor || "#000",
    };

    const container__sub__face__backside = {
      background: this.props.backbgcolor || "#fff",
      color: this.props.backcolor || "#000",
    };

    return (
      <div className="container" style={container}>
        <div className="container__sub">
          <div className="container__sub__face container__sub__face__frontside" style={container__sub__face__frontside}>
            {this.props.frontside}
          </div>
          <div className="container__sub__face container__sub__face__backside" style={container__sub__face__backside}>
            {this.props.backside}
          </div>
        </div>
      </div>
    )

  }

}

Flipcard.propTypes = {
	frontside: PropTypes.element.isRequired,
  backside: PropTypes.element.isRequired,
  eventAction: PropTypes.oneOf(["click","hover"]).isRequired,
  rotation: PropTypes.oneOf(["vertical","horizontal"]).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  frontcolor: PropTypes.string.isRequired,
  frontbgcolor: PropTypes.string.isRequired,
  backcolor: PropTypes.string.isRequired,
  backbgcolor: PropTypes.string.isRequired
}

// ############################

class DimensionFlipcard extends Component {

  render(){

    const frontside = {
      background: this.props.frontbgcolor || "#fff",
      color: this.props.frontcolor || "#000",
    };

    const backside = {
      background: this.props.backbgcolor || "#fff",
      color: this.props.backcolor || "#000",
    };

    return (
      <div className="container">
        <div className={"card--wrapper " + this.props.dimension}>
          <div className="card">
            <div className="front" style={frontside}>{this.props.frontside}</div>
            <div className="back" style={backside}>{this.props.backside}</div>
          </div>
        </div>
      </div>
    );
  }
  
}

DimensionFlipcard.propTypes = {
	frontside: PropTypes.element.isRequired,
  backside: PropTypes.element.isRequired,
  dimension: PropTypes.oneOf(["right","left","up", "down","diagonal--right","diagonal--left","inverted--diagonal--right","inverted--diagonal--left"]).isRequired,
  frontcolor: PropTypes.string.isRequired,
  frontbgcolor: PropTypes.string.isRequired,
  backcolor: PropTypes.string.isRequired,
  backbgcolor: PropTypes.string.isRequired
}

// ############################

export {
  Flipcard,
  DimensionFlipcard
}