import * as React from "react";
import { Button } from "../../src/components/Button/index";

describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button variant={"primary"} isLoading={false} />);
  });
});
