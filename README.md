# Stick Classroom
Cheat your way to an A+

ToDo:
- Desks Array - collision with all

Wow:
Okay it's time for Unit Tests + more error handling. Story-time so in the Desk class I set my Rect dimensions as length and height instead of width and height. In the aabb function call we call the function with desk1.width (same when we tried converting 2d array for desks into 1d array via flat() and then calling aabb) which of course will be undefined since it doesn't exist. We couldn't know that until we print that value out via console.log(). If we had error handling this would have been apparent immediately instead of 1.5 wasted hours of debugging the 2d array and the flat function and all that trying to fix the issue. Such a waste of time my boy lol I'm implementing unit tests asap to ensure the function runs correctly, I do not trust myself anymore to name stuff right when calling functions. I'm just used to the compiler throwing an immediate error since desk1.width just didn't exist in the class, oof Javascript. 

How to run:
python3 -m http.server