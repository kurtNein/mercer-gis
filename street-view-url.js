var base_url = 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint='

var lat = Text($feature.LATITUDE)
var lon = Text($feature.LONGITUDE)

var full_url = base_url + lat + ',' + lon

return full_url
