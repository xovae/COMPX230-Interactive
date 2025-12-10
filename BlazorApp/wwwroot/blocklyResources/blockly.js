window.initBlockly = (tool) => {
    const toolbox = JSON.parse(tool);
    workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox, theme: customTheme});
}

window.generateCode = () => {
    const code = wrampGenerator.workspaceToCode(workspace);
    return code;
}

window.highlightBlock = (id) => {
    workspace.highlightBlock(id);
}

const fullToolbox = {
    kind: 'categoryToolbox',
    contents:
    [
        {   name: 'Sections',
            kind: 'category',
            categorystyle: 'sectionCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'textHead'
                },
                {
                    kind: 'block',
                    type: 'global'
                },
                {
                    kind: 'block',
                    type: 'dataHead'
                },
                {
                    kind: 'block',
                    type: 'bssHead'
                }
            ]
        },
        {   name: 'Branch',
            kind: 'category',
            categorystyle: 'branchCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'label'
                },
                {
                    kind: 'block',
                    type: 'jump'
                },
                {
                    kind: 'block',
                    type: 'jumpRegister'
                },
                {
                    kind: 'block',
                    type: 'branchOn'
                }
            ]
        },
        {   name: 'Memory',
            kind: 'category',
            categorystyle: 'memoryCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'loadWord'
                },
                {
                    kind: 'block',
                    type: 'storeWord'
                },
                {
                    kind: 'block',
                    type: 'loadAddress'
                },
                {
                    kind: 'block',
                    type: 'word'
                },
                {
                    kind: 'block',
                    type: 'asciiz'
                },
                {
                    kind: 'block',
                    type: 'ascii'
                },
                {
                    kind: 'block',
                    type: 'space'
                }
            ]
        },
        {   name: 'Arithmetic',
            kind: 'category',
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
                },
                {
                    kind: 'block',
                    type: 'loadHighImmediate'
                }
            ]
        },
        {   name: 'Logic',
            kind: 'category',
            categorystyle: 'logicCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'bitwise'
                },
                {
                    kind: 'block',
                    type: 'bitwiseImmediate'
                },
                {
                    kind: 'block',
                    type: 'shift'
                },
                {
                    kind: 'block',
                    type: 'shiftImmediate'
                }
            ]
        },
        {   name: 'Conditional',
            kind: 'category',
            categorystyle: 'conditionalCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'setOn'
                },
                {
                    kind: 'block',
                    type: 'setOnUnsigned'
                },
                {
                    kind: 'block',
                    type: 'setOnImmediate'
                },
                {
                    kind: 'block',
                    type: 'setOnUnsignedImmediate'
                },
            ]
        },
        {   name: 'Special',
            kind: 'category',
            categorystyle: 'specialCategory',
            contents:
            [
                {
                    kind: 'block',
                    type: 'moveGeneralToSpecial'
                },
                {
                    kind: 'block',
                    type: 'moveSpecialToGeneral'
                },
                {
                    kind: 'block',
                    type: 'break'
                },
                {
                    kind: 'block',
                    type: 'syscall'
                },
                {
                    kind: 'block',
                    type: 'returnFromException'
                },
            ]

        }
    ]
};

const customTheme = Blockly.Theme.defineTheme('customTheme', {
    base: Blockly.Themes.Classic,
    startHats: true,
    categoryStyles:
    {
        sectionCategory:
        {
            colour: '#ebc106'
        },
        branchCategory:
        {
            colour: '#01579b'
        },
        memoryCategory:
        {
            colour: '#17add3'
        },
        arithmeticCategory:
        {
            colour: '#4a148c'
        },
        logicCategory:
        {
            colour: '#12ba43'
        },
        conditionalCategory:
        {
            colour: '#911111'
        },
        specialCategory:
        {
            colour: '#bd31b1'
        }
    },
    blockStyles:
    {
        sectionBlocks:
        {
            colourPrimary: '#ebc106'
        },
        branchBlocks:
        {
            colourPrimary: '#01579b'
        },
        memoryBlocks:
        {
            colourPrimary: '#17add3'
        },
        arithmeticBlocks:
        {
            colourPrimary: '#4a148c'
        },
        logicBlocks:
        {
            colourPrimary: '#12ba43'
        },
        conditionalBlocks:
        {
            colourPrimary: '#911111'
        },
        specialBlocks:
        {
            colourPrimary: '#bd31b1'
        }
    }
});

const definitions = Blockly.common.createBlockDefinitionsFromJsonArray([
    {   type: 'global',
        style: 'sectionBlocks',
        message0: '%1',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.global main'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Makes the label "main" global to serve as an entry point to the program'
    },
    {   type: 'textHead',
        style: 'sectionBlocks',
        message0: '%1',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.text'}
        ],
        nextStatement: null,
        tooltip: 'Defines the beginning of a .text section, which should contain WRAMP instructions'
    },
    {   type: 'dataHead',
        style: 'sectionBlocks',
        message0: '%1',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.data'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Defines the beginning of a .data section, which should contain strings, constants, or variables with initial values'
    },
    {   type: 'bssHead',
        style: 'sectionBlocks',
        message0: '%1',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.bss'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Defines the beginning of a .bss section, which declares reserved but uninitialised memory. Useful for arrays.'
    },
    {   type: 'label',
        style: 'branchBlocks',
        message0: '%1:',
        args0:
        [
            {type: 'field_input', name: 'label', text: 'label'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Creates a label which can be jumped to using instructions such as j, jal, jr, beqz, etc.',
        extensions: ['labelValidator']
    },
    {   type: 'jump',
        style: 'branchBlocks',
        message0: '%1 %2',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['j', 'j'], ['jal', 'jal']]},
            {type: 'field_input', name: 'address'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func address\nJump to the address provided. For jal, save the address of the next instruction in $ra'
    },
    {   type: 'jumpRegister',
        style: 'branchBlocks',
        message0: '%1 %2',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['jr', 'jr'], ['jalr', 'jalr']]},
            {type: 'field_input', name: 'register', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func register\nJump to the register provided. For jalr, save the address of the next instruction in $ra',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'branchOn',
        style: 'branchBlocks',
        message0: '%1 %2, %3',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['beqz', 'beqz'], ['bnez', 'bnez']]},
            {type: 'field_input', name: 'register', text: '$_'},
            {type: 'field_input', name: 'offset'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rs, offset\nConditionally branch the number of instructions specified by the sign-extended offset if register Rs is/is not equal to 0.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'loadWord',
        style: 'memoryBlocks',
        message0: '%1 %2, %3(%4)',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'lw'},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'offset'},
            {type: 'field_input', name: 'register2', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func lw Rd, Offset(Rs)\nCombine the contents of register Rs and the offset to give an effective memory address. Load the contents of that address into register Rd.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'storeWord',
        style: 'memoryBlocks',
        message0: '%1 %2, %3(%4)',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'sw'},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'offset'},
            {type: 'field_input', name: 'register2', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func lw Rd, Offset(Rs)\nCombine the contents of register Rs and the offset to give an effective memory address. Store the contents of register Rd into that address.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'loadAddress',
        style: 'memoryBlocks',
        message0: 'la %1, %2',
        args0:
        [
            {type: 'field_input', name: 'register', text: '$_'},
            {type: 'field_input', name: 'address'},
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func la Rd, Address\nPut the address into register Rd.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'arithmetic',
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
        tooltip: 'func, Rd, Rs, Rt\nPuts the result of performing the instruction func on registers Rs and Rt in register Rd. Generate an overflow exception on signed overflow.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'arithmeticUnsigned',
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
        tooltip: 'func, Rd, Rs, Rt\nPuts the result of performing the instruction func on registers Rs and Rt in register Rd. Generate an overflow exception on unsigned overflow.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'arithmeticImmediate',
        style: 'arithmeticBlocks',
        message0: '%1 %2 %3 %4 %5',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['addi', 'addi'], ['subi', 'subi'], ['multi', 'multi'], ['divi', 'divi'], ['remi', 'remi']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_image', name: 'format', src: 'blocklyResources/img/change_white.svg', width: 20, height: 20},
            {type: 'field_input', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func, Rd, Rs, Immediate\nPuts the result of performing the instruction func on register Rs and the immediate in register Rd. Generate an overflow exception on signed overflow.',
        extensions: ['generalRegisterValidator', 'immediateFormatter']
    },
    {   type: 'arithmeticUnsignedImmediate',
        style: 'arithmeticBlocks',
        message0: '%1 %2 %3 %4 %5',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['addui', 'addui'], ['subui', 'subui'], ['multui', 'multui'], ['divui', 'divui'], ['remui', 'remui']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_image', name: 'format', src: 'blocklyResources/img/change_white.svg', width: 20, height: 20},
            {type: 'field_input', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func, Rd, Rs, Immediate\nPuts the result of performing the instruction func on register Rs and the immediate in register Rd. Generate an overflow exception on unsigned overflow.',
        extensions: ['generalRegisterValidator', 'immediateFormatter']
    },
    {   type: 'loadHighImmediate',
        style: 'arithmeticBlocks',
        message0: '%1 %2, %3 %4',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'lhi'},
            {type: 'field_input', name: 'register', text: '$_'},
            {type: 'field_image', name: 'format', src: 'blocklyResources/img/change_white.svg', width: 20, height: 20},
            {type: 'field_input', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'lhi Rd, Immediate\nPut the 16 bit immediate in the upper 16 bits of register Rd, and set the lower 16 bits to 0',
        extensions: ['generalRegisterValidator', 'immediateFormatter']
    },
    {   type: 'bitwise',
        style: 'logicBlocks',
        message0: '%1 %2, %3, %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['and', 'and'], ['or', 'or'], ['xor', 'xor']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_input', name: 'register3', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, Rt\nPerform the logical operation func on registers Rs and Rt, storing the result in Rd',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'bitwiseImmediate',
        style: 'logicBlocks',
        message0: '%1 %2, %3, %4 %5',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['andi', 'andi'], ['ori', 'ori'], ['xori', 'xori']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_image', name: 'format', src: 'blocklyResources/img/change_white.svg', width: 20, height: 20},
            {type: 'field_input', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, immediate\nPerform the logical operation func on register Rs and the immediate, storing the result in Rd',
        extensions: ['generalRegisterValidator', 'immediateFormatter']
    },
    {   type: 'shift',
        style: 'logicBlocks',
        message0: '%1 %2, %3, %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['sll', 'sll'], ['srl', 'srl'], ['sra', 'sra']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_input', name: 'register3', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, Rt\nShift the bits in the direction defined by func in register Rs by the amount in Rt, storing the result in Rd',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'shiftImmediate',
        style: 'logicBlocks',
        message0: '%1 %2, %3, %4 %5',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['slli', 'slli'], ['srli', 'srli'], ['srai', 'srai']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_image', name: 'format', src: 'blocklyResources/img/change_white.svg', width: 20, height: 20},
            {type: 'field_input', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, immediate\nShift the bits in the direction defined by func in register Rs by the amount in the immediate, storing the result in Rd',
        extensions: ['generalRegisterValidator', 'immediateFormatter']
    },
    {   type: 'setOn',
        style: 'conditionalBlocks',
        message0: '%1 %2, %3, %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['slt', 'slt'], ['sgt', 'sgt'], ['sle', 'sle'], ['sge', 'sge'], ['seq', 'seq'], ['sne', 'sne']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_input', name: 'register3', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, Rt\nPerform logical operation func on registers Rs and Rt. Set Rd to 1 if true, 0 otherwise.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'setOnUnsigned',
        style: 'conditionalBlocks',
        message0: '%1 %2, %3, %4',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['sltu', 'sltu'], ['sgtu', 'sgtu'], ['sleu', 'sleu'], ['sgeu', 'sgeu'], ['sequ', 'sequ'], ['sneu', 'sneu']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_input', name: 'register3', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, Rt\nPerform logical operation func on registers Rs and Rt. Set Rd to 1 if true, 0 otherwise.',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'setOnImmediate',
        style: 'conditionalBlocks',
        message0: '%1 %2, %3, %4 %5',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['slti', 'slti'], ['sgti', 'sgti'], ['slei', 'slei'], ['sgei', 'sgei'], ['seqi', 'seqi'], ['snei', 'snei']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_image', name: 'format', src: 'blocklyResources/img/change_white.svg', width: 20, height: 20},
            {type: 'field_input', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, immediate\nPerform logical operation func on register Rs and the immediate. Set Rd to 1 if true, 0 otherwise.',
        extensions: ['generalRegisterValidator', 'immediateFormatter']
    },
    {   type: 'setOnUnsignedImmediate',
        style: 'conditionalBlocks',
        message0: '%1 %2, %3, %4 %5',
        args0:
        [
            {type: 'field_dropdown', name: 'instruction', options: [['sltui', 'sltui'], ['sgtui', 'sgtui'], ['sleui', 'sleui'], ['sgeui', 'sgeui'], ['sequi', 'sequi'], ['sneui', 'sneui']]},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'},
            {type: 'field_image', name: 'format', src: 'blocklyResources/img/change_white.svg', width: 20, height: 20},
            {type: 'field_input', name: 'immediate'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'func Rd, Rs, immediate\nPerform logical operation func on register Rs and the immediate. Set Rd to 1 if true, 0 otherwise.',
        extensions: ['generalRegisterValidator', 'immediateFormatter']
    },
    {   type: 'moveGeneralToSpecial',
        style: 'specialBlocks',
        message0: '%1 %2, %3',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'movgs'},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'movgs Rd, Rs\nMove the conents of general register Rs into special register Rd',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'moveSpecialToGeneral',
        style: 'specialBlocks',
        message0: '%1 %2, %3',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'movsg'},
            {type: 'field_input', name: 'register1', text: '$_'},
            {type: 'field_input', name: 'register2', text: '$_'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'movgs Rd, Rs\nMove the conents of special register Rs into general register Rd',
        extensions: ['generalRegisterValidator']
    },
    {   type: 'break',
        style: 'specialBlocks',
        message0: '%1',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'break'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Generate a break point exception'
    },
    {   type: 'syscall',
        style: 'specialBlocks',
        message0: '%1',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'syscall'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Generate a syscall exception'
    },
    {   type: 'returnFromException',
        style: 'specialBlocks',
        message0: '%1',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: 'rfe'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Execute a Return from Exception (rfe)'
    },
    {   type: 'word',
        style: 'memoryBlocks',
        message0: '%1 %2',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.word'},
            {type: 'field_input', name: 'string'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Assigns one word of memory space and initialises it to the value provided.'
    },
    {   type: 'asciiz',
        style: 'memoryBlocks',
        message0: '%1 %2',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.asciiz'},
            {type: 'field_input', name: 'string'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Initialises space for the ASCII string provided, adding a NULL terminator'
    },
    {   type: 'ascii',
        style: 'memoryBlocks',
        message0: '%1 %2',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.ascii'},
            {type: 'field_input', name: 'string'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Initialises space for the ASCII string provided, without NULL terminating'
    },
    {   type: 'space',
        style: 'memoryBlocks',
        message0: '%1, %2',
        args0:
        [
            {type: 'field_label_serializable', name: 'instruction', text: '.space'},
            {type: 'field_number', name: 'string'}
        ],
        previousStatement: null,
        nextStatement: null,
        tooltip: 'Allocate a chunk of space of the inputted size in the .bss section'
    }
]);

Blockly.Extensions.register('labelValidator',
    function()
    {
        const regexPattern = /^[a-zA-Z0-9_.]+$/;

        field = this.getField('label');

        field.setValidator(function(newValue) {
            return regexPattern.test(newValue) ? newValue : null;
        });
    }
);

Blockly.Extensions.register('generalRegisterValidator',
    function()
    {
        const regExPattern = /^\$(?:[0-9]|1[0-5]|ra|sp)$/;

        var field;

        if ((field = this.getField('register')) != null)
        {
            field.setValidator(function(newValue) {
                return regExPattern.test(newValue) ? newValue : null
            })
        }

        if ((field = this.getField('register1')) != null)
        {
            field.setValidator(function(newValue) {
                return regExPattern.test(newValue) ? newValue : null
            })
        }

        if ((field = this.getField('register2')) != null)
        {
            field.setValidator(function(newValue) {
                return regExPattern.test(newValue) ? newValue : null
            })
        }

        if ((field = this.getField('register3')) != null)
        {
            field.setValidator(function(newValue) {
                return regExPattern.test(newValue) ? newValue : null
            })
        }
    }
);

Blockly.Extensions.register('immediateFormatter',
    function()
    {
        const block = this;
        block.fieldImage = block.getField('format');
        block.fieldImmediate = block.getField('immediate');
        block.format = 0;

        const decimalRegexPattern = /^[0-9]+$/;
        const hexRegexPattern = /^0x[0-9a-f]{1,5}$/;
        const binaryRegexPattern = /^0b[0-1]{1,20}$/;

        block.fieldImmediate.setValidator(function(newValue) {
            return decimalRegexPattern.test(newValue) ? newValue : null;
        });

        block.fieldImage.setOnClickHandler(function(image)
        {
            //Get current field value, removing the 0b if present as parseInt only knows how to handle hex values, not binary
            value = parseInt(block.fieldImmediate.getText().replace("0b", ""));
            //0: Decimal, 1: Hex, 2: Binary
            block.format = (block.format + 1) % 3;
            switch (block.format)
            {
                case 0:
                    if (isNaN(value))
                    {
                        block.fieldImmediate.setValidator(null);
                        block.fieldImmediate.setValue("");
                    }
                    block.fieldImmediate.setValidator(function(newValue) {
                        return decimalRegexPattern.test(newValue) ? newValue : null;
                    });
                    block.fieldImmediate.setValue(parseInt(value, 2));
                    break;
                case 1:
                    if (isNaN(value))
                    {
                        block.fieldImmediate.setValidator(null);
                        block.fieldImmediate.setValue("0x");
                    }
                    block.fieldImmediate.setValidator(function(newValue) {
                        return hexRegexPattern.test(newValue) ? newValue : null;
                    });
                    block.fieldImmediate.setValue("0x" + value.toString(16));
                    break;
                case 2:
                    if (isNaN(value))
                    {
                        block.fieldImmediate.setValidator(null);
                        block.fieldImmediate.setValue("0b");
                    }
                    block.fieldImmediate.setValidator(function(newValue) {
                        return binaryRegexPattern.test(newValue) ? newValue : null;
                    });
                    block.fieldImmediate.setValue("0b" + parseInt(value).toString(2));
                    break;
            };
        });
    }
);

Blockly.common.defineBlocks(definitions);

const supportedEvents = new Set ([
    Blockly.Events.BLOCK_CHANGE,
    Blockly.Events.BLOCK_CREATE,
    Blockly.Events.BLOCK_DELETE,
    Blockly.Events.BLOCK_MOVE,
    Blockly.Events.BLOCK_FIELD_INTERMEDIATE_CHANGE
]);

function updateCode(event) {
    if (workspace.isDragging()) return;
    if (!supportedEvents.has(event.type)) return;

    const codeArea = document.getElementById('wsimCode');
    const highlightRegex = /highlightBlock\('[^']+'\)\n/g;
    const tabRegex = /\t(.text|.global main|.bss|.data|LABEL)/g;
    //Get the current code, and remove all back end elements not meant to be seen by the user
    code = wrampGenerator.workspaceToCode(workspace);
    code = code.replace(highlightRegex, "");
    code = code.replace(tabRegex, "$1");
    code = code.replaceAll("LABEL", "");
    //Translate all special characters to their HTML equivalents
    code = code.replaceAll("\n", "<br>");
    code = code.replaceAll("\t", "&emsp;")
    codeArea.innerHTML = code;
}

window.initUpdate = () => {
    workspace.addChangeListener(updateCode);
}