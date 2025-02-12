import "../styles/Test.css"
import React from "react";

const Test: React.FC = () => {
    return (
        <div className="test-page">
            <h1>Select hospital cover</h1>
            <div className="cards-container">
                {Array(5).fill(null).map((_, index) => (
                    <div key={index} className="card">
                        <h2>POLICY TITLE</h2>
                        <span className="policy-tier">Policy Tier</span>
                        <p><strong>From $44.44</strong> Weekly</p>
                        <button className="select-cover">SELECT COVER &gt;</button>
                        <h3>Basic Plus</h3>
                        <p>A short two-line cover description with perks.</p>
                        <ul>
                            {Array(10).fill("List text").map((item, idx) => (
                                <li key={idx}>
                                    ✅ {item} <span className="info-icon">ℹ️</span>
                                </li>
                            ))}
                        </ul>
                        <button className="select-cover">SELECT COVER &gt;</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Test;