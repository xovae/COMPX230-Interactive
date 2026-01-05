public class ParallelState
{
    public bool SSDDecoded;
    public ParallelComponents component;
    public int? start;
    public int? end;
    public int? value;
    public List<uint>? values;

    public ParallelState(ParallelComponents component, int start, int end, bool SSDDecoded = false)
    {
        this.component = component;
        this.start = start;
        this.end = end;
        this.SSDDecoded = SSDDecoded;
    }

    public ParallelState(ParallelComponents component, int value, bool SSDDecoded = false)
    {
        this.component = component;
        this.value = value;
        this.SSDDecoded = SSDDecoded;
    }

    public ParallelState(ParallelComponents component, List<uint> values, bool SSDDecoded = false)
    {
        this.component = component;
        this.values = values;
        this.SSDDecoded = SSDDecoded;
    }
}