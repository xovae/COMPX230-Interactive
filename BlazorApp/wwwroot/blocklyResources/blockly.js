window.initBlockly = () => {
    workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox, theme: customTheme});
}

window.generateCode = () => {
    const code = wrampGenerator.workspaceToCode(workspace);
    console.log(code);
    return code;
}

const toolbox = {
    kind: 'categoryToolbox',
    contents:
    [
        {
            kind: 'category',
            name: 'Branch',
            categorystyle: 'branchCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'textHead'
                },
                {
                    kind: 'block',
                    type: 'dataHead'
                },
                {
                    kind: 'block',
                    type: 'bssHead'
                },
                {
                    kind: 'block',
                    type: 'label'
                },
                {
                    kind: 'block',
                    type: 'jump'
                }
            ]
        },
        {
            kind: 'category',
            name: 'Arithmetic',
            categorystyle: 'arithmeticCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'arithmetic'
                },
                {
                    kind: 'block',
                    type: 'arithmeticUnsigned'
                },
                {
                    kind: 'block',
                    type: 'arithmeticImmediate'
                },
                {
                    kind: 'block',
                    type: 'arithmeticUnsignedImmediate'
                }
            ]
        },
        {
            kind: 'category',
            name: 'Logic',
            categorystyle: 'logicCategory',
            contents:
            [
            ]
        },
    ]
};

const customTheme = Blockly.Theme.defineTheme('customTheme', {
    base: Blockly.Themes.Classic,
    startHats: true,
    categoryStyles:
    {
        branchCategory:
        {
            colour: '#01579b'
        },
        arithmeticCategory:
        {
            colour: '#4a148c'
        },
        logicCategory: {
            colour: '#12ba43'
        }
    },
    blockStyles:
    {
        branchBlocks:
        {
            colourPrimary: '#01579b'
        },
        arithmeticBlocks:
        {
            colourPrimary: '#4a148c'
        },
        logicBlocks:
        {
            colourPrimary: '#12ba43'
        }
    }
});

const definitions = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        type: 'arithmetic',
        style: 'arithmeticBlocks',
        message0: '%1 %2 %3 %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['add', 'add'], ['sub', 'sub'], ['mult', 'mult'], ['div', 'div'], ['rem', 'rem']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_input', name: 'register3', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func, Rd, Rs, Rt\nPuts the result of performing the instruction func on registers Rs and Rt in register Rd'
    },
     {
        type: 'arithmeticUnsigned',
        style: 'arithmeticBlocks',
        message0: '%1 %2 %3 %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['addu', 'addu'], ['subu', 'subu'], ['multu', 'multu'], ['divu', 'divu'], ['remu', 'remu']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_input', name: 'register3', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func, Rd, Rs, Rt\nPuts the result of performing the instruction func on registers Rs and Rt in register Rd'
    },
    {
        type: 'arithmeticImmediate',
        style: 'arithmeticBlocks',
        message0: '%1 %2 %3 %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['addi', 'addi'], ['subi', 'subi'], ['multi', 'multi'], ['divi', 'divi'], ['remi', 'remi']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_number', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Adds the contents of register Rx and immediate y and stores the result in Ry'
    },
    {
        type: 'arithmeticUnsignedImmediate',
        style: 'arithmeticBlocks',
        message0: '%1 %2 %3 %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['addui', 'addui'], ['subui', 'subui'], ['multui', 'multui'], ['divui', 'divui'], ['remui', 'remui']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_number', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Adds the contents of register Rx and immediate y and stores the result in Ry'
    },
    {
        type: 'textHead',
        style: 'branchBlocks',
        message0: '.text',
        nextStatement: null,
        toolbox: 'Defines the beginning of the .text section'
    },
    {
        type: 'dataHead',
        style: 'branchBlocks',
        message0: '.data',
        previousStatement: null,        //TODO: Get thoughts on previous connection for section blocks?
        nextStatement: null,
        toolbox: 'Defines the beginning of the .data section'
    },
    {
        type: 'bssHead',
        style: 'branchBlocks',
        message0: '.bss',
        previousStatement: null,
        nextStatement: null,
        toolbox: 'Defines the beginning of the .bss section'
    },
    {
        type: 'label',
        style: 'branchBlocks',
        message0: '%1:',
        args0:
        [
            {type: 'field_input', name: 'label', text: 'label'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Creates a label which can be jumped to using instructions such as j, jal, beqz, etc.'
    },
    {
        type: 'jump',
        style: 'branchBlocks',
        message0: 'j %1',
        args0:
        [
            {type: 'field_input', name: 'jump'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Jumps to the label provided!'
    }
]);

Blockly.common.defineBlocks(definitions);