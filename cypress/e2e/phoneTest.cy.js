describe("Phone", () => {
  it("Phone - Page successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL
  });

  beforeEach(() => {
    cy.visit("/");
    cy.viewport(375, 468);
  });

  it("Phone - Nav Menu button exists with the correct initial icon", () => {
    cy.get("[data-cy=menuButtonPhone]").should("have.class", "bg-menu_open");
  });

  it("Phone - Nav Menu button changes the icon on click", () => {
    cy.get("[data-cy=menuButtonPhone]")
      .click()
      .should("have.class", "bg-menu_close");
  });

  it("Phone - Nav Menu appears on click", () => {
    cy.get("[data-cy=menuButtonPhone]").click();
    cy.get("[data-cy=phoneMenuComponentContainer]").should(
      "have.class",
      "translate-x-0"
    );
  });

  it("Phone - Nav Menu input accepts text", () => {
    cy.get("[data-cy=menuButtonPhone]").click();
    cy.get(
      '[data-cy="phoneMenuComponentContainer"] > .pb-2 > .h-10 > [data-cy="menuSearchComponent"]'
    ).type("This is a test");
  });

  it("Phone - Has existing article in the feed", () => {
    cy.get("article[data-cy=tile]").should("exist");
  });

  it("Phone - The article vote buttons are initially false", () => {
    cy.get("[value=upvote]").should("have.class", "bg-vote");
    cy.get("[value=downvote]").should("have.class", "bg-vote");
  });

  it("Phone - The article vote buttons are reacting to click and deselecting the other if it has been activated ", () => {
    cy.get("[value=upvote]")
      .first()
      .click()
      .should("have.class", "bg-vote_clicked");
    cy.get("[value=downvote]").should("have.class", "bg-vote");

    cy.get("[value=downvote]")
      .first()
      .click()
      .should("have.class", "bg-vote_clicked");
    cy.get("[value=upvote]").should("have.class", "bg-vote");
  });
});

describe("Desktop", () => {
  it("Desktop - Page successfully loads and correctly loads", () => {
    cy.viewport(1024, 768);
    cy.visit("/");
  });

  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit("/");
  });

  it("Desktop - Nav search accepts text", () => {
    cy.get('[data-cy="menuSearchComponent"]').first().type("This is a test")
  })
});
