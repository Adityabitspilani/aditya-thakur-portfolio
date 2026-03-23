import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container, index) => {
        if (container && index < 3) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container, index) => {
        if (container && index < 3) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>LEADERSHIP</h3>
              <h4>People Management & Team Enablement</h4>
              <p>
                Led cross-functional teams of 20+ engineers, conducted quarterly performance reviews, and drove targeted upskilling programmes. I build high-performance teams through accountability, coaching, and structured process improvement.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Team Leadership</div>
                <div className="what-tags">Performance Reviews</div>
                <div className="what-tags">Coaching</div>
                <div className="what-tags">Process Improvement</div>
                <div className="what-tags">Stakeholder Management</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA & ANALYTICS</h3>
              <h4>Turning Raw Data into Product Decisions</h4>
              <p>
                Python (Pandas, Scikit-Learn, Matplotlib), SQL (MySQL, MSSQL), IBM Cognos, and ML forecasting — I use data to find the "why" behind problems and the "what next" for product teams. Built KPI dashboards for 15+ enterprise accounts.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">Scikit-Learn</div>
                <div className="what-tags">Matplotlib</div>
                <div className="what-tags">SQL (MySQL)</div>
                <div className="what-tags">SQL (MSSQL)</div>
                <div className="what-tags">IBM Cognos</div>
                <div className="what-tags">ML Forecasting</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PAYMENTS & EHR</h3>
              <h4>Subject Matter Expert · US Healthcare</h4>
              <p>
                Deep expertise in Surcharge Fee, Card-on-File, and Payment Plan workflows inside eClinicalWorks — one of the largest US ambulatory EHR platforms. I've configured, debugged, and fed fixes back into the product roadmap.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Payments</div>
                <div className="what-tags">EHR</div>
                <div className="what-tags">eClinicalWorks</div>
                <div className="what-tags">Surcharge Fee</div>
                <div className="what-tags">Card-on-File</div>
                <div className="what-tags">Payment Plans</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
