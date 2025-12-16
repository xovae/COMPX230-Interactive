public class Tabs {
    public bool Instructions;
    public bool GPRegisters;
    public bool RAM;
    public bool ParallelRegisters;
    public bool SerialPort;
    public bool PhysicalComponents;
    public bool Library;

    public Tabs(bool Instructions = false, bool GPRegisters = false, bool RAM = false, bool ParallelRegisters = false, bool SerialPort = false, bool PhysicalComponents = false, bool Library = false)
    {
        this.Instructions = Instructions;
        this.GPRegisters = GPRegisters;
        this.RAM = RAM;
        this.ParallelRegisters = ParallelRegisters;
        this.SerialPort = SerialPort;
        this.PhysicalComponents = PhysicalComponents;
        this.Library = Library;
    }
}