#include "perfect_numbers.h"

kind classify_number(int n)
{
    if (n <= 0) { return ERROR; }
    int sum = 0;
    for (int i = 1; i < n; i++)
    {
        if (n % i == 0) { sum += i; }
    }

    return n > sum ? DEFICIENT_NUMBER : 
            n == sum ? PERFECT_NUMBER : ABUNDANT_NUMBER;
}