#include <stdio.h>
#include <math.h>

int main(void)
{
    char name = get_string("What's your name?\n");
    printf("Hello, %s\n", name);
}