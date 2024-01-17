var searchDist = 20

var searchIncrement = 20

var siteBuffer = Buffer($feature, searchDist, 'yards')

var siteContains = First(Contains(siteBuffer, FeatureSetByName($map,"MC_Address_Points_for_Field_Maps")))
Console(IsEmpty(siteContains))

while (searchDist <= 880) {
  searchDist = searchDist
  siteBuffer = BufferGeodetic($feature, searchDist, 'yards')
  siteContains = First(Contains(siteBuffer, FeatureSetByName($map,"MC_Address_Points_for_Field_Maps")))
  Console("Extending to ", searchDist)
  if (isEmpty(siteContains)) {
    searchDist += searchIncrement
    searchIncrement += 40
  }
  else if (!isEmpty(siteContains) && searchDist <= 880) {
    return siteContains.FULLADDR
  }
}
return "Not Located"
