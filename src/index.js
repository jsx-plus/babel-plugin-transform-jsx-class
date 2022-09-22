const DIRECTIVE = 'x-class';
const helperImportedFrom = 'babel-runtime-jsx-plus'
const helperImportedName = 'classnames'
const helperLocalName = '__classnames__';

export default function({ types: t }) {
  return {
    visitor: {
      Program(path) {
        path.__classHelperImported = false;
      },
      JSXOpeningElement(parentPath, state) {
        const attributePaths = parentPath.get('attributes') || [];
        const attributes = parentPath.node.attributes || [];
        const directive = state.opts.directive || DIRECTIVE;

        attributePaths.some(function(path) {
          const { node } = path;
          if (t.isJSXIdentifier(node.name, { name: directive })) {
            const params = [];
            if (t.isJSXExpressionContainer(node.value)) params.push(node.value.expression);
            else if (t.isStringLiteral(node.value)) params.push(node.value);

            const callExp = t.callExpression(t.identifier(helperLocalName), params);

            let classNameAttribute;
            for (let i = 0, l = attributes.length; i < l; i++ ) {
              if (t.isJSXIdentifier(attributes[i].name, { name: 'className'})) classNameAttribute = attributes[i];
            }

            if (classNameAttribute) {
              let prevVal;
              if (t.isJSXExpressionContainer(classNameAttribute.value)) prevVal = classNameAttribute.value.expression;
              else if (t.isStringLiteral(classNameAttribute.value)) prevVal = classNameAttribute.value;
              else prevVal = t.stringLiteral('');

              classNameAttribute.value = t.jsxExpressionContainer(
                t.binaryExpression('+', t.binaryExpression('+', prevVal , t.stringLiteral(' ')) , callExp)
              );
            } else {
              attributes.push(t.jsxAttribute(
                t.jsxIdentifier('className'),
                t.jsxExpressionContainer(callExp)
              ));
            }

            path.remove();

            const rootPath = path.findParent(p => p.isProgram());
            if (rootPath.__classHelperImported === false) {
              const imported = t.identifier(helperImportedName);
              const local = t.identifier(helperLocalName);
              const importDeclaration = t.importDeclaration([
                t.importSpecifier(local, imported)
              ], t.stringLiteral(helperImportedFrom))
              rootPath.unshiftContainer('body', importDeclaration);
              rootPath.__classHelperImported = true;
            }

            return true;
          }
        });
      },
    },
  };
}
