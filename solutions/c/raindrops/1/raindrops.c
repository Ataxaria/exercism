#include "raindrops.h"

/*
    3 -> "Pling"
    5 -> "Plang"
    7 -> "Plong"
*/

void convert(char result[], int drops)
{
    sprintf(result, "%s%s%s", 
            drops % 3 == 0 ? "Pling" : "", 
            drops % 5 == 0 ? "Plang" : "",
            drops % 7 == 0 ? "Plong" : ""
           );
    if (drops % 3 && drops % 5 && drops % 7)
    {
        sprintf(result, "%d", drops);
    }
}