import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import { describe, it, expect } from "vitest";
import InaccessiblePage from "../page/InaccessiblePage.tsx";

describe("InaccessiblePage A11y Test", () => {
    it("should not pass accessibility checks", async () => {
        const { container } = render(<InaccessiblePage />);
        const results = await axe(container);

        expect(results.violations.length).toBeGreaterThan(0);

        if (results.violations.length > 0) {
            results.violations.forEach((violation) => {
                console.error(`🚨 [A11y Error] Rule: ${violation.id}`);
                console.error(`📖 Description: ${violation.description}`);
                console.error(`🔗 Help URL: ${violation.helpUrl}`);
                console.error(`❌ Affected Elements:`);
                violation.nodes.forEach((node) => {
                    console.error(`- ${node.html}`);
                });
            });
        }
    });
});
