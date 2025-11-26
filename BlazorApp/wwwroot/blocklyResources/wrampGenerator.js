export const wrampGenerator = new Blockly.CodeGenerator('WRAMP');

wrampGenerator.forBlock['custom_block'] = function(block, generator) {
  const register1 = block.getFieldValue('register1');
  const register2 = block.getFieldValue('register2');
  const immediate = block.getFieldValue('immediate');
  return `addi $${register1}, $${register2}, ${immediate}`;
}

wrampGenerator.forBlock['custom_block2'] = function(block, generator) {
  const register1 = block.getFieldValue('register1');
  const register2 = block.getFieldValue('register2');
  const uimmediate = block.getFieldValue('uimmediate');
  return `addui $${register1}, $${register2}, ${uimmediate}`;
}

wrampGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + '\n' + wrampGenerator.blockToCode(nextBlock);
  }
  return code;
};

window.wrampGenerator = wrampGenerator;