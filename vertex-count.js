var line_geo =  Dictionary(Text(Geometry($feature)));
//Reference to this feature's geometry.
var paths = line_geo['paths'];
var vertex_count = 0
//Stores the number of vertexes and starts at 0.
for (var path_idx in paths){
    for (var vert_idx in paths[path_idx])
        {
        vertex_count++
        }
    }
    //Increments number of vertexes by 1.
return vertex_count