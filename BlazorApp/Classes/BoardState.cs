public class BoardState {
    public uint[] Keys = [0];
    public uint Key = 0;
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