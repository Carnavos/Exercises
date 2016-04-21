using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharpShapes
{
    public class Shape
    {
        public string name { get; set; }
        public string prompt { get; set; }
        public string resultText { get; set; }
        public int numOfInputs { get; set; }
        public string units { get; set; }
        public int numOfSides { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public int depth{ get; set; }

        public virtual double calculateOutput (int[] inputs)
        {
            return 0;
        }
        //public virtual int calculateOutput (int[] inputs)
        //{
        //    return 0;
        //}
        public Shape()
        {
            width = 4;
            height = 2;
        }
        public int calculateArea ()
        {
            return width * height;
        }
        public int calculateVolume ()
        {
            return width * height * depth;
        }
    }
}
