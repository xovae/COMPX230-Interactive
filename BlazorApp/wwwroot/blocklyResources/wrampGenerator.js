export const wrampGenerator = new Blockly.CodeGenerator('WRAMP');

const Order = {
  ATOMIC: 0,
};

wrampGenerator.forBlock['custom_block'] = function(block, generator) {
  const register1 = block.getFieldValue('register1');
  const register2 = block.getFieldValue('register2');
  const immediate = block.getFieldValue('immediate');
  return [`addi, ${register1}, ${register2}, ${immediate}`, Order.ATOMIC];
}

wrampGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + '\n' + wrampGenerator.blockToCode(nextBlock);
  }
  return code;
};

export function workspaceToCode(workspace) {
  return wrampGenerator.workspaceToCode(blocklyWorkspace);
}