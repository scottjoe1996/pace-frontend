import React from "react";
import ReactDom from "react-dom";

import LogInDialog from "./LogInDialog";

it("should render", () => {
    const div = document.createElement("div");
    ReactDom.render(<LogInDialog/>, div);
});