using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BagOLoot
{
    class Program
    {
        static void Main(string[] args)
        {
            // initialize a bag
            Bag bagOLoot = new Bag();


            // arguments switch statement
            // variable to determine end of loop
            bool runningMan = false;

            // renewing prompt for interacting with bag of loot
            while (runningMan)
            {
                Console.Write("Enter command: ");
                // attempt try/catch configured setter for basic validation

                try
                {
                    bagOLoot.userInput = Convert.ToString(Console.Read());
                }

                // exception handling
                catch (ArgumentException exception)
                {
                    // sets error message instead of directly writing to console
                    // once there are exceptions in the userInput, move false validState there
                    bagOLoot.validState = false;
                    bagOLoot.errorText = exception.Message;
                }

            }
            // test
            Console.WriteLine("user input argument: {0}", args[0]);
            //bagOLoot.AddToy("lego", "jeff");
            switch (args[0])
            {
                case "add":
                    Console.WriteLine("bruh");
                    bagOLoot.AddToy(args[1], args[2]);
                    break;
                case "remove":
                    bagOLoot.RemoveToy(args[1], args[2]);
                    break;
                case "ls":
                    if (args.Length <= 1)
                    {
                        bagOLoot.ListAllChildrenWithToys();
                    }
                    else
                    {
                        bagOLoot.ListAllToys(args[1]);
                    }
                    break;
                case "delivered":
                    bagOLoot.ChangeDeliveredStatus(args[1], true);
                    break;
                default:
                    Console.WriteLine("You didn't write anything, try again");
                    break;
            }
            // end program key
            Console.ReadKey();
        }
    }
}
