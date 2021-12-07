function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const [m, n] = [image.length, image[0].length];
  const targetColor = image[sr][sc];
  if (targetColor === newColor) return image;
  function DFS(row: number, col: number): void {
      if(row >= 0 && row < m && col >= 0 && col < n && image[row][col] === targetColor) {
          image[row][col] = newColor;
          DFS(row-1, col);
          DFS(row+1, col);
          DFS(row, col+1);
          DFS(row, col-1);
      }
  }
  DFS(sr, sc)
  return image;
};