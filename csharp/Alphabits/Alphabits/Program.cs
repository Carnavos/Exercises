using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace Alphabits
{
    class Program
    {
        static void Main(string[] args)
        {
            // declare an alphabet object instance (methods contained within)
            alphabetClass theAlphabet = new alphabetClass();

            while (!theAlphabet.alphabetComplete())
            {
                Console.WriteLine("Enter each letter of the alphabet lowercase in order from a to z");

                // Console.WriteLine that shows if there's an invalid entry
                // String exceptionText = theAlphabet.returnErrorText();
                String errorMessage = String.Format("Invalid Character: {0}", theAlphabet.errorText);
                if (!theAlphabet.validState) Console.WriteLine(errorMessage);

                if (theAlphabet.listLength() > 0) { Console.Write("Current Alphabet Progress: {0}", theAlphabet.listLength()); };

                // break line
                Console.WriteLine();
                theAlphabet.alphabetList.ForEach(item => Console.Write(item));

                // Console.WriteLine("Enter the next character: ");
                // char testChar = Console.ReadKey().KeyChar;

                try
                {
                    // validation on NewChar setter, throws argument exception if invalid, adds through addChar if 
                    theAlphabet.NewChar = Console.ReadKey().KeyChar;
                    theAlphabet.addChar(theAlphabet.NewChar, theAlphabet.alphabetList);

                }
                catch (ArgumentException exception)
                {
                    // sets error message instead of directly writing to console
                    theAlphabet.validState = false;
                    theAlphabet.errorText = exception.Message;
                }
                Console.WriteLine("You entered {0}", theAlphabet.NewChar);
                Console.Clear();
            }
            Console.WriteLine("Alphabet Complete: Program Terminating...");
            // put window to sleep... permanently
            Thread.Sleep(3000);
        }
    }
}
//Alphabits
//Use visual studio and C# to build a console app where the user is challenged to enter all the letters of the alphabet, one at a time, without repeating any, and without typing any non-letter characters.

//Behavior

//After each successful input, display the number of letters already entered.
//After each unsuccessful input, display a helpful message explaining why the input was unsuccessful(e.g. 'not a letter', 'duplicate letter', etc.)
//Upon completing the task(entering in all 26 letters), the user should receive some gratifying message like "Congratulations"
//Technical requirements

//Use one Class in addition to the program file.
//Your class should include a constructor function, an "addChar" method, and a "listLength" method.
//Keep your user's successfully input letters as a list of characters
//Use the String.Format method to craft your messages to users
//Bonus Requirements

//Create a returnList Method on your class
//Create a non-letter "Easter egg" character that will display the current list of successfully input letters(but will not add itself to the list!)
