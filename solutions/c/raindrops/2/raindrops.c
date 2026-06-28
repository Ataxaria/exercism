#include "raindrops.h"

// extensible approach

const drop_t drop_map[] = {
    { 3, "Pling" }, { 5, "Plang" }, { 7, "Plong" }
};

const unsigned int number_of_drops = sizeof(drop_map) / sizeof(drop_t);

void convert(char result[], int drops)
{
    for (size_t i = 0; i < number_of_drops; i++)
    {
        if (drops % drop_map[i].divisor == 0)
        {
            strncat(result, drop_map[i].sound, SOUND_NAME_LENGTH);
        }
    }
    if (!*result)  // equivalent to result[0] == '\0'
    {
        sprintf(result, "%d", drops);
    }
}