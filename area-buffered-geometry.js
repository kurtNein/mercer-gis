var sprayBuffer = Buffer($feature,150, 'feet')
//Buffers an area around the geometry by a given number of specificed units to create a polygon from a line.

var sprayBufferArea = AreaGeodetic(sprayBuffer,'acres')
//Finds the area of the buffered polygon in the specified units.

var roundBufferArea = Round(sprayBufferArea,2)
//Rounds the area to the specified number of decimal places.

return roundBufferArea
