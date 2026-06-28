#include "eliuds_eggs.h"

unsigned int egg_count(unsigned int n)
{
    unsigned int count = 0;
    while (n)
    {
        n &= n - 1;
        count++;
    }
    /*
    Brian Kernighan's algorithm
    n = n & n-1
    111 & 110 = 110
    110 & 101 = 100
    100 & 011 = 000
    */
    return count;
}