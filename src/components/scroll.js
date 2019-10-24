import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollToElement extends Component {

	componentDidMount() {

    var handling = document.documentElement || document.body;
		var elem = document.querySelector(this.props.element);
		var speed = this.props.timer;

		function runScroll() {
			scrollTo(handling, elem.offsetTop, speed);
		}

		var scrollme;

		scrollme = document.querySelector("#top");
		scrollme.addEventListener("click", runScroll, false)

		function scrollTo(element, to, duration) {

			if (duration <= 0) return;

			var difference = to - element.scrollTop;
			var perTick = difference / duration * 10;

			setTimeout(function () {

				element.scrollTop = element.scrollTop + perTick;

				if (element.scrollTop == to) return;

				scrollTo(element, to, duration - 10);

			}, 10);

		}

		window.onscroll = function () { scrollFunction() };

		function scrollFunction() {

			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

				document.getElementById("top").style.display = "block";

			} else {

				document.getElementById("top").style.display = "none";

			}

		}

	}

	render() {

		var btn = {
			position: "fixed",
			bottom: "2%",
			right: "5%",
			padding: "15px",
			backgroundColor: "#888",
			transition: "all 1s ease-in-out"
		}

		var topArrow = {
			padding: "5px",
			borderTop: "4px solid #fff",
			borderLeft: "4px solid #fff",
			transform: "rotate(45deg) translate(15%, 15%)",
			transition: "all 1s ease-in-out"
		}

		return (
			<div id="top" style={btn}>
				<div style={topArrow}></div>
			</div>
		)
	}
}

ScrollToElement.propTypes = {
	element: PropTypes.string.isRequired,
	timer: PropTypes.string.isRequired
}

// ############################################

class ScrollToTop extends Component {

	componentDidMount() {

		var elem = document.documentElement || document.body;

		function runScroll() {
			scrollTo(elem, 0, 600);
		}

		var scrollme;

		scrollme = document.querySelector("#top");
		scrollme.addEventListener("click", runScroll, false)

		function scrollTo(element, to, duration) {

			if (duration <= 0) return;

			var difference = to - element.scrollTop;
			var perTick = difference / duration * 10;

			setTimeout(function () {

				element.scrollTop = element.scrollTop + perTick;

				if (element.scrollTop == to) return;

				scrollTo(element, to, duration - 10);

			}, 10);

		}

		window.onscroll = function () { scrollFunction() };

		function scrollFunction() {

			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

				document.getElementById("top").style.display = "block";

			} else {

				document.getElementById("top").style.display = "none";

			}

		}

	}

	render() {

		var btn = {
			position: "fixed",
			bottom: "2%",
			right: "5%",
			padding: "15px",
			backgroundColor: "#888",
			transition: "all 1s ease-in-out"
		}

		var topArrow = {
			padding: "5px",
			borderTop: "4px solid #fff",
			borderLeft: "4px solid #fff",
			transform: "rotate(45deg) translate(15%, 15%)",
			transition: "all 1s ease-in-out"
		}

		return (
			<div id="top" style={btn}>
				<div style={topArrow}></div>
			</div>
		)
	}
}

// ############################################

class ScrollIndicator extends Component {

	componentDidMount() {

		window.onscroll = function() {
			processScrollIndicator()
		};

		function processScrollIndicator() {
			var windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
			var documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrollPosition = (windowScroll / documentHeight) * 100;
			document.getElementById("scrollIndicator").style.width = scrollPosition + "%";
		}
	}

	render() {

		const main = {
			position: 'fixed',
			top: 0,
			zIndex: 1,
			width: '100%',
			backgroundColor: '#f1f1f1'
		};

		const container = {
			background: this.props.bgcolor,
			height: this.props.height + "px",
			width: '100%'
		};

		const scrollcolor = {
			background: this.props.color,
			height: this.props.height + "px",
			width: '0%'
		};

		return (
			<div className="scroll--indicator--container" style={main}>
				<div className="progress-container" style={container}>
					<div className="progress-bar" id="scrollIndicator" style={scrollcolor}></div>
				</div> 
      </div>
		)
	}
}

ScrollIndicator.propTypes = {
	height: PropTypes.string.isRequired,
	bgcolor: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}

// ############################################

export {
	ScrollToElement,
  ScrollToTop,
  ScrollIndicator
}
