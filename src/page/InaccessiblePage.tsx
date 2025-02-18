import React from "react";

const InaccessiblePage: React.FC = () => {
    return (
        <div>
            {/*accesskey attribute value should be unique*/}
            <div>
                <a href="google.com" accessKey="g">Link to Google</a>
                <a href="github.com" accessKey="g">Link to GitHub</a>
            </div>
            {/*Active <area> elements must have alternate text*/}
            <div>
                <img src="images/solar_system.jpg" alt="Solar System" width="472" height="800" useMap="#Map"/>
                <map name="Map">
                    <area shape="rect" coords="115,158,276,192" href="http://en.wikipedia.org/wiki/Mercury_%28planet%29"
                    />
                    <area shape="rect" coords="115,193,276,234" href="http://en.wikipedia.org/wiki/Venus"/>
                </map>
            </div>
            {/*Elements must only use supported ARIA attributes*/}
            <div>
                <button role="option" aria-pressed="true">Click me</button>
                <div role="button">Click me</div>
                <span role="checkbox" aria-pressed="true">Toggle</span>
            </div>
            {/*ARIA commands must have an accessible name*/}
            <div role="link" id="empty"></div>

            <div role="button" id="alempty" aria-label=""></div>

            <div role="menuitem" id="albmissing" aria-labelledby="nonexistent"></div>

            <div role="link" id="albempty" aria-labelledby="emptydiv"></div>
            {/*ARIA attributes must be used as specified for the element's role*/}
            <label>
                <input type="checkbox" aria-checked="true"/>
                I agree with ...
            </label>
            {/*ARIA hidden element must not be focusable or contain focusable elements*/}
            <div aria-hidden="true">
                <button>Submit</button>
                <a href="#">click here</a>
                <input type="text" placeholder="input ..."/>
            </div>
            {/*ARIA input fields must have an accessible name*/}
            <div id="fail1" role="combobox">England</div>
            {/*ARIA toggle fields must have an accessible name*/}
            <div role="radiogroup">
                <div id="fail4" role="radio" aria-checked="false" tabIndex={0}></div>
            </div>
            {/*Input buttons must have discernible text*/}
            <form action="#">
                <input type="button" id="fail1"/>
            </form>
            {/*Interactive controls must not be nested*/}
            <button>
                Save
                <a href="rules/axe/">More options</a>
            </button>
            {/*Scrollable region must have keyboard access*/}
            <div id="fail1" style={{height: '5px', overflow: 'auto'}}>
                <input type="text" tabIndex={-1}/></div>
            {/*autocomplete attribute must be used correctly*/}
            <label>Username<input autoComplete="badname"/></label>
            {/*Inline text spacing must be adjustable with custom stylesheets*/}
            <p id="fail1" style={{lineHeight: '1.5 !important'}}>Banana error</p>
            {/*Check the unobscured size of the touch target and the distance to other touch targets.*/}
            <button id="target">+</button>
            <button style={{marginLeft:'-10px'}}>Adjacent Target</button>

        </div>
    )
};

export default InaccessiblePage;
