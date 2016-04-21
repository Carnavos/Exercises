using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Alphabits
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter each letter of the alphabet lowercase in order from a to z");
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
