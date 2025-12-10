public class Tabs {
    public bool GPRegisters;
    public bool RAM;
    public bool ParallelRegisters;
    public bool SerialPort;
    public bool PhysicalComponents;

    public Tabs(bool GPRegisters, bool RAM, bool ParallelRegisters, bool SerialPort, bool PhysicalComponents)
    {
        this.GPRegisters = GPRegisters;
        this.RAM = RAM;
        this.ParallelRegisters = ParallelRegisters;
        this.SerialPort = SerialPort;
        this.PhysicalComponents = PhysicalComponents;
    }
}