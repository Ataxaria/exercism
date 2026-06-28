#include "darts.h"

#include <math.h>

uint8_t score(coordinate_t pos)
{
    float distance = hypot(pos.x, pos.y);
    if (distance > 10.0f) { return 0; }
    if (distance > 5.0f) { return 1; }
    if (distance > 1.0f) { return 5; }
    return 10;
}
