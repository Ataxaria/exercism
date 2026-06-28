#include "grains.h"

uint64_t square(uint8_t index)
{
    if (index > 64 || index < 1)
    {
        return 0;
    }
    return UINT64_C(1) << (index - 1);
}

uint64_t total(void)
{
    // 1 + 1*2 + 1*2*2 + 1*2*2*2*2 --> GP
    return UINT64_MAX;
}