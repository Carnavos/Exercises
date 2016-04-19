using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharpShapes
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Shape> Shapes = new List<Shape>();
            Shapes.Add(new Circle());
            
            foreach (Shape item in Shapes)
            { Console.WriteLine("{0}. {1}", Shapes.IndexOf(item) + 1, item.name); }
            //Shapes.Add(new Square());
            Console.WriteLine("Please select a shape");
            var userChoice = Console.ReadKey();
        }
    }
}

//This exercise involved creating a system that generates myriad shapes in C#. Build a command line tool that does the following:

//Outputs a numbered list of possible shapes to be built.
//Allow user to select one of the choices.
//After shape type is chosen, ask for size information.
//Radius for circles.
//Width/height for squares and rectangles.
//Radius/height for cylinders.
//etc..
//After basic size information is entered, the program will output circumference/area/volume of the shape, and the number of sides for the shape.
//Step 1 Example

//Select a shape:
//1. Circle
//2. Square
//3. Rhombus
//4. Cube
//5. Cylinder
//> 
//Step 2 Example

//You chose Cube.

//Enter the height, width, and depth separated by commas
//> 5,4,8
//Step 3 Example

//The total volume of the cube is 160.