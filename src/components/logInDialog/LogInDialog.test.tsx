import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import LogInDialog from "./LogInDialog";

it("should render", () => {
    const { getByText } = render(<LogInDialog/>);

    getByText("Log in");
});

it("should open dialog when button is clicked", () => {
    const { getByText, queryByText } = render(<LogInDialog/>);

    expect(queryByText("Username")).toBeNull();
    expect(queryByText("Password")).toBeNull();

    const button = getByText("Log in");
    fireEvent.click(button);
    
    expect(queryByText("Username")).not.toBeNull();
    expect(queryByText("Password")).not.toBeNull();
});

it("should close dialog when cancel button is clicked", async () => {
    const { getByText, queryByText } = render(<LogInDialog/>);

    const button = getByText("Log in");
    fireEvent.click(button);
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);

    await wait(() => {
        expect(queryByText("Username")).not.toBeInTheDocument();
        expect(queryByText("Password")).not.toBeInTheDocument();
    })
});

it("should display validation error if Username has spaces", async () => {
    const { getByText, queryByText } = render(<LogInDialog/>);

    const button = getByText("Log in");
    fireEvent.click(button);
    
});

it("should display validation error if Username is empty", async () => {
    const { getByText, queryByText } = render(<LogInDialog/>);

    const button = getByText("Log in");
    fireEvent.click(button);
    
});