#include "perfect_numbers.h"

kind classify_number(int n)
{
    if (n <= 0) { return ERROR; }
    int sum = 0;
    int square_root = sqrt(n);
    for (int i = 1; i <= square_root; i++)
    {
        div_t result = div(n, i);
        if (result.rem == 0) { sum += result.quot + i; }
    }
    sum -= square_root * square_root == n ? n + square_root : n;
    return n > sum ? DEFICIENT_NUMBER :
            n == sum ? PERFECT_NUMBER : ABUNDANT_NUMBER;
}