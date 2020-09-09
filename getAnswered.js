// document.getElementsByClassName('menu-tbl')[0].tBodies[0].rows[1].cells[1]
questions = document.getElementsByClassName('menu-tbl')
var answers = {}
for (var q in questions) {

    rows = questions[q].tBodies[0].rows
    // console.log(rows[0].cells[1].textContent)
    if (rows[0].cells[1].textContent == 'MCQ') {

        qid = rows[1].cells[1].textContent
        options = {}
        for (var i = 2; i < rows.length - 2; ++i) {
            options[i - 1] = rows[i].cells[1].textContent;
        }
        answered = rows[7].cells[1].textContent

        answers[qid] = options[answered]

        // console.log('mcq')
        // console.log(qid, options)

    }
    else if (rows[0].cells[1].textContent == 'SA') {
        qid = rows[1].cells[1].textContent
        q = rows[0].parentElement.parentElement.parentElement
        a = q.getElementsByClassName('questionRowTbl')[0].rows
        b = a[a.length - 1].cells[1].textContent
        answers[qid] = b
        // console.log(b)
    }
    // console.log(answers)
}
console.save(answers)