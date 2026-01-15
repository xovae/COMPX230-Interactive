public class BoardState
{
    public uint[]? Keys;
    public uint? Key;
    public string? String;
    public int Repeats = 0;

    public BoardState(uint[] keys)
    {
        Keys = keys;
    }

    public BoardState(uint key)
    {
        Key = key;
    }

    public BoardState(string s, uint[] keys)
    {
        String = s;
        Keys = keys;
    }
}