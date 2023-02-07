var siteBuffer = BufferGeodetic($feature, 100, 'yards')

var siteContains = First(Contains(siteBuffer, FeatureSetByName($datastore,"Surveillance_Data")))

Iif(IsEmpty(siteContains),0,siteContains.site_code)