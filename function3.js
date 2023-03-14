function gradeStudent(score) {
    if (score >= 5) {
      console.log("Pass");
      if (score > 8) {
        console.log("Excellent");
      }
      if (score === 11) {
        console.log("Perfect");
      }
      return true;
    } else {
      console.log("Fail");
      return false;
    }
  }
  
  // Example usage
  const score1 = 4;
  const score2 = 7;
  const score3 = 9;
  const score4 = 11;
  
  console.log(gradeStudent(score1)); // Output: Fail, false
  console.log(gradeStudent(score2)); // Output: Pass, false
  console.log(gradeStudent(score3)); // Output: Pass, Excellent, true
  console.log(gradeStudent(score4)); // Output: Pass, Excellent, Perfect, true