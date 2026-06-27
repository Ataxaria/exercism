#include "hamming.h"

int compute(const char *lhs, const char *rhs)
{
    int hamming_distance = 0;
    while (*lhs && *rhs) 
    {
        if (*lhs != *rhs) { hamming_distance++; }
        lhs++; rhs++;
    }
    
    return (*lhs || *rhs) ? -1 : hamming_distance;
}