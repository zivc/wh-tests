# wh-tests

In the test documentation it purposely says use stdout, so I did, directly, instead of via `console.log`.

## Q1

>Write a program that, when given a list of words separated by spaces, outputs the words in reverse order. 
>
>The input may contain multiple lines, consider each line of the input to be a separate set of words, and output each set of words on a new line. 
>
>*Example input:* 
>
>Welcome to William Hill 
>
>Enjoy the test 
>
>*Example output:*
>
>Hill William to Welcome 
>
>test the Enjoy 

Usually I use `commander` package for CLI stuff, but this is straight forwards enough.

## Q2
>In the UK there are coins with the following denominations:
>
>1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), £2 (200p)
>
>We can make 3p using the following two distinct combinations:
>> 1p + 1p + 1p 
>>
>> 1p + 2p 
>
>Write a program that, when given an input Xp, outputs the number of distinct ways Xp can be produced using UK coins. You may expect the input to contain a single number for X on each line. Each type of coin may be used an arbitrary number of times.

This is the cleanest way I could think of it, using the same coin multiple times. For example, to find out a way to calculate 10p with change could involve 10 x 1p coins.

Beware, it starts to slow down after you put in things like 40p and above.

I was cheeky and added a coin of 0p because I am using Arrays for the calculations.