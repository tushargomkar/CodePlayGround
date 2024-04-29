const input = [2, 7, 11, 4, -2]
const output = [20, 15, 11, 18, 24]


function calculaeTheSum(input) {
  let sumFromFirst = []
  let sumFromLast = []
  let result = []
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i]
    sumFromFirst.push(sum)
  }
  let sum1 = 0
  for (let i = input.length - 1; i >= 0; i--) {
    sum1 += input[i]
    sumFromLast.push(sum1)
  }

  sumFromLast = sumFromLast.reverse()
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      result[i] = sumFromLast[i + 1]
    }
    else if (i === input.length - 1) {
      result[input.length - 1] =
        sumFromFirst[input.length - 2]
    }
    else {
      result[i] = sumFromFirst[i - 1] + sumFromLast[i + 1]
    }

  }
  console.log(sumFromFirst)
  console.log(sumFromLast)
  console.log(result)
}

calculaeTheSum(input)

//another approch

const input1 = [2, 7, 11, 4, -2]
const output1 = [20, 15, 11, 18, 24]

const sum = input.reduce((a, b) => a + b);

const result = input.map((value) => (sum - value))
console.log(result)



