// Makes HTTP requests to kubecost API
// Handles headers, query parameters, specific to Kubecost


const axios = require('axios');
// This will need to be dynamically set.
const kubecostAddress = ''
// This will be the standard endpoint for most of out 
const endpoint = '/model/allocation'

async function fetchKubecostMetrics1H () {
    try {
        const params = {
            window: '1h',
            aggregate: 'deployment',
            accumulate: 'true',
            idle: 'true',
        };

        const response = await axios.get(kubecostAddress + endpoint, { params } )

        // Log response data
        console.log(response.data);
        // It's formatted as an array of objects but only has one object with all deployments by namespace?
        return response
    } catch (error) {
        console.error('Error fetching Kubecost metrics in fetchKubecostMetrics1H function.', error)
        return { 
            succes: false,
            log: 'Error fetching Kubecost metrics in fetchKubecostMetrics1H function.',
            error: error.message
        }
    }
}

module.exports = fetchKubecostMetrics1H;