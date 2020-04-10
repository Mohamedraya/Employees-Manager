import React , {Component} from 'react';
import { View , Text,Picker} from 'react-native';
import {CardSection,Input} from './common';
import {connect} from 'react-redux';
import employeeUpdate from '../actions';

class EmployeeForm extends Component {
    render() {
        return(
            <View>
                <CardSection>
                   <Input label="Name" placeholder="jane"
                          onChangeText={text => this.props.employeeUpdate({props:'name',value:text})}
                          value={this.props.name}
                   />
                </CardSection>

                <CardSection>
                   <Input label="phone" placeholder="010-5251"
                          onChangeText={text => this.props.employeeUpdate({props:'phone',value:text})}
                          value={this.props.phone}
                   /> 
                </CardSection>

                <CardSection>
                    
                </CardSection>
                  <Text style={Styles.pickerTextStyle}>Shift</Text>
                  <Picker
                    style={{flex: 1}} 
                    onValueChange={day => this.props.employeeUpdate({prop:'shift',value:day})}
                    selectedValue={this.props.shift}
                    >
                      <Picker.Item label="Monday" value="Monday" />
                      <Picker.Item label="Tuseday" value="Tuseday" />
                      <Picker.Item label="Wednesday" value="Wednesday" />
                      <Picker.Item label="Thursday" value="Thursday" />
                      <Picker.Item label="Friday" value="Friday" />
                      <Picker.Item label="Saturday" value="Saturday" />
                      <Picker.Item label="Sunday" value="Sunday" />
                  </Picker>
                <CardSection></CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name , phone , shift} = state.employeeForm;
    return {name,phone,shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);