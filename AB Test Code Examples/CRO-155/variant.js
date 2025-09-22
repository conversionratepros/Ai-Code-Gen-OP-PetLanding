(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";
        var pageLocation = window.location.pathname;
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

        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this &&
                this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
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


        var newPart = `<div id="cro-discounts" class="et_pb_section cro-t-101-container">
        <div class="container">
            <div class="row et_pb_row">
                <div class="et_pb_column col et_pb_column_1_2 ds-vertical-align">
                    <div class="et_pb_module et_pb_text et_pb_bg_layout_light">
                        <div class="et_pb_text_inner">
                            <h2>Get <span>Personalised </span>cover &amp; Premiums to suit your
                                budget</h2>
                        </div>
                    </div>
                    <div class="et_pb_text_inner">
                        <div class="cro-t-101-left-list-items">
                            <div class="cro-t-101-left-list-item-subheading">
                                <p class="cro-t-101-left-subheading-text">Based on the plan you choose, we offer:</p>
                            </div>
                            <div class="cro-t-101-left-list-item cro-item-1">
                                <div class="cro-t-101-left-list-item-icon"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101+%7C+LP+Benefits+push+%7C+All+%7C+OP-384/r-101-one-plan-2.svg" alt="" class="cro-icon-tick-mark"></div>
                                <p class="cro-t-101-left-list-item-content">Day-to-day benefits</p>
                            </div>
                            <div class="cro-t-101-left-list-item cro-item-2">
                                <div class="cro-t-101-left-list-item-icon">
								<img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101+%7C+LP+Benefits+push+%7C+All+%7C+OP-384/r-101-one-plan-2.svg" alt="" class="cro-icon-tick-mark"></div>
                                <p class="cro-t-101-left-list-item-content">Pet Med Savings for routine care, chronic
                                    meds, shortfalls and
                                    excess</p>
                            </div>
                            <div class="cro-t-101-left-list-item cro-item-3">
                                <div class="cro-t-101-left-list-item-icon"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101+%7C+LP+Benefits+push+%7C+All+%7C+OP-384/r-101-one-plan-2.svg" alt="" class="cro-icon-tick-mark"></div>
                                <p class="cro-t-101-left-list-item-content">Hospital admission accidents &amp; Illnesses
                                </p>
                            </div>
                            <div class="cro-t-101-left-list-item cro-item-4">
                                <div class="cro-t-101-left-list-item-icon"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101+%7C+LP+Benefits+push+%7C+All+%7C+OP-384/r-101-one-plan-2.svg" alt="" class="cro-icon-tick-mark"></div>
                                <p class="cro-t-101-left-list-item-content">Post-operative care </p>
                            </div>
                            <div class="cro-t-101-left-list-item cro-item-5">
                                <div class="cro-t-101-left-list-item-icon"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101+%7C+LP+Benefits+push+%7C+All+%7C+OP-384/r-101-one-plan-2.svg" alt="" class="cro-icon-tick-mark"></div>
                                <p class="cro-t-101-left-list-item-content">Kennel cover</p>
                            </div>
                            <div class="cro-t-101-left-list-item cro-item-6">
                                <div class="cro-t-101-left-list-item-icon"><img src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101+%7C+LP+Benefits+push+%7C+All+%7C+OP-384/r-101-one-plan-2.svg" alt="" class="cro-icon-tick-mark"></div>
                                <p class="cro-t-101-left-list-item-content">Discount for multiple pets</p>
                            </div>
                            <div class="cro-t-101-left-list-item-buttom">
                                <div class="cro-quotecta-button">
                                    <span class="cta cro-cirlce"><img class="cro-t-101-quoteimg"
                                                src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/cro-t-82-online-quote-icon.svg"></span>Get
                                        an online quote</a>
                                </div>
                                <div class="cro-et_contact_bottom_container">
                                    <button  class="et_pb_contact_submit et_pb_button cro-t-101-callimg-button"><img
                                            class="cro-t-101-callimg"
                                            src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/cro-t-82-phone-icon.svg">Call
                                        me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="et_pb_column col et_pb_column_1_2" id="cro-discountscol">
                    <div class="et_pb_module et_pb_image">
                        <img loading="lazy" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/Oneplan/Recipe+101+%7C+LP+Benefits+push+%7C+All+%7C+OP-384/r-101-one-plan-1.png" class='cro-t-101-main-img'>
                    </div>
                </div>
            </div>
        </div>
    </div>`


        /* Variation Init */
        function init() {

            addClass("body", "cro-t-101")

            waitForElement('#reviews', function () {
                if (!document.querySelector('#cro-discounts')) {
                    insertHtml('#reviews', newPart, "beforebegin");
                }

            });
            eventHandler()


        }

        function eventHandler() {
            live(".cro-quotecta-button", "click", function (e) {
                e.preventDefault();
                // document.querySelector('#callbackcol .quotecta a').click();
                var targetElement = document.querySelector('#callbackcol .quotecta a');

                if (targetElement) {
                    var mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
                    var mouseUpEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true });

                    targetElement.dispatchEvent(mouseDownEvent);
                    targetElement.dispatchEvent(mouseUpEvent);
                    targetElement.click();
                }
            })
            live(".cro-et_contact_bottom_container", "click", function () {

                var target = document.querySelector('#callbackcol');
                if (target) {
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.scrollY + 80,
                        behavior: 'smooth'
                    });
                }
            })

            // scroll(click, selector)
        }

        /* Initialise variation */
        if (pageLocation.includes('/Landings/pet-insurance-s/')) {
            if (!window.cro101EventHandler) {
                eventHandler();
                window.cro101EventHandler = true;
            }
            /* Initialise variation */
            waitForElement('body', init);
        }

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();