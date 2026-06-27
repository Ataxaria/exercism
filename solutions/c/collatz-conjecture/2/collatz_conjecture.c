#include "collatz_conjecture.h"

int steps(int start)
{
    if (start < 1)
    {
        return ERROR_VALUE;
    }

    int count = 0;
    while (start != 1)
    {
        if ((start & 1) == 0)  // bitwise check for even
            start >>= 1;  // bitwise divison by 2 for positive even numbers
        else
            start = 3*start + 1;
        
        count++;
    }
    return count;
}

/*
int steps2(int start)
{
    if (start < 1)
        return ERROR_VALUE;
        
    if (start == 1)
        return 0;

    if ((start & 1) == 0)  // bitwise check for even
        return steps2(start >> 1) + 1;
    
    return steps2(3*start + 1) + 1;
}
*/