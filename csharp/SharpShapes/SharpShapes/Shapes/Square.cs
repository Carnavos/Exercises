using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharpShapes
{
    public class Square : Shape
    {
        public Square ()
        {
            name = "Square";
            prompt = "Enter width and height";
            numOfInputs = 2;
            resultText = "Square Area:";
            units = "square inches";
            numOfSides = 4;
        }
        // circle version with area equation
        public override double calculateOutput(int[] inputs)
        {
            return inputs[0] * inputs[1];
        }


    }
}
