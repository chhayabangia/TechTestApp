describe("Tech Quiz E2E Test", () => {
  it("starts a quiz and completes it", () => {
    cy.visit("/");
    cy.contains("Start Quiz").click();

    // Loop through the questions
    for (let i = 0; i < 10; i++) {
      cy.get(".question").should("exist");
      cy.get(".option").first().click();
    }

    // Confirm score is shown
    cy.contains("Your Score").should("exist");

    // Option to start new quiz
    cy.contains("Start New Quiz").should("exist");
  });
});
