import React, {Component} from 'react'
import MenuItem from '../MenuItem/index'
import "../Directory/index.scss"
export default class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections : [{
                title:'Large Household Appliances',
                imageUrl : '/images/largehousehold.jpg',
                id: 1,
                linkUrl : '/largehouseholdappliances'
            },
            {
                title : 'Small Household Appliances',
                imageUrl : '/images/smallhousehold.jpg',
                id: 2,
                linkUrl : '/smallhouseholdappliances'
            },
            {
                title : 'IT Equipments',
                imageUrl : '/images/itequipment.jpg',
                id: 3,
                linkUrl : '/itequipments'
            },
            {
                title : 'Electrical Tools',
                imageUrl : '/images/electricaltools.jpg',
                id: 4,
                size: 'large',
                linkUrl : '/electricaltools'
            },
            {
                title : 'Monitoring & Control Instruments',
                imageUrl : '/images/monitoring.png',
                id: 5,
                size : 'large',
                linkUrl : '/monitoringcontrolinstruments'
            }]
        }
    }
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}
