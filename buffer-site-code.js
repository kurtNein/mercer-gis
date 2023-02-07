// If a new feature is within a distance (geodetic) of another feature, and the other feature has a value for this field,
// The new feature will copy that value to its same field. Otherwise, it returns the number zero.

var siteBuffer = BufferGeodetic($feature, 100, 'yards')

var siteContains = First(Contains(siteBuffer, FeatureSetByName($datastore,"Surveillance_Data")))

Iif(IsEmpty(siteContains),0,siteContains.site_code)
