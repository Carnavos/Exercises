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
        public bool validState { get; set; }
        public string errorText { get; set; }
        private int currentProgressInt { get; set; }
        private char _newChar;
        public char NewChar
        {
            get { return _newChar; }
            set
            {
                if (!char.IsLetter(value))
                {
                    throw new ArgumentException("Character entered not a letter");
                }
                if (value < currentProgressInt)
                {
                    throw new ArgumentException("New letter must be next letter in the alphabet");
                }
                if (value > currentProgressInt + 1)
                {
                    throw new ArgumentException("New letter must immediately follow current letter in the alphabet");
                }
                if (value == currentProgressInt)
                {
                    throw new ArgumentException("Same letter, enter the next letter in alphabet");
                }
                _newChar = value;
            }
        }
        public alphabetClass()
        {
            validState = true;
            currentProgressInt = 96; // must start at "a" (represented by a number)
        }

        public bool validCharCheck(char charToTest)
        {
            return (charToTest == currentProgressInt + 1) && char.IsLetter(charToTest);
            //return true;
        }
        
        public bool alphabetComplete()
        {
            return alphabetList.Count == 26;
        }

        public void addChar (char character, List<char> alphabet)
        {
          // logic to add character to the larger string
          // should be a try/catch block
            alphabetList.Add(character);
            // toggle invalid prompt off
            currentProgressInt++;
            validState = true;
        }

        public int listLength ()
        {
            // logic to display the length of the Alphabet List as is currently
            return alphabetList.Count;
        }
        public List<char> returnList ()
        {
            return alphabetList;
        }

        // experimental
        //public string returnErrorText()
        //{
        //    return errorText;
        //}
    }
}
