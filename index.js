import React from "react";
import { View, Text, FlatList, TouchableWithoutFeedback, Image,StyleSheet } from "react-native";
import ObjectiveListItem from "./src/listitems/objective-list/ObjectiveListItem";
import Collapsible from 'react-native-collapsible';




class ObjectiveHeaderItem extends React.PureComponent {
    
    state = {
        isHidden: false
    };
    // anime = {
    //     height: new Animated.Value(),
    //     expanded: true,
    //     contentHeight: 0,
    // }

    constructor(){
        super();
        // this._initContentHeight = this._initContentHeight.bind(this);
        this.toggle = this.toggle.bind(this);
        // this.anime.expanded = props.expanded;

    }
    
    componentWillReceiveProps(props){
        
        // console.log(props.subject);
    //     console.log('objective header item props '+props.objectives.objectives);
    }
    

    toggle() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    _renderItem = ({item}) => (<ObjectiveListItem item={item} navigation= {this.props.navigation} onObjectiveSelected={this.props.onObjectiveSelected} />);

    render(){
      return (
        <View style={ [styles.margin20, styles.marginTop0]}>
            {
                this.props.subject.name ?
                    <TouchableWithoutFeedback style={{justifyContent: 'center', alignItems: 'center', flex:1, flexDirection: 'row'}} onPress={this.toggle}>
                        <View style={styles.listItemDarkHeaderStyle}>
                    
                            <Text style={styles.listItemStageHeaderTextStyle} numberOfLines={1} ellipsizeMode='tail'>
                                { this.props.subject.name }  
                            </Text>
                                <Image source={this.state.isHidden ? require('./src/assets/icons/arrow_up_white.png') : require('./src/assets/icons/arrow_down_white.png') } 
                                    resizeMode='contain' style={{ height: 12, width: 12, alignSelf: 'center', marginRight: 5 }} />
                            
                            {/* arrow_down_white
                            <Icon name={this.state.isHidden ? 'chevron-up' : 'chevron-down'} style={{ color: '#fff',fontSize: themeStyle.FONT_SIZE_EXTRA_LARGE,}}
                                onPress={this.toggle} />      */}
                        </View>
                    </TouchableWithoutFeedback> : <View style={styles.listBottomBorderStyle} />
                    
            }
                <Collapsible collapsed={this.state.isHidden} duration={400}>
                    <FlatList     
                        initialNumToRender={this.props.subject.objectives.length}
                        maxToRenderPerBatch={this.props.subject.objectives.length}
                        data={this.props.subject.objectives}
                        keyExtractor={(item, index) => (item.uuid ? item.uuid : "subject")+'_'+index}
                        renderItem={this._renderItem}
                    />
                </Collapsible>
        </View>
      )
    }
}



const styles = StyleSheet.create({
    margin20: {
        margin: 20
    },
    marginTop0: {
        marginTop: 0
    },
    listItemDarkHeaderStyle:{
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 8,
        backgroundColor: '#4b4b4c',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        height: 35
    },
    listItemStageHeaderTextStyle:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        alignSelf: 'stretch',
    },
    listBottomBorderStyle: {
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
    }
  
});

export default ObjectiveHeaderItem;