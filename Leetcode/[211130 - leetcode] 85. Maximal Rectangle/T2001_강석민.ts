function maximalRectangle(matrix: string[][]): number {
  if(matrix.length === 0) return 0;
  if(matrix[0].length === 0) return 0;
  const visitMatrix = []
  for(let row = 0; row < matrix.length; row++) {
      let length = 0;
      const visitRow = []
      for(let col = 0; col < matrix[0].length; col++) {
          if(matrix[row][col] === "0") length = 0;
          else length += 1;
          visitRow.push(length)
      }
      visitMatrix.push(visitRow)
  }
  let area = 0
  for(let row = 0; row < matrix.length; row++) {
      for(let col = 0; col < matrix[0].length; col++) {
          let [minNum, rowNum] = [visitMatrix[row][col], 0]
          for(let currentRow = row; currentRow > -1; currentRow--) {
              const target = visitMatrix[currentRow][col];
              if (target === 0) break;
              rowNum += 1;
              minNum = Math.min(minNum, target)
              area = Math.max(area, minNum * rowNum)
          }
      }
  }
  return area
};