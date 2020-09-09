import json
f = open('m.json', 'r')
mine = json.loads(f.read())
f = open('c.json', 'r')
correct = json.loads(f.read())

marks = 0
c = 0
wrong = 0
print('Answered : ', len(mine))
for q in mine:
    # print(q, mine[q])
    if mine[q] == correct[q]:
        marks += 4
        c += 1
    else:
        wrong += 1
        marks -= 1
print('Correct : ', c)
print('Wrong : ', wrong)
print('Total : ', marks)
