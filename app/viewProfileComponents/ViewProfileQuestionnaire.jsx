const React = require('react');

const ViewProfileQuestionnaire = function() {
  return (
    <div id = "ProfileQuestionnaire">
      <div id = "ProfileQuestionnaireTop">
          <h1>Questionnaire</h1>
      </div>
      <div id = "ProfileQuestionnaireBottom">
        <div id = "ProfileQuestionnaireName"/>
        <div id = "ProfileQuestionnaireMajor"/>
        <div id = "ProfileQuestionnaireCollege"/>
        <div id = "ProfileQuestionnaireGender"/>
        <div id = "ProfileQuestionnaireQuote"/>
      </div>
    </div>
  );
}

module.exports = ViewProfileQuestionnaire;