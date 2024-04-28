import React, { useEffect, useState } from 'react';

const UserGeolocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '', lng: '' }
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    };

    const onError = error => {
        setLocation({
            loaded: true,
            error,
        });
    };

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            });
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }); // No dependency array to trigger geolocation on each render

    return location;
};

export default UserGeolocation;
