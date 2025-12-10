 public class Toolbox {
        public string kind { get; set; } = "categoryToolbox";
        required public List<Category> contents { get; set; }
    }

    public class Category {
        required public string name { get; set; }
        public string kind { get; set; } = "category";
        required public string categorystyle { get; set; }
        required public List<Block> contents { get; set; }
    }

    public class Block {
        public string kind { get; set; } = "block";
        required public string type { get; set; }
    }
