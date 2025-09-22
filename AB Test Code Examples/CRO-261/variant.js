(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro-t-ki193";
		/* all Pure helper functions */

		function waitForElement(selector, trigger) {
			var interval = setInterval(function () {
				if (
					document &&
					document.querySelector(selector) &&
					document.querySelectorAll(selector).length > 0
				) {
					clearInterval(interval);
					trigger();
				}
			}, 50);
			setTimeout(function () {
				clearInterval(interval);
			}, 15000);
		}

		function insertHtml(selector, content, position) {
			var el = document.querySelector(selector);
			if (!position) {
				position = "afterend";
			}
			if (el && content) {
				el.insertAdjacentHTML(position, content);
			}
		}

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}

		var newPart = `<div class="cro-t-ki193-review">
        <div class="cro-t-ki193-review-wrapper container">
            <div class="cro-t-ki193-review-inner">
                <div class="cro-t-ki193-review-left">
                    <div class="cro-t-ki193-review-left-wrapper">
                        <div class="cro-t-ki193-review-left-hellopeter-img">
                            <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+KI193+%7C+Warm+Imagery+on+Pet+Landing+Page+%7C+ALL+%7C+CRO-261/cro-one-plan-ki193-img-2.png" alt="" class="cro-hellopeter-img">
                        </div>
                        <div class="cro-t-ki193-review-left-review-star-img">
                            <img src="/assets/landings/img/hellopeterstars.svg" alt="" class="cro-stars-rating">
                        </div>
                    </div>
                </div>
                <div class="cro-t-ki193-review-right">
                    <div class="cro-t-ki193-review-right-text">
                        Average rating of <span>4.59</span> from <span>23,019</span> reviews | <span>10/10</span> Trust
                        Index
                    </div>
                </div>
            </div>

        </div>
    </div>`

		var bannerImg = `<div class="cro-t-ki193-banner-img">
        <div class="cro-t-ki193-banner-img-wrapper">
            <img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+KI193+%7C+Warm+Imagery+on+Pet+Landing+Page+%7C+ALL+%7C+CRO-261/cro-one-plan-ki193-img-1.png"  alt="" class='cro-banner-img'>
        </div>
    </div>`



		function waitForElementsertion() {
			if (window.innerWidth > 992) {
				waitForElement('#hero #hellopeter', function () {
					if (!document.querySelector('.cro-t-ki193-banner-img')) {
						insertHtml('#hero #hellopeter', bannerImg, "afterend");
					}
				}, 5000);
			} else if (window.innerWidth < 992) {
				waitForElement('#hero #callbackcol', function () {
					if (!document.querySelector('.cro-t-ki193-banner-img')) {
						insertHtml('#hero #callbackcol', bannerImg, "beforeend");
					}
				}, 5000);
			}
		}

		/* Variation Init */
		function init() {
			addClass("body", variation_name)


			waitForElement('#valuestacks', function () {
				if (!document.querySelector('.cro-t-ki193-review')) {
					insertHtml('#valuestacks', newPart, "beforebegin");
				}
			});



			waitForElementsertion()



		}

		/* Initialise variation */
		waitForElement('body', init);

	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();