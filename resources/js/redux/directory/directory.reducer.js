const INITIAL_STATE = {
    sections: [
        {
            title:'Large Household Appliances',
            imageUrl : '/images/largehousehold.jpg',
            id: 1,
            linkUrl : '/shop/largehouseholdappliances'
        },
        {
            title : 'Small Household Appliances',
            imageUrl : '/images/smallhousehold.jpg',
            id: 2,
            linkUrl : '/shop/smallhouseholdappliances'
        },
        {
            title : 'IT Equipments',
            imageUrl : '/images/itequipment.jpg',
            id: 3,
            linkUrl : '/shop/itequipments'
        },
        {
            title : 'Electrical Tools',
            imageUrl : '/images/electricaltools.jpg',
            id: 4,
            size: 'large',
            linkUrl : '/shop/electricaltools'
        },
        {
            title : 'Monitoring & Control Instruments',
            imageUrl : '/images/monitoring.png',
            id: 5,
            size : 'large',
            linkUrl : '/shop/monitoringcontrolinstruments'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;