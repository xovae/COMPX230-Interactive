window.initBlockly = () => {
    workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
}

window.generateCode = () => {
    const code = wrampGenerator.workspaceToCode(workspace);
    console.log(code);
}

const toolbox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'arithmetic',
            contents: [
                {
                    kind: 'block',
                    type: 'custom_block'
                }
            ]
        },
        {
            kind: 'category',
            name: 'logic',
            contents: [
                {
                    kind: 'block',
                    type: 'custom_block2'
                }
            ]
        },
    ]
};

const definitions = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        type: 'custom_block',
        message0: 'addi $%1 $%2 %3',
        args0:
        [
            {type: 'field_number', name: 'register1'},
            {type: 'field_number', name: 'register2'},
            {type: 'field_number', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null
    },
    {
         type: 'custom_block2',
        message0: 'addui $%1 $%2 %3',
        args0:
        [
            {type: 'field_number', name: 'register1'},
            {type: 'field_number', name: 'register2'},
            {type: 'field_number', name: 'uimmediate'}
        ],
        previousStatement: null,
        nextStatement: null
    }
]);

Blockly.common.defineBlocks(definitions);