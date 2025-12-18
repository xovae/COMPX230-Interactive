public class Components {
    public bool WSIMInstructions;
    public bool GPRegisters;
    public bool SPRegisters;
    public bool RAM;
    public bool ParallelRegisters;
    public bool SerialPort;
    public bool LEDs;
    public bool Switches;
    public bool Buttons;
    public bool SSDs;
    public bool Library;

    public bool Blockly;

    public Components(bool WSIMInstructions = false, bool GPRegisters = false, bool SPRegisters = false, bool RAM = false, bool ParallelRegisters = false, bool SerialPort = false, bool LEDs = false, bool Switches = false, bool Buttons = false, bool SSDs = false, bool Library = false, bool Blockly = false)
    {
        this.WSIMInstructions = WSIMInstructions;
        this.GPRegisters = GPRegisters;
        this.SPRegisters = SPRegisters;
        this.RAM = RAM;
        this.ParallelRegisters = ParallelRegisters;
        this.SerialPort = SerialPort;
        this.LEDs = LEDs;
        this.Switches = Switches;
        this.Buttons = Buttons;
        this.SSDs = SSDs;
        this.Library = Library;
        this.Blockly = Blockly;
    }
}

public enum RegisterType {GP, SP}