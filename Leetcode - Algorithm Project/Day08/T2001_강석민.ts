function connect(root: Node | null): Node | null {
  if(root === null) return null;
  const nodeNext = {}
  const DFS = (node, level): void | null => {
      if (node === null) return ;
      if (!(level in nodeNext)) {
          nodeNext[level] = node;
          node.next = null;
      } else {
          node.next = nodeNext[level];
          nodeNext[level] = node;
      }
      DFS(node.right, level + 1);
      DFS(node.left, level + 1);
  }
  DFS(root, 0)
  return root;
};