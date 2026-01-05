public class BoardState
{
    public uint[]? Keys;
    public uint? Key;
    public int Repeats = 0;

    public BoardState(uint[] keys)
    {
        Keys = keys;
    }

    public BoardState(uint key)
    {
        Key = key;
    }
}