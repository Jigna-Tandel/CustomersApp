import React, { Component } from 'react';

export function fetchPost() {
    return fetch('api/Customers', {
        method: 'GET',
        //mode: 'CORS'
    }).then(res => res.json())
        .catch(err => err);
}

