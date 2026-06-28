#include "binary.h"

int convert(const char *input)
{
    if (!input) { return INVALID; }
    int num = 0;
    do
    {
        if (*input == '1' || *input == '0')
        {
            num <<= 1;
            num += *input - 0x30;
        }
        else 
        {
            return INVALID;    
        }
    }
    while (*(++input));
    return num;
}