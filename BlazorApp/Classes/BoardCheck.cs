public class BoardCheck
{
    public WRAMPComponents? component;
    public List<WRAMPComponents>? components;

    public uint? start;
    public uint? end;
    public uint? value;
    public List<uint>? values;
    public uint? checkIndex;

    public BoardCheck(WRAMPComponents component, uint start, uint end, uint checkIndex = 0)
    {
        this.component = component;
        this.start = start;
        this.end = end;
        this.checkIndex = checkIndex;
    }

    public BoardCheck(List<WRAMPComponents> components, uint start, uint end, uint checkIndex = 0)
    {
        this.components = components;
        this.start = start;
        this.end = end;
        this.checkIndex = checkIndex;
    }


    public BoardCheck(WRAMPComponents component, uint value, uint checkIndex = 0)
    {
        this.component = component;
        this.value = value;
        this.checkIndex = checkIndex;
    }

    public BoardCheck(List<WRAMPComponents> components, uint value, uint checkIndex = 0)
    {
        this.components = components;
        this.value = value;
        this.checkIndex = checkIndex;
    }

    public BoardCheck(WRAMPComponents component, List<uint> values, uint checkIndex = 0)
    {
        this.component = component;
        this.values = values;
        this.checkIndex = checkIndex;
    }

    public BoardCheck(List<WRAMPComponents> components, List<uint> values, uint checkIndex = 0)
    {
        this.components = components;
        this.values = values;
        this.checkIndex = checkIndex;
    }
}