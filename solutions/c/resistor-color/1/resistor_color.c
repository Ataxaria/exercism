#include "resistor_color.h"

unsigned int color_code(resistor_band_t color)
{
    return color;
}

const resistor_band_t *colors(void)
{
    static const resistor_band_t values[] = { 
        BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE 
    };
    return values;
}