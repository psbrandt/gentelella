function debilitatingDepression() {

Morris.Bar({
  element: 'mason-dd',
  data: [
  {year: '2010', eighth: 44, tenth: 50, twelfth: 49},
  {year: '2011', eighth: 37, tenth: 48, twelfth: 41},
  {year: '2012', eighth: 33, tenth: 47, twelfth: 36},
  {year: '2013', eighth: 28, tenth: 35, twelfth: 34},
  {year: '2014', eighth: 25, tenth: 34, twelfth: 35},
  {year: '2015', eighth: 27, tenth: 35, twelfth: 34}
],
  xkey: 'year',
  ykeys: ['eighth', 'tenth', 'twelfth'],
  labels: ['8th grade', '10th grade', '12th grade'],
  postUnits: '%',
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 100
});

}

function mentalHealthProviders() {
  Morris.Bar({
    element: 'mason-mhp',
    data: [
    {year: '2010', count: 28},
    {year: '2011', count: 29},
    {year: '2012', count: 32},
    {year: '2013', count: 35},
    {year: '2014', count: 54},
    {year: '2015', count: 58}
  ],
    xkey: 'year',
    ykeys: ['count'],
    labels: ['Number of Mental Health Providers'],
    postUnits: '',
    barRatio: 0.4,
    barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
    xLabelAngle: 35,
    hideHover: 'auto',
    resize: true,
    ymax: 80
  });
}

function illegalDrugs() {
  Morris.Line({
  element: 'mason-id',
  data: [
  {year: '2010', sixth: 1.5, eighth: 4.0, tenth: 5.0, twelfth: 7.0},
  {year: '2011', sixth: 1.1, eighth: 4.5, tenth: 4.0, twelfth: 8.1},
  {year: '2012', sixth: 0.9, eighth: 3.6, tenth: 2.7, twelfth: 7.6},
  {year: '2013', sixth: 1.1, eighth: 3.2, tenth: 3.0, twelfth: 6.9},
  {year: '2014', sixth: 0.7, eighth: 3.3, tenth: 4.6, twelfth: 6.5},
  {year: '2015', sixth: 0.3, eighth: 3.5, tenth: 4.6, twelfth: 6.7}
],
  xkey: 'year',
  ykeys: ['sixth', 'eighth', 'tenth', 'twelfth'],
  labels: ['6th grade', '8th grade', '10th grade', '12th grade'],
  postUnits: '%',
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 10
});
}

function priorityHealthIssues() {
  Morris.Line({
  element: 'mason-phi',
  data: [
  {year: '2010', lse: 32.4, obesity: 14.6, drugs: 25.5},
  {year: '2011', lse: 29.1, obesity: 15.2, drugs: 26.1},
  {year: '2012', lse: 28.5, obesity: 14.1, drugs: 33.4},
  {year: '2013', lse: 26.1, obesity: 15.2, drugs: 22.5},
  {year: '2014', lse: 23.4, obesity: 15.5, drugs: 21.3},
  {year: '2015', lse: 20.4, obesity: 16.3, drugs: 20.1}
],
  xkey: 'year',
  ykeys: ['lse', 'obesity', 'drugs'],
  labels: ['Low self-esteem', 'Obesity', 'Drug Use'],
  postUnits: '%',
  behaveLikeLine: true,
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 30
});
}

function obestityComparison() {
  Morris.Bar({
    element: 'mason-ocp',
    data: [
    {year: '2010', mason: 13.9, peer: 8.9, us: 11.1},
    {year: '2011', mason: 14.8, peer: 11.2, us: 10.9},
    {year: '2012', mason: 14.0, peer: 11.2, us: 8.8},
    {year: '2013', mason: 15.2, peer: 13.5, us: 9.8},
    {year: '2014', mason: 16.1, peer: 13.4, us: 11.1},
    {year: '2015', mason: 16.3, peer: 13.4, us: 10.0}
  ],
    xkey: 'year',
    ykeys: ['mason', 'peer', 'us'],
    labels: ['Mason County', 'Peer Counties', 'United States'],
    postUnits: '%',
    barRatio: 0.4,
    barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
    xLabelAngle: 35,
    hideHover: 'auto',
    resize: true,
    ymax: 20
  });
}

function drugTests() {
  Morris.Bar({
    element: 'mason-dt',
    data: [
    {year: '2010', pos: 12.1, neg: (100 - 12.1)},
    {year: '2011', pos: 9.2, neg: (100 - 9.2)},
    {year: '2012', pos: 13.1, neg: (100 - 13.1)},
    {year: '2013', pos: 14.0, neg: (100 - 14.0)},
    {year: '2014', pos: 13.2, neg: (100 - 13.2)},
    {year: '2015', pos: 8.7, neg: (100 - 8.7)}
  ],
    xkey: 'year',
    ykeys: ['pos', 'neg'],
    labels: ['Positive', 'Negative'],
    postUnits: '%',
    barRatio: 0.4,
    barColors: ['#E74C3C', '#26B99A', '#34495E', '#ACADAC', '#3498DB'],
    xLabelAngle: 35,
    hideHover: 'auto',
    resize: true,
    ymax: 80
  });
}

function bmi() {
  Morris.Bar({
    element: 'mason-bmi',
    data: [
    {year: '2010', ma: 28.7, wa: 25.1},
    {year: '2011', ma: 27.9, wa: 24.6},
    {year: '2012', ma: 28.1, wa: 25.6},
    {year: '2013', ma: 29.2, wa: 24.7},
    {year: '2014', ma: 31.1, wa: 23.1},
    {year: '2015', ma: 30.1, wa: 24.5}

  ],
    xkey: 'year',
    ykeys: ['ma', 'wa'],
    labels: ['Mason', 'County'],
    postUnits: '',
    barRatio: 0.4,
    barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
    xLabelAngle: 35,
    hideHover: 'auto',
    resize: true,
    ymax: 40
  });
}

function parentalAttendance() {
  Morris.Line({
  element: 'mason-pea',
  data: [
  {year: '2010', pa: 33.4},
  {year: '2011', pa: 45.1},
  {year: '2012', pa: 52.5},
  {year: '2013', pa: 63.1},
  {year: '2014', pa: 87.4},
  {year: '2015', pa: 95.4}
],
  xkey: 'year',
  ykeys: ['pa'],
  labels: ['Parental Attendance Rate'],
  postUnits: '%',
  behaveLikeLine: true,
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 100
});
}

function twoWeeks() {
  Morris.Bar({
  element: 'mason-extended',
  data: [
  {year: '2010', sixth: 1.5, eighth: 4.0, tenth: 5.0, twelfth: 7.0},
  {year: '2011', sixth: 1.1, eighth: 4.5, tenth: 4.0, twelfth: 8.1},
  {year: '2012', sixth: 0.9, eighth: 3.6, tenth: 2.7, twelfth: 7.6},
  {year: '2013', sixth: 1.1, eighth: 3.2, tenth: 3.0, twelfth: 6.9},
  {year: '2014', sixth: 0.7, eighth: 3.3, tenth: 4.6, twelfth: 6.5},
  {year: '2015', sixth: 0.3, eighth: 3.5, tenth: 4.6, twelfth: 6.7}
],
  xkey: 'year',
  ykeys: ['sixth', 'eighth', 'tenth', 'twelfth'],
  labels: ['6th grade', '8th grade', '10th grade', '12th grade'],
  postUnits: '%',
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 10
});
}

function getRand(max) {
  return parseFloat((Math.random() * max).toFixed(2));
}

function suicide() {
  Morris.Bar({
  element: 'mason-suicide',
  data: [
  {year: '2010', sixth: getRand(4), eighth: getRand(6), tenth: getRand(8), twelfth: getRand(10)},
  {year: '2011', sixth: getRand(4), eighth: getRand(6), tenth: getRand(8), twelfth: getRand(10)},
  {year: '2012', sixth: getRand(4), eighth: getRand(6), tenth: getRand(8), twelfth: getRand(10)},
  {year: '2013', sixth: getRand(4), eighth: getRand(6), tenth: getRand(8), twelfth: getRand(10)},
  {year: '2014', sixth: getRand(4), eighth: getRand(6), tenth: getRand(8), twelfth: getRand(10)},
  {year: '2015', sixth: getRand(4), eighth: getRand(6), tenth: getRand(8), twelfth: getRand(10)}
],
  xkey: 'year',
  ykeys: ['sixth', 'eighth', 'tenth', 'twelfth'],
  labels: ['6th grade', '8th grade', '10th grade', '12th grade'],
  postUnits: '%',
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 10
});
}

function groupCounselling() {
  Morris.Line({
  element: 'mason-gc',
  data: [
  {year: '2010', pa: 234},
  {year: '2011', pa: 350},
  {year: '2012', pa: 302},
  {year: '2013', pa: 410},
  {year: '2014', pa: 450},
  {year: '2015', pa: 640}
],
  xkey: 'year',
  ykeys: ['pa'],
  labels: ['Group Counseling Attendance'],
  postUnits: '',
  behaveLikeLine: true,
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 1000
});
}

function initMason() {
  console.log('Initializing Mason County Public Health Dashboard');

  debilitatingDepression();
  mentalHealthProviders();
  illegalDrugs();
  priorityHealthIssues();
  obestityComparison();
  drugTests();
}

function initObesity() {
   bmi();
   parentalAttendance();
}

function initMental() {
   twoWeeks();
   suicide();
   groupCounselling();
}

function tobacco() {
  Morris.Bar({
  element: 'mason-tobacco',
  data: [
  {year: 'None', sixth: getRand(1), eighth: getRand(3), tenth: getRand(4), twelfth: getRand(6)},
  {year: '1-2 days', sixth: getRand(1), eighth: getRand(3), tenth: getRand(4), twelfth: getRand(6)},
  {year: '3-5 days', sixth: getRand(1), eighth: getRand(3), tenth: getRand(4), twelfth: getRand(6)},
  {year: '6-9 fays', sixth: getRand(1), eighth: getRand(3), tenth: getRand(4), twelfth: getRand(6)},
  {year: '10-29 days', sixth: getRand(1), eighth: getRand(3), tenth: getRand(4), twelfth: getRand(6)},
  {year: 'Every day', sixth: getRand(1), eighth: getRand(3), tenth: getRand(4), twelfth: getRand(6)}
],
  xkey: 'year',
  ykeys: ['sixth', 'eighth', 'tenth', 'twelfth'],
  labels: ['6th grade', '8th grade', '10th grade', '12th grade'],
  postUnits: '%',
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 8
});
}

function heroine() {
  Morris.Bar({
  element: 'mason-heroine',
  data: [
  {year: '2010', eighth: getRand(3), tenth: getRand(4), twelfth: getRand(5)},
  {year: '2011', eighth: getRand(3), tenth: getRand(4), twelfth: getRand(5)},
  {year: '2012', eighth: getRand(3), tenth: getRand(4), twelfth: getRand(5)},
  {year: '2013', eighth: getRand(2), tenth: getRand(3), twelfth: getRand(4)},
  {year: '2014', eighth: getRand(2), tenth: getRand(3), twelfth: getRand(4)},
  {year: '2015', eighth: getRand(2), tenth: getRand(3), twelfth: getRand(4)}
],
  xkey: 'year',
  ykeys: ['eighth', 'tenth', 'twelfth'],
  labels: ['8th grade', '10th grade', '12th grade'],
  postUnits: '%',
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 10
});
}

function cocaine() {
  Morris.Bar({
  element: 'mason-cocaine',
  data: [
  {year: '2010', eighth: getRand(5), tenth: getRand(6), twelfth: getRand(7)},
  {year: '2011', eighth: getRand(5), tenth: getRand(6), twelfth: getRand(7)},
  {year: '2012', eighth: getRand(5), tenth: getRand(6), twelfth: getRand(7)},
  {year: '2013', eighth: getRand(4), tenth: getRand(5), twelfth: getRand(6)},
  {year: '2014', eighth: getRand(4), tenth: getRand(5), twelfth: getRand(6)},
  {year: '2015', eighth: getRand(4), tenth: getRand(5), twelfth: getRand(6)}
],
  xkey: 'year',
  ykeys: ['eighth', 'tenth', 'twelfth'],
  labels: ['8th grade', '10th grade', '12th grade'],
  postUnits: '%',
  barRatio: 0.4,
  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
  xLabelAngle: 35,
  hideHover: 'auto',
  resize: true,
  ymax: 10
});
}

function family() {
  Morris.Donut({
  element: 'mason-family',
  data: [
    {label: "Referrals Assessed", value: 22},
    {label: "Participants Enrolled", value: 16},
    {label: "Participants Dropped", value: 3},
    {label: "Children Served", value: 23},
    {label: "Children Born to\nDrug Free Parent", value: 4},
    {label: "Participants Successfully\nGraduated Program or\nCase Dismissed", value: 4},
    {label: "Children Reunited\nwith Family", value: 17}
  ],
  colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB', '#5680A9', '#8DBFDE', '#163B55']
});
}

function felony() {
  Morris.Donut({
  element: 'mason-felony',
  data: [
    {label: "Participants Enrolled", value: 17},
    {label: "Children Reunited with Family", value: 8},
    {label: "Children Born to\nDrug Free Parent", value: 2},
    {label: "Partcipants Successfully\nGraduated Program", value: 10},
    {label: "Drug Tests Performed", value: 37},
    {label: "Partcipants Improved Level\nof Formal Education", value: 37},
    {label: "Partcipants Improved Level\nof Employment", value: 21}
  ],
  colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB', '#5680A9', '#8DBFDE', '#163B55']
});
}

function initSubstance() {
  tobacco();
  heroine();
  cocaine();
  family();
  felony();
}
