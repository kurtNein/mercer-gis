var line = Geometry($feature);
var path = line.paths[0];
var pt = path[-1];
return pt.z
