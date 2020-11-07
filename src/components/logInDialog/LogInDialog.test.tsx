import React from "react";
import { render, fireEvent, wait, RenderResult } from "@testing-library/react";
import Queries from "@testing-library/dom/queries";

import LogInDialog from "./LogInDialog";
import { get } from "https";

it("should render", () => {
    const { getByText } = render(<LogInDialog/>);

    getByText("Log in");
});

describe("Dialog closed", () => {
    it("should open dialog when button is clicked", () => {
        const { getByText, queryByText } = render(<LogInDialog/>);
    
        expect(queryByText("Username")).toBeNull();
        expect(queryByText("Password")).toBeNull();
    
        const button = getByText("Log in");
        fireEvent.click(button);
        
        expect(queryByText("Username")).not.toBeNull();
        expect(queryByText("Password")).not.toBeNull();
    });
})

describe("Dialog open", () => {
    let queries: RenderResult<typeof Queries>;

    beforeEach(() => {
        queries = render(<LogInDialog/>);
        const button = queries.getByText("Log in");
        fireEvent.click(button);
    })

    it("should close dialog when cancel button is clicked", async () => {
        const { getByText, queryByText } = queries;
        const cancelButton = getByText("Cancel");
        fireEvent.click(cancelButton);
    
        await wait(() => {
            expect(queryByText("Username")).not.toBeInTheDocument();
            expect(queryByText("Password")).not.toBeInTheDocument();
        })
    });
    
    it("should display validation error if Username has spaces", () => {
        const { getByText, getByLabelText } = queries;

        const input = getByLabelText("Username");
        fireEvent.change(input, { target: { value: "inva lid" } });
        
        getByText("Username cannot have empty spaces");
    });
    
    it("should display validation error if Username is empty", () => {
        const { getByText, getByLabelText } = queries;

        const input = getByLabelText("Username");
        fireEvent.change(input, { target: { value: "Start validation" } });
        fireEvent.change(input, { target: { value: "" } });
        
        getByText("Username cannot be empty");
    });

    it("should display validation error if Password has spaces", () => {
        const { getByText, getByLabelText } = queries;

        const input = getByLabelText("Password");
        fireEvent.change(input, { target: { value: "inva lid" } });
        
        getByText("Password cannot have empty spaces");
    });
    
    it("should display validation error if Password is empty", () => {
        const { getByText, getByLabelText } = queries;

        const input = getByLabelText("Password");
        fireEvent.change(input, { target: { value: "Start validation" } });
        fireEvent.change(input, { target: { value: "" } });
        
        getByText("Password cannot be empty");
    });

    it("should display validation error when submitting with empty fields", () => {
        const { getByText } = queries;

        const button = getByText((content, node) => {
            if(node.textContent === "Log in") {
                if (node.outerHTML.includes("type=\"submit\"")) {
                    return true
                }
            }
            return false
        })

        fireEvent.click(button);

        getByText("Username cannot be empty");
        getByText("Password cannot be empty");
    });

    it("should reset fields after closing and reopening dialog", () => {
        const { getByText, getByLabelText, getByPlaceholderText } = queries;

        const usernameInput = getByLabelText("Username");
        fireEvent.change(usernameInput, { target: { value: "test" } });
        const passwordInput = getByLabelText("Password");
        fireEvent.change(passwordInput, { target: { value: "test" } });

        // const cancelButton = getByText("Cancel");
        // fireEvent.click(cancelButton);
        // const openButton = getByText("Log in");
        // fireEvent.click(openButton);

        getByPlaceholderText("Username");
        getByPlaceholderText("Password");
    });
})