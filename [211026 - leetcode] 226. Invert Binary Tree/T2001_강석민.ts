function changeLeftRight(node: TreeNode): void {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if(node.left) changeLeftRight(node.left)
    if(node.right) changeLeftRight(node.right)
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
    changeLeftRight(root);
    return root;
};
