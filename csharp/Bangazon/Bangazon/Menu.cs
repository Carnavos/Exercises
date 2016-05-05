using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bangazon
{
    public class Menu
    {
        public string menuText { get; set; }
        public bool singleKeyRead { get; set; }
        // menu constructor
        public Menu (string menuString, bool singleKey) // used to have a string menuString parameter
        {
            menuText = menuString;
            singleKeyRead = singleKey;
        }
    }
}
