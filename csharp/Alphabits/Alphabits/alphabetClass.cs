using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alphabits
{
    // Your class should include a constructor function, an "addChar" method, and a "listLength" method.
    // Keep your user's successfully input letters as a list of characters
    // Use the String.Format method to craft your messages to users
    public class alphabetClass
    {
        public List<char> alphabetList = new List<char>();

        private int currentProgressInt { get; set; }
        public alphabetClass()
        {
            currentProgressInt = 0; // must start at "a" (represented by a number)
        }

        public bool validCharCheck(char charToTest)
        {
            //return charToTest > currentProgressInt && char.IsLetter(charToTest);
            return true;
        }
        
        public bool alphabetComplete()
        {
            return alphabetList.Count == 26;
        }

        public void addChar (char character, List<char> alphabet)
        {
          // logic to add character to the larger string
          //if (validCharCheck(character))
        if (true)
        {
                // Console.Clear();
                // Console.WriteLine("Valid Character!");
                alphabetList.Add(character);
        }
        else
        {
            Console.WriteLine("Invalid Character :(");
        }

    }

    public void listLength (List<string> alphaList)
    {
        // logic to display the length of the alphabet List as is currently
    }
    }
}
