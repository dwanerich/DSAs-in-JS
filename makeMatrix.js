let makeMatrix = (n, m, val) => {
  let matrix =[]
  for (let i= 0; i < m; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(val)
    }
    matrix.push(row)
  }
  console.log(matrix)
}

makeMatrix(3,5,25)

