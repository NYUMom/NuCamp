import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { ListItem , Card, Text } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import * as Animatable from 'react-native-animatable';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                    title="Contact Information" wrapperStyle={{margin: 20}}
                    >
                    <Text style={{marginBottom: 10}}>
                        Address: 1 Nucamp Way
                                Seattle, WA 98001
                                U.S.A.
                    </Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>
                    </Card>
                    
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;