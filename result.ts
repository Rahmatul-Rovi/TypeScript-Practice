// result.ts
type SubjectResult = [string, number]; 

function checkGrade(result: SubjectResult): void {
    const [subject, mark] = result;
    let grade: string;

    if (mark >= 80) grade = "A+";
    else if (mark >= 60) grade = "B";
    else grade = "F";

    console.log(`Subject: ${subject} | Mark: ${mark} | Grade: ${grade}`);
}

checkGrade(["Math", 85]);
checkGrade(["English", 45]);