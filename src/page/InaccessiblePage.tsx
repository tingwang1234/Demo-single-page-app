import React from "react";

const InaccessiblePage: React.FC = () => {
    return (
        <div style={{ backgroundColor: "lightgray", color: "lightgray" }}>
            {/* 没有 h1/h2 等标题元素 */}
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>Welcome</div>

            {/* 非语义化链接（用 div 代替 <a>） */}
            <div role="link" onClick={() => alert("Navigating...")} style={{ cursor: "pointer" }}>
                Click here to go to another page
            </div>

            {/* 没有 alt 的图片 */}
            <img src="https://via.placeholder.com/150" />

            {/* 非键盘可访问按钮 */}
            <div
                role="button"
                style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
                onClick={() => alert("Submitted!")}
            >
                Submit
            </div>

            {/* 输入框没有 label */}
            <input type="text" placeholder="Enter your name" />

            {/* 颜色对比度极低 */}
            <p style={{ color: "#ccc" }}>This text is hard to read</p>

            {/* 没有关联 label 的 checkbox */}
            <input type="checkbox" id="terms" />
            <span>I agree to the terms</span>

            {/* 复杂表单但缺少 fieldset/legend */}
            <form>
                <div>
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female" /> Female
                </div>
            </form>

            {/* 没有 aria-label 的 button */}
            <button>
                <img src="https://via.placeholder.com/20"  alt='test-img'/>
            </button>

            {/* 动态内容（JS 添加内容但未通知屏幕阅读器） */}
            <div id="dynamic-content"></div>
            <button
                onClick={() => {
                    document.getElementById("dynamic-content")!.innerText = "New content added!";
                }}
            >
                Add Content
            </button>

            {/* Tab 键无法聚焦 */}
            <div style={{ outline: "none" }} tabIndex={-1}>
                You can't focus me
            </div>
        </div>
    );
};

export default InaccessiblePage;
