function solve(gradeExam) {
    const gradesToCompare = ['3.00', '3.00', '3.50', '4.50', '5.5'];

    let validateGrade = ChekGradeFromExam(parseFloat(gradeExam), gradesToCompare);

    console.log(validateGrade); 
}

function ChekGradeFromExam(gradeExam, gradesToCompare) {
    for (const grade of gradesToCompare) {
        if (gradeExam < grade) {
            return "Fail (2)";
        } else if (gradeExam >= 3.00 && gradeExam < 3.50) {
            return `Poor (${gradeExam.toFixed(2)})`;
        } else if (gradeExam >= 3.50 && gradeExam < 4.50) {
            return `Good (${gradeExam.toFixed(2)})`;
        } else if (gradeExam >= 4.50 && gradeExam < 5.5) {
            return `Very good (${gradeExam.toFixed(2)})`;
        } else {
            return `Excellent (${gradeExam.toFixed(2)})`;
        }
    }        
} 

solve('3.33');
solve('4.50')