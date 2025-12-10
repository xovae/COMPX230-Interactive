public class Tabs {
    public bool Instructions;
    public bool GPRegisters;
    public bool RAM;
    public bool ParallelRegisters;
    public bool SerialPort;
    public bool PhysicalComponents;
    public bool Library;

    public Tabs(bool Instructions, bool GPRegisters, bool RAM, bool ParallelRegisters, bool SerialPort, bool PhysicalComponents, bool Library)
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