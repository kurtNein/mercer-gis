var zenivex = 13;
var anvil = 11;
var duet = 7;
var fyfanon = 0;
// Assign variables to the full flow rate of their respective products.
// If flow rates are to be changed, change them above in fl oz / min.

var k = [0,];
// The array of flow rate variables.

var flow = When(
    $feature.prod_list == 'zenivex', k[0],
    $feature.prod_list == 'anvil', k[1],
    $feature.prod_list == 'duet', k[2],
    $feature.prod_list == 'fyfanon', k[3],
    0
);
// The variable is assigned a flow rate from the array according to the prod_list used.

var rate = IIf($feature.rate_list == 'full', 1, 0.5);
// Assigns rate to 1 if full and 0.5 if half to take the literal half rate.

var startTime = $feature.time_start;
var endTime = $feature.time_end;
// Assigns start and end time.

var elapsedTime = When(
    DateDiff(endTime, startTime, 'minutes') == 0,1,
    DateDiff(endTime, startTime, 'minutes')
);
// If there is less than 1 minute of spray time elapsed, set elapsedTime to 1 minute.
// Otherwise, find the number of minutes from start to end.

return elapsedTime * flow * rate