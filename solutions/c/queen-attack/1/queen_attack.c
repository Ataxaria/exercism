#include "queen_attack.h"

/*
arr[8][8]
    r  c
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]
[0, 1, 2, 3, 4, 5, 6, 7]
*/

attack_status_t can_attack(position_t queen_1, position_t queen_2)
{
    bool valid_pos = queen_1.row < 8 && queen_2.row < 8 && queen_1.column < 8 && queen_2.column < 8 
        && !(queen_1.row == queen_2.row && queen_1.column == queen_2.column);  // overlap check
    if (!valid_pos) { return INVALID_POSITION; }

    bool can_attack = queen_1.row - queen_1.column == queen_2.row - queen_2.column  // main diagonal
        || queen_1.row + queen_1.column == queen_2.row + queen_2.column  // anti diagonal
        || queen_1.row == queen_2.row  // same row
        || queen_1.column == queen_2.column;  // same column
    
    return can_attack ? CAN_ATTACK : CAN_NOT_ATTACK;
}