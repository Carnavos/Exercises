using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharpShapes
{
    public class Circle : Shape
    {
        // constructor function
        public Circle()
        {
            name = "Circle";
            prompt = "Enter radius";
            numOfInputs = 1;
            resultText = "Circle Area:";
            numOfSides = 0;
            units = "square inches";
        }
        // circle version with area equation
        public override double calculateOutput (int[] inputs)
        {
            return Math.Pow(inputs[0], 2) * 3.14;
        }
    }
}
