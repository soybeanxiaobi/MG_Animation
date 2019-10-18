import React, { PureComponent } from "react";
import Tabs from "zent/lib/tabs";
import Loading from 'zent/lib/loading';
import "./index.scss";
const TabPanel = Tabs.TabPanel;
export default class Example extends PureComponent {
  state = {
    activeId: "1",
    activeOneClass: "example-animation",
    activeSecClass: ""
  };

  onTabChange = id => {
    this.setState({
      activeId: id,
      activeOneClass: id === "1" ? "example-animation" : "",
      activeSecClass: id === "2" ? "example-animation" : ""
    });
  };
  render() {
    const { activeId, activeOneClass, activeSecClass } = this.state;
    return (
      <div className="example">
        <Tabs activeId={activeId} onChange={this.onTabChange}>
          <TabPanel tab={<span>Sleepy Mole(瞌睡鼹鼠)</span>} id="1">
            <div className={`iframe-class ${activeOneClass}`}>
              <iframe
                height="700px"
                scrolling="no"
                title="Mole :: property curves example"
                src="//codepen.io/sol0mka/embed/OyzBXR/?height=265&theme-id=0&default-tab=css,result"
                frameBorder="no"
                allowtransparency="true"
                allowFullScreen={true}
                style={{ width: "100%" }}
              >
                See the Pen{" "}
                <a href="https://codepen.io/sol0mka/pen/OyzBXR/">
                  Mole :: property curves example
                </a>{" "}
                by LegoMushroom (
                <a href="https://codepen.io/sol0mka">@sol0mka</a>) on{" "}
                <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </div>
          </TabPanel>
          <TabPanel tab={<span>Jump Squash</span>} id="2">
            {/* pEagiL 板凳扁平化 */}
            <div className={`iframe-class ${activeSecClass}`}>
              <iframe
                height="700px"
                scrolling="no"
                title="Jump and Squash"
                src="//codepen.io/sol0mka/embed/pEagoL/?height=265&theme-id=0&default-tab=js,result"
                frameBorder="no"
                allowtransparency="true"
                allowFullScreen={true}
                style={{ width: "100%" }}
              >
                See the Pen{" "}
                <a href="https://codepen.io/sol0mka/pen/pEagoL/">
                  Jump and Squash
                </a>{" "}
                by LegoMushroom (
                <a href="https://codepen.io/sol0mka">@sol0mka</a>) on{" "}
                <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </div>
          </TabPanel>
        </Tabs>
        <Loading className="loading"/>
      </div>
    );
  }
}
