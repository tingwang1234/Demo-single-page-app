import React from "react";
import {render, screen} from "@testing-library/react";
import { axe } from 'vitest-axe';
import {BrowserRouter} from "react-router-dom";
import {describe} from "vitest";
import Navbar from "../components/Navbar.tsx";


const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Navbar component", () => {
    it("renders the logo", async () => {
        renderWithRouter(<Navbar/>);
        expect(screen.getByText('DEMO SINGLE PAGE APP')).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        renderWithRouter(<Navbar />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Test Page')).toBeInTheDocument();
    });

    it("renders links with correct href attributes", () => {
        renderWithRouter(<Navbar />);
        expect(screen.getByText('Home').closest("a")).toHaveAttribute("href", "/");
        expect(screen.getByText('Test Page').closest("a")).toHaveAttribute("href", "/test");
    });

    it("should not have any accessibility violations", async () => {
        const { container } = renderWithRouter(<Navbar />);
        const results = await axe(container);

        expect(results.violations.length).toBe(0);
    });
})