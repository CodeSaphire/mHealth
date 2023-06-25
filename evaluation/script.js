
document.getElementById("evaluationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect the selected values of each question
  var responses = [];
  for (var i = 1; i <= 10; i++) {
    var questionName = "question" + i;
    var selectedValue = document.querySelector('input[name="' + questionName + '"]:checked').value;
    responses.push(selectedValue);
  }

  // Perform the evaluation based on the collected responses
  var result = evaluateResponses(responses);

  // Display the result
  var resultElement = document.getElementById("result");
  resultElement.textContent = "Evaluation Result: " + result;

  // Scroll to the result element
  resultElement.scrollIntoView({ behavior: "smooth" });
});

function evaluateResponses(responses) {
  // Perform your evaluation logic here based on the collected responses
  // Replace this placeholder logic with your actual evaluation

  var yesCount = 0;
  for (var i = 0; i < responses.length; i++) {
    if (responses[i] === "yes") {
      yesCount++;
    }
  }

  if (yesCount >= 5) {
    return "High Risk";
  } else if (yesCount >= 3) {
    return "Moderate Risk";
  } else {
    return "Low Risk";
  }
}
  
