import Quiz from "../../../client/src/components/Quiz";
import { mount } from "cypress/react";
import questions from "../fixtures/questions.json";

describe("Quiz Component", () => {
  it("renders first question and allows an answer", () => {
    mount(<Quiz questions={questions} />);
    cy.get(".question").should("exist");
    cy.get(".option").first().click();
  });
});
