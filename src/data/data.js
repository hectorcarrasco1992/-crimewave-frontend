import React from 'react'
import axios from 'axios'

let crimeData = [
    {   
        "city_key":"NYC",
        "incident_date": "2019-12-31T21:20:00.000Z",
        "incident_offense": "All Other Offenses",
        "incident_source_name": "NewYork_Police_Department",
        "incident_latitude": 40.7014856,
        "incident_longitude": -73.807906
        
    },
    {
        "city_key": "NYC",
        "incident_code": "687312529-17",
        "incident_date": "2019-12-31T21:20:00.000Z",
        "incident_offense": "Larceny/Theft Offenses",
        "incident_source_name": "NewYork_Police_Department",
        "incident_latitude": 40.7444582,
        "incident_longitude": -73.973028
        
    },
    {
        "city_key": "NYC",
        "incident_code": "489515514-1",
        "incident_date": "'2019-12-31T21:20:00.000Z'",
        "incident_offense": "Larceny/Theft Offenses",
        "incident_source_name": "NewYork_Police_Department",
        "incident_latitude": 40.7097235,
        "incident_longitude": -74.006746
        
    },
    {
        "city_key": "NYC",
        "incident_code": "770310054-75",
        "incident_date": "2019-12-31T21:18:00.000Z",
        "incident_offense": "Destruction/Damage/Vandalism of Property",
        "incident_source_name": "NewYork_Police_Department",
        "incident_latitude": 40.6789853,
        "incident_longitude": -73.864881
        
    },
    {
        "city_key": "NYC",
        "incident_code": "868847275-75",
        "incident_date": "2019-12-31T21:18:00.000Z",
        "incident_offense": "Assault Offenses",
        "incident_source_name": "NewYork_Police_Department",
        "incident_latitude": 40.6789853,
        "incident_longitude": -73.864881
        
    },
]

export default crimeData