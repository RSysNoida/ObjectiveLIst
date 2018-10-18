import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import RoundCheckbox from './RoundCheckbox';
import units from "./Viewport";

class ObjectiveListItem extends React.PureComponent {

    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            item: this.props.item,
            selected: false
        };

       
    }

    // componentDidMount(){
    // }

    // componentWillReceiveProps(){
    //     console.log('objective list item props');
    // }
    
    
    render(){
      return (
        <View style={[styles.listItemTrackerStyle, styles.noPadding, styles.listThreeSidedBorderStyle]}>
            <View style={[styles.innerItemHolderStyle, (this.state.item.index > 0 ? styles.leftBar : '')]}>
            {
                this.state.item.is_live ? 
                <View style={styles.liveLabelStyle} >
                    <Text style={styles.liveLabelText} >
                        LIVE
                    </Text>
                </View> : null
            }
            <RoundCheckbox
                checked={this.state.selected}
                onValueChange={(newValue) => {
                    // console.log(newValue);  
                    // this.state.item.is_kpi = newValue;
                    this.setState({
                        selected: newValue
                    })

                    this.props.onObjectiveSelected(newValue, this.state.item.objective.uuid);
                }}
                />
                { this.state.item.index > 1 ? <Image source={require('../../assets/icons/lo-indicator.png')}  style={styles.loIconStyle} /> : null }
            <Text style={styles.textStyle}>
                { this.state.item.objective.description }                
            </Text>
            {/* <FlatList
                data={this.getReformatteddList()}
                keyExtractor={(item, index) => item.subject_area.uuid}
                renderItem={({item}) => <ObjectiveHeaderItem objectives={item} navigation= {this.props.navigation} />}
              /> */}
            </View>
            {
                this.state.item.objective.is_kpi ? 
                    <View style={styles.kpiLabelStyle} >
                        <Text style={styles.kpiLabelText} >
                            KPI
                        </Text>
                    </View> 
                   : null
            }
            {
                this.state.item.objective.type && this.state.item.objective.type === 'class_goal' ? 
                    <View style={styles.groupLabelStyle} >
                        <Image source={require('../../assets/icons/ic_class_goal.png')} resizeMode='contain' style={styles.groupIconStyle} />
                    </View> 
                   : null
            }
            {/* <FlatList
                data={props.objectives}
                keyExtractor={(item, index) => item.subject_area.uuid}
                renderItem={({item}) => <Text>{item.subject_area.name}</Text> }// <YearListItem years={item} navigation= {props.navigation} />}
            /> */}
        </View>
      );
    }
}

export default ObjectiveListItem;

const styles = StyleSheet.create({
    listItemTrackerStyle:{
        flex:1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#ffffff',
        // flexWrap: 'wrap'
    },

    noPadding: {
        padding: 0
    },
    listThreeSidedBorderStyle: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
    },
    innerItemHolderStyle: {
        flex: 1,
        flexDirection: 'row',
        // paddingBottom: 10,
        // paddingTop: 10,
        // paddingRight: 10,
        // paddingLeft: 5,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth: 0,
        borderLeftColor: 'transparent',

    },
    textStyle:{
        flex:1,
        fontSize:themeStyle.FONT_SIZE_SMALL,
        backgroundColor: themeStyle.WHITE_COLOR,
        color:themeStyle.BLACK_COLOR,
        alignSelf: 'stretch',
        marginLeft:5,
        marginRight:5,
        paddingTop:10,
        paddingBottom:10
    },  
   
    kpiLabelStyle: {
        backgroundColor: themeStyle.KPI_BACKGROUND_COLOR,
        // position: 'absolute',
        // right: 0,
        width: 30,
        // height:'100%',
        flexDirection:'column', 
        justifyContent:'center',
        alignItems: 'center',
    },
    kpiLabelText: {        
        transform: [{ rotate: '-90deg'}],
        color: themeStyle.WHITE_COLOR,
        fontWeight: 'bold',
        fontSize: themeStyle.FONT_SIZE_SMALL
    },
    liveLabelStyle: {
        backgroundColor: themeStyle.LIVE_BACKGROUND_COLOR,
        // position: 'absolute',
        // right: 0,
        width: 30,
         height:'100%',
        flexDirection:'column', 
        justifyContent:'center',
        alignItems: 'center',
    },
    liveLabelText: {        
        transform: [{ rotate: '-90deg'}],
        color: themeStyle.WHITE_COLOR,
        fontWeight: 'bold',
        fontSize: themeStyle.FONT_SIZE_SMALL,
    },
    groupLabelStyle: {
        backgroundColor: themeStyle.GROUP_BACKGROUND_COLOR,
        // position: 'absolute',
        // right: 0,
        width: 30,
        // height:'100%',
        flexDirection:'column', 
        justifyContent:'center',
        alignItems: 'center',
    },
    groupIconStyle: {
        width: 3.5*units.vw,
        height:3.5*units.vw,
    },
    leftBar: {
        borderLeftWidth: 8,
        borderLeftColor: '#dcdcdc',
    },
    loIconStyle: {
        width: 20,
        height: 20,
        marginLeft: 5
    }
});