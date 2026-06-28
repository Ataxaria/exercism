#include "binary.h"

int convert(const char *input)
{
    if (!input) { return INVALID; }
    int num = 0;
    do
    {
        if (!(*input == '1' || *input == '0')) { return INVALID; }
        num = (num << 1) + *input - 0x30;
    }
    while (*(++input));
    return num;
}