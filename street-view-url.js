var base_url = 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=';

if (IsEmpty(Geometry($feature))) {
return 'None'
}

var lon = Text(Round(Geometry($feature).x, 6));
var lat = Text(Round(Geometry($feature).y, 6));

var full_url = base_url + lat + ',' + lon

return full_url
