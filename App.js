import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  processColor,
  SafeAreaView
} from 'react-native';

import {Content, Container} from 'native-base';

import {PieChart} from 'react-native-charts-wrapper';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 18,
        form: 'CIRCLE',

        horizontalAlignment: "LEFT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [{value: 45, label: 'Sandwiches'},
            {value: 25, label: 'Salads'},
            {value: 20, label: 'Soup'}],
          label: '',
          config: {
            colors: [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C')],
            valueTextSize: 20,
            valueTextColor: processColor('green'),
            sliceSpace: 5,
            selectionShift: 13,
            xValuePosition: "INSIDE_SLICE",
            yValuePosition: "INSIDE_SLICE",
            valueFormatter: "#'%'",
            valueLineColor: processColor('green'),
            valueLinePart1Length: 0.5
          }
        }],
      },
      highlights: [{x:2}],
      description: {
        text: '',
        textSize: 0,
        textColor: processColor('darkgray'),

      }
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    // console.log(event.nativeEvent)
  }

  render() {
    return (
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor('white')}
            // chartDescription={this.state.description}
            data={this.state.data}
            legend={this.state.legend}
            highlights={this.state.highlights}

            entryLabelColor={processColor('green')}
            entryLabelTextSize={0}
            drawEntryLabels={true}

            rotationEnabled={false}
            rotationAngle={45}
            usePercentValues={true}
            // styledCenterText={{text:'Pie center text!', color: processColor('pink'), size: 20}}
            centerTextRadiusPercent={100}
            holeRadius={0}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={0}
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={360}
            onSelect={this.handleSelect.bind(this)}
            onChange={(event) => console.log(event.nativeEvent)}
          />
       
    );
  }
}

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    margin:10
  }
});

export default App;

// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   processColor
// } from 'react-native';

// import {BarChart} from 'react-native-charts-wrapper';

// class App extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       legend: {
//         enabled: true,
//         textSize: 14,
//         form: 'SQUARE',
//         formSize: 14,
//         xEntrySpace: 10,
//         yEntrySpace: 5,
//         formToTextSpace: 5,
//         wordWrapEnabled: true,
//         maxSizePercent: 0.5
//       },
//       data: {
//         dataSets: [{
//           values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
//           label: 'Bar dataSet',
//           config: {
//             color: processColor('teal'),
//             barShadowColor: processColor('lightgrey'),
//             highlightAlpha: 70,
//             highlightColor: processColor('red'),
//           }
//         }],

//         config: {
//           barWidth: 0.7,
//         }
//       },
//       highlights: [{x: 3}, {x: 6}],
//       xAxis: {
//         valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//         granularityEnabled: true,
//         granularity : 1,
//       }
//     };
//   }

//   handleSelect(event) {
//     let entry = event.nativeEvent
//     if (entry == null) {
//       this.setState({...this.state, selectedEntry: null})
//     } else {
//       this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
//     }

//     console.log(event.nativeEvent)
//   }


//   render() {
//     return (
//       <View style={{flex: 1}}>

//         {/* <View style={{height:80}}>
//           <Text> selected entry</Text>
//           <Text> {this.state.selectedEntry}</Text>
//         </View> */}


//         <View style={styles.container}>
//           <BarChart
//             style={styles.chart}
//             data={this.state.data}
//             xAxis={this.state.xAxis}
//             animation={{durationX: 2000}}
//             legend={this.state.legend}
//             gridBackgroundColor={processColor('#ffffff')}
//             visibleRange={{x: { min: 5, max: 5 }}}
//             drawBarShadow={false}
//             drawValueAboveBar={true}
//             drawHighlightArrow={true}
//             onSelect={this.handleSelect.bind(this)}
//             highlights={this.state.highlights}
//             onChange={(event) => console.log(event.nativeEvent)}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF'
//   },
//   chart: {
//     flex: 1
//   }
// });

// export default App;


// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Button,
//   View, processColor
// } from 'react-native';
// import update from 'immutability-helper';

// import {LineChart} from 'react-native-charts-wrapper';

// class App extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       data: {},

//       marker: {
//         enabled: true,
//         digits: 2,
//         backgroundTint: processColor('teal'),
//         markerColor: processColor('#F0C0FF8C'),
//         textColor: processColor('white'),
//       },
//       xAxis: {
//         granularityEnabled: true,
//         granularity: 1,
//       },
//       // visibleRange: {x: {min: 1, max: 2}}
//     };
//   }

//   componentDidMount() {

//     this.setState(
//       update(this.state, {
//         data: {
//           $set: {
//             dataSets: [{
//               values: [{x: 4, y: 135}, {x: 5, y: 0.88}, {x: 6, y: 0.77}, {x: 7, y: 105}], label: 'A',
//             }, {
//               values: [{x: 4, y: 105}, {x: 5, y: 90}, {x: 6, y: 130}, {x: 7, y: 100}], label: 'B',
//             }, {
//               values: [{x: 4, y: 110}, {x: 5, y: 110}, {x: 6, y: 105}, {x: 7, y: 115}], label: 'C',
//             }],
//           }
//         }
//       })
//     );


//   }

//   onPressLearnMore() {

//     this.refs.chart.setDataAndLockIndex({
//       dataSets: [{
//         values: [
//           {x: 1, y: 0.88},
//           {x: 2, y: 0.77},
//           {x: 3, y: 105},
//           {x: 4, y: 135},
//           {x: 5, y: 0.88},
//           {x: 6, y: 0.77},
//           {x: 7, y: 105},
//           {x: 8, y: 135}
//         ],
//         label: 'A',
//       }, {
//         values: [
//           {x: 1, y: 90},
//           {x: 2, y: 130},
//           {x: 3, y: 100},
//           {x: 4, y: 105},
//           {x: 5, y: 90},
//           {x: 6, y: 130},
//           {x: 7, y: 100},
//           {x: 8, y: 105}
//         ],
//         label: 'B',
//       }, {
//         values: [
//           {x: 1, y: 110},
//           {x: 2, y: 105},
//           {x: 3, y: 115},
//           {x: 4, y: 110},
//           {x: 5, y: 110},
//           {x: 6, y: 105},
//           {x: 7, y: 115},
//           {x: 8, y: 110}],
//         label: 'C',
//       }],
//     })
//   }

//   handleSelect(event) {
//     let entry = event.nativeEvent
//     if (entry == null) {
//       this.setState({...this.state, selectedEntry: null})
//     } else {
//       this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
//     }

//     console.log(event.nativeEvent)
//   }

//   render() {
//     return (
//       <View style={{flex: 1}}>

//         <Button onPress={this.onPressLearnMore.bind(this)} title="Press to load more"/>

//         <View style={{height: 80}}>
//           <Text> selected entry</Text>
//           <Text> {this.state.selectedEntry}</Text>
//         </View>

//         <View style={styles.container}>
//           <LineChart
//             style={styles.chart}
//             data={this.state.data}
//             chartDescription={{text: ''}}
//             legend={this.state.legend}
//             marker={this.state.marker}
//             xAxis={this.state.xAxis}            
//             drawGridBackground={false}
//             borderColor={processColor('teal')}
//             borderWidth={1}
//             drawBorders={true}
//             autoScaleMinMaxEnabled={false}
//             touchEnabled={true}
//             dragEnabled={true}
//             scaleEnabled={true}
//             scaleXEnabled={true}
//             scaleYEnabled={true}
//             pinchZoom={true}
//             doubleTapToZoomEnabled={true}
//             highlightPerTapEnabled={true}
//             highlightPerDragEnabled={false}
//             // visibleRange={this.state.visibleRange}
//             dragDecelerationEnabled={true}
//             dragDecelerationFrictionCoef={0.99}
//             ref="chart"
//             keepPositionOnRotation={false}
//             onSelect={this.handleSelect.bind(this)}
//             onChange={(event) => console.log(event.nativeEvent)}
//           />
//         </View>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF'
//   },
//   chart: {
//     flex: 1
//   }
// });

// export default App;

// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   processColor
// } from 'react-native';
// import update from 'immutability-helper';

// import _ from 'lodash';
// import {LineChart} from 'react-native-charts-wrapper';

// const COLOR_PURPLE = processColor('#697dfb');

// class App extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       data: {},
//       xAxis: {},
//       yAxis: {}
//     };
//   }

//   componentDidMount() {
//     const valueRange = 100;
//     const size = 20;

//     this.setState(
//       update(this.state, {
//         xAxis: {
//           $set: {
//             textColor: processColor('red'),
//             textSize: 16,
//             gridColor: processColor('red'),
//             gridLineWidth: 1,
//             axisLineColor: processColor('darkgray'),
//             axisLineWidth: 1.0,
//             gridDashedLine: {
//               lineLength: 5,
//               spaceLength: 15
//             },
//             avoidFirstLastClipping: true,
//             position: 'BOTTOM'
//           }
//         },
//         yAxis: {
//           $set: {
//             left: {
//               drawGridLines: true
//             },
//             right: {
//               enabled: true
//             }
//           }
//         },
//         data: {
//           $set: {
//             dataSets: [{
//               values: this._randomYValues(valueRange, size),
//               label: '',
//               config: {
//                 lineWidth: 1.6,
//                 drawCircles: true,
//                 drawCubicIntensity: 0.1,
//                 drawCubic: false,
//                 drawHighlightIndicators: true,
//                 color: COLOR_PURPLE,
//                 drawFilled: true,
//                 fillColor: COLOR_PURPLE,
//                 fillAlpha: 70
//               }
//             }],
//           }
//         }
//       })
//     );
//   }

//   _randomYValues(range, size) {
//     const nextValueMaxDiff = 0.2;
//     let lastValue = range / 2;

//     return _.times(size, () => {
//       let min = lastValue * (1 - nextValueMaxDiff);
//       let max = lastValue * (1 + nextValueMaxDiff);
//       return {y: Math.random() * (max - min) + min};
//     });
//   }

//   handleSelect(event) {
//     let entry = event.nativeEvent
//     if (entry == null) {
//       this.setState({...this.state, selectedEntry: null})
//     } else {
//       this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
//     }

//     console.log(event.nativeEvent)
//   }

//   render() {
//     return (

//       <View style={{flex: 1}}>

//         {/* <View style={{height:80}}>
//           <Text> selected entry</Text>
//           <Text> {this.state.selectedEntry}</Text>
//         </View> */}

//         <View style={styles.container}>
//           <LineChart
//             style={styles.chart}
//             data={this.state.data}
//             chartDescription={{text: ''}}
//             xAxis={this.state.xAxis}
//             yAxis={this.state.yAxis}
//             legend={{enabled: false}}
//             onSelect={this.handleSelect.bind(this)}
//             onChange={(event) => console.log(event.nativeEvent)}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF'
//   },
//   chart: {
//     flex: 1
//   }
// });

// export default App;