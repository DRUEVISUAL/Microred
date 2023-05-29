import React from "react";
import Vote from "./Vote";

describe("<Vote />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Vote />);
    cy.get("[data-cy=upvote]").should("have.value", "upvoteNotClicked");
    cy.get("[data-cy=downvote]").should("have.value", "downvoteNotClicked");
  });
});
