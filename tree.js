function createNode(key) {
  const children = []

  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey)
      children.push(childNode)
      return childNode
    }
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey)

  return {
    root,
    print() {
      let result = ''

      function traverse(node, visitFn, depth) {
        visitFn(node, depth)

        if (node.children.length) {
          node.children.forEach(n => traverse(n, visitFn, depth + 1))
        }
      }

      function addKeyToResult(node, depth) {
        result +=
          result.length === 0
            ? node.key
            : `\n${' '.repeat(depth * 2)}${node.key}`
      }

      traverse(root, addKeyToResult, 0)

      return result
    }
  }
}

exports.createNode = createNode
exports.createTree = createTree
