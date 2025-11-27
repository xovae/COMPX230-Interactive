export const wrampGenerator = new Blockly.CodeGenerator('WRAMP');

wrampGenerator.forBlock['textHead'] = function(block, generator) {
  return `.text`;
}

wrampGenerator.forBlock['dataHead'] = function(block, generator) {
  return `.data`;
}


wrampGenerator.forBlock['bssHead'] = function(block, generator) {
  return `.bss`;
}

wrampGenerator.forBlock['arithmetic'] = function(block, generator) {
  const instruction = block.getFieldValue('instruction');
  const register1 = block.getFieldValue('register1');
  const register2 = block.getFieldValue('register2');
  const register3 = block.getFieldValue('register3');
  return `${instruction} ${register1}, ${register2}, ${register3}`;
}

wrampGenerator.forBlock['arithmetic_immediate'] = function(block, generator) {
  const instruction = block.getFieldValue('instruction');
  const register1 = block.getFieldValue('register1');
  const register2 = block.getFieldValue('register2');
  const immediate = block.getFieldValue('immediate');
  return `${instruction} ${register1}, ${register2}, ${immediate}`;
}

wrampGenerator.forBlock['label'] = function(block, generator) {
  const label = block.getFieldValue('label');
  return `${label}:`;
}

wrampGenerator.forBlock['main'] = function(block, generator) {
  return 'main:';
}

wrampGenerator.forBlock['textDef'] = function(block, generator) {
  const globalLabel = block.getFieldValue('globalLabel')
  return `.text\n.main ${globalLabel}`;
}

wrampGenerator.forBlock['jump'] = function(block, generator) {
  const jump = block.getFieldValue('jump');
  return `j ${jump}`;
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